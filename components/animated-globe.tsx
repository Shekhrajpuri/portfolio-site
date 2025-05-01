"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function AnimatedGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(200, 200)
    containerRef.current.appendChild(renderer.domElement)

    // Create globe
    const geometry = new THREE.SphereGeometry(1, 32, 32)

    // Load earth texture
    const textureLoader = new THREE.TextureLoader()
    const earthTexture = textureLoader.load("/placeholder.svg?height=512&width=1024")

    const material = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.9,
    })

    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Add wireframe overlay for a more technical look
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      new THREE.LineBasicMaterial({
        color: 0x3fbfbf,
        transparent: true,
        opacity: 0.3,
      }),
    )
    scene.add(wireframe)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      globe.rotation.y += 0.005
      wireframe.rotation.y += 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-[200px] h-[200px] mx-auto"
      style={{
        filter: "drop-shadow(0 0 10px rgba(0, 200, 200, 0.3))",
      }}
    />
  )
}
