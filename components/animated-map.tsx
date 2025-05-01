"use client"

import { useEffect, useRef } from "react"

export function AnimatedMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 200

    // Map grid properties
    const gridSize = 15
    const pointSize = 2
    const lineWidth = 0.5

    // Animation properties
    let animationFrame: number
    let pulsePhase = 0

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "#3fbfbf"
      ctx.lineWidth = lineWidth

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw points at intersections with pulsing effect
      pulsePhase += 0.02
      const pulseScale = Math.sin(pulsePhase) * 0.5 + 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Random elevation effect for some points
          const elevation = Math.random() > 0.7 ? Math.random() * 3 : 0

          ctx.fillStyle = `rgba(63, 191, 191, ${0.5 + Math.random() * 0.5})`
          ctx.beginPath()
          ctx.arc(x, y, pointSize * pulseScale, 0, Math.PI * 2)
          ctx.fill()

          if (elevation > 0) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y - elevation * 5)
            ctx.stroke()
          }
        }
      }

      // Contour lines (simulated)
      ctx.strokeStyle = "rgba(63, 191, 191, 0.3)"
      ctx.lineWidth = 1

      for (let i = 0; i < 5; i++) {
        const yOffset = 40 * i + 20
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const y = yOffset + Math.sin(x / 30 + pulsePhase) * 10
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-lg shadow-lg"
      style={{
        background: "rgba(0, 0, 0, 0.05)",
        maxWidth: "100%",
        maxHeight: "200px",
      }}
    />
  )
}
