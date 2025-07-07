'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import * as turf from '@turf/turf';
import { LatLngTuple } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(m => m.Polygon), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(m => m.Polyline), { ssr: false });
const useMapEvents = dynamic(() => import('react-leaflet').then(m => m.useMapEvents), { ssr: false });

const turfToLatLng = (coords: number[][]): LatLngTuple[] => coords.map(c => [c[1], c[0]]);

interface SearchResult {
  lat: string;
  lon: string;
  display_name: string;
  boundingbox: string[];
}

export default function TurfToolsPage() {
  const [map, setMap] = useState<any>(null);
  const [activeTool, setActiveTool] = useState<string>('buffer');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<SearchResult | null>(null);
  const [bufferCoords, setBufferCoords] = useState<LatLngTuple[]>([]);
  const [pointInside, setPointInside] = useState<string>('Click on the map to test');
  const [polygonCoords, setPolygonCoords] = useState<LatLngTuple[]>([]);
  const [drawingMode, setDrawingMode] = useState<'polygon' | 'line' | null>(null);
  const [drawnPolygons, setDrawnPolygons] = useState<LatLngTuple[][]>([]);
  const [drawnLines, setDrawnLines] = useState<LatLngTuple[][]>([]);
  const [measurements, setMeasurements] = useState<string[]>([]);
  const [currentDrawing, setCurrentDrawing] = useState<LatLngTuple[]>([]);
  const [clickedPoint, setClickedPoint] = useState<LatLngTuple | null>(null);

  const center: LatLngTuple = [27.7172, 85.3240];

  const searchPlaces = async (query: string) => {
    if (!query.trim()) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const selectPlace = (place: SearchResult) => {
    setSelectedPlace(place);
    setSearchResults([]);
    setSearchQuery(place.display_name);

    const bbox = place.boundingbox;
    if (bbox && bbox.length === 4) {
      const [minLat, maxLat, minLng, maxLng] = bbox.map(Number);
      const placePolygon: LatLngTuple[] = [
        [minLat, minLng],
        [minLat, maxLng],
        [maxLat, maxLng],
        [maxLat, minLng],
        [minLat, minLng],
      ];
      setPolygonCoords(placePolygon);
    }

    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);
    if (map && !isNaN(lat) && !isNaN(lng)) {
      map.setView([lat, lng], 14);
    }
  };

  useEffect(() => {
    if (map) {
      if (drawingMode) map.dragging.disable();
      else map.dragging.enable();
    }
  }, [drawingMode, map]);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const clickPosition: LatLngTuple = [lat, lng];

        if (activeTool === 'measure' && drawingMode) {
          setCurrentDrawing(prev => [...prev, clickPosition]);
          return;
        }

        setClickedPoint(clickPosition);
        const point = turf.point([lng, lat]);

        if (activeTool === 'buffer') {
          const buffered = turf.buffer(point, 1, { units: 'kilometers' });
          const bufferLatLng = turfToLatLng(buffered.geometry.coordinates[0]);
          setBufferCoords(bufferLatLng);
        } else if (activeTool === 'pointInPolygon') {
          const polygons: turf.helpers.Polygon[] = [];

          if (polygonCoords.length > 0) {
            polygons.push(turf.polygon([polygonCoords.map(c => [c[1], c[0]])]));
          }

          drawnPolygons.forEach(poly => {
            if (poly.length >= 3) {
              polygons.push(turf.polygon([poly.map(c => [c[1], c[0]])]));
            }
          });

          if (polygons.length === 0) {
            setPointInside('❗ No polygon available. Draw or select one.');
            return;
          }

          const inside = polygons.some(poly => turf.booleanPointInPolygon(point, poly));
          setPointInside(inside ? '✅ Point is INSIDE the polygon' : '❌ Point is OUTSIDE the polygon');
        }
      }
    });
    return null;
  }

  const completeDrawing = () => {
    if (currentDrawing.length < 2) return;

    try {
      if (drawingMode === 'polygon' && currentDrawing.length >= 3) {
        const closedPolygon = [...currentDrawing, currentDrawing[0]];
        setDrawnPolygons(prev => [...prev, closedPolygon]);
        const turfPolygon = turf.polygon([closedPolygon.map(c => [c[1], c[0]])]);
        const area = turf.area(turfPolygon);
        const areaInHectares = (area / 10000).toFixed(2);
        setMeasurements(prev => [...prev, `📐 Polygon Area: ${areaInHectares} hectares`]);
      } else if (drawingMode === 'line') {
        setDrawnLines(prev => [...prev, currentDrawing]);
        const turfLine = turf.lineString(currentDrawing.map(c => [c[1], c[0]]));
        const length = turf.length(turfLine, { units: 'kilometers' });
        setMeasurements(prev => [...prev, `📏 Line Length: ${length.toFixed(2)} km`]);
      }
    } catch (error) {
      console.error('Measurement error:', error);
    }

    setCurrentDrawing([]);
    setDrawingMode(null);
  };

  const clearMeasurements = () => {
    setDrawnPolygons([]);
    setDrawnLines([]);
    setMeasurements([]);
    setCurrentDrawing([]);
    setDrawingMode(null);
    setBufferCoords([]);
    setPointInside('Click on the map to test');
    setClickedPoint(null);
  };

  return (
    <div className="h-screen w-full relative bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="absolute top-4 left-4 z-10 bg-[#1f2937] p-5 rounded-2xl w-96 space-y-4 border border-gray-700 shadow-2xl">
        <div className="space-y-2">
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && searchPlaces(searchQuery)}
            placeholder="Search for a place... (e.g., Kathmandu)"
            className="w-full p-2 bg-[#374151] text-white rounded outline-none"
          />
          <button onClick={() => searchPlaces(searchQuery)} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 rounded p-2 font-semibold hover:opacity-90">
            🔍 Search Places
          </button>
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1">🛠 Active Tool</label>
          <select
            className="w-full p-2 bg-[#374151] text-white rounded"
            value={activeTool}
            onChange={e => setActiveTool(e.target.value)}
          >
            <option value="buffer">🔵 Buffer Tool</option>
            <option value="pointInPolygon">📍 Point in Polygon</option>
            <option value="measure">📏 Area & Distance Measure</option>
          </select>
        </div>

        {activeTool === 'measure' && (
          <div className="space-y-2">
            <button className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold" onClick={() => setDrawingMode('polygon')}>
              🟩 Draw Polygon (Area)
            </button>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded font-semibold" onClick={() => setDrawingMode('line')}>
              📏 Draw Line (Distance)
            </button>
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 p-2 rounded font-semibold" onClick={completeDrawing}>
              ✅ Complete Drawing
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold" onClick={clearMeasurements}>
              🗑️ Clear All
            </button>
          </div>
        )}

        {activeTool === 'pointInPolygon' && (
          <div className="bg-blue-800 border border-blue-400 p-2 rounded text-sm">{pointInside}</div>
        )}

        {searchResults.length > 0 && (
          <div className="bg-[#374151] rounded p-2 space-y-1 max-h-40 overflow-y-auto">
            {searchResults.map((result, i) => (
              <div key={i} className="cursor-pointer hover:bg-gray-600 p-2 text-sm rounded" onClick={() => selectPlace(result)}>
                {result.display_name}
              </div>
            ))}
          </div>
        )}

        {measurements.length > 0 && (
          <div className="bg-green-900 p-3 rounded text-sm space-y-1 border border-green-400">
            {measurements.map((m, i) => <div key={i}>{m}</div>)}
          </div>
        )}
      </div>

      {/* Map */}
      <div className="absolute inset-0 z-0">
        <MapContainer center={center} zoom={8} style={{ height: '100%', width: '100%' }} whenCreated={setMap}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {selectedPlace && <Marker position={[parseFloat(selectedPlace.lat), parseFloat(selectedPlace.lon)]} />}
          {clickedPoint && <Marker position={clickedPoint} />}
          {polygonCoords.length > 0 && <Polygon positions={polygonCoords} pathOptions={{ color: '#10b981', fillOpacity: 0.2, weight: 3 }} />}
          {bufferCoords.length > 0 && <Polygon positions={bufferCoords} pathOptions={{ color: '#3b82f6', fillOpacity: 0.2, weight: 3 }} />}
          {drawnPolygons.map((poly, i) => <Polygon key={`poly-${i}`} positions={poly} pathOptions={{ color: '#ef4444', fillOpacity: 0.2, weight: 3 }} />)}
          {drawnLines.map((line, i) => <Polyline key={`line-${i}`} positions={line} pathOptions={{ color: '#8b5cf6', weight: 4 }} />)}
          {currentDrawing.length > 0 && (
            <>
              {currentDrawing.map((pt, i) => <Marker key={`draw-${i}`} position={pt} />)}
              {currentDrawing.length > 1 && <Polyline positions={currentDrawing} pathOptions={{ color: '#f59e0b', weight: 3, dashArray: '10,5' }} />}
            </>
          )}
          <MapClickHandler />
        </MapContainer>
      </div>
    </div>
  );
}
