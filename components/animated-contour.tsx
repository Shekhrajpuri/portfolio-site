"use client"

import { useEffect, useRef } from "react"

export function AnimatedContour() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 100

    // Animation properties
    let animationFrame: number
    let phase = 0

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw contour lines
      const numLines = 8
      const lineSpacing = canvas.height / numLines

      for (let i = 0; i < numLines; i++) {
        const y = i * lineSpacing
        const amplitude = 5 + i * 2
        const frequency = 0.02 - i * 0.001

        ctx.beginPath()
        ctx.strokeStyle = `rgba(63, 191, 191, ${0.3 + i * 0.1})`
        ctx.lineWidth = 1

        for (let x = 0; x < canvas.width; x++) {
          const yOffset = Math.sin(x * frequency + phase + i * 0.5) * amplitude

          if (x === 0) {
            ctx.moveTo(x, y + yOffset)
          } else {
            ctx.lineTo(x, y + yOffset)
          }
        }

        ctx.stroke()
      }

      // Update phase for animation
      phase += 0.05

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
      className="w-full h-[100px] rounded-lg"
      style={{
        background: "transparent",
        maxWidth: "100%",
      }}
    />
  )
}
