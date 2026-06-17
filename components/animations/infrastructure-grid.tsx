'use client'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const GRID_SIZE = 80

const nodes = [
  { x: 2, y: 2 }, { x: 5, y: 1 }, { x: 8, y: 3 }, { x: 11, y: 2 },
  { x: 2, y: 5 }, { x: 4, y: 4 }, { x: 7, y: 5 }, { x: 10, y: 4 },
  { x: 13, y: 6 }, { x: 1, y: 8 }, { x: 3, y: 7 }, { x: 6, y: 8 },
  { x: 9, y: 7 }, { x: 12, y: 8 }, { x: 5, y: 10 }, { x: 8, y: 9 },
  { x: 11, y: 10 }, { x: 2, y: 11 }, { x: 7, y: 12 }, { x: 10, y: 11 },
  { x: 4, y: 13 }, { x: 13, y: 12 }, { x: 1, y: 5 }, { x: 14, y: 3 },
]

const activePaths = [
  [{ x: 2, y: 2 }, { x: 5, y: 1 }, { x: 8, y: 3 }, { x: 11, y: 2 }, { x: 13, y: 6 }],
  [{ x: 1, y: 8 }, { x: 4, y: 4 }, { x: 7, y: 5 }, { x: 9, y: 7 }, { x: 12, y: 8 }],
  [{ x: 2, y: 11 }, { x: 5, y: 10 }, { x: 8, y: 9 }, { x: 11, y: 10 }, { x: 13, y: 12 }],
]

function pointToSVG(p: { x: number; y: number }) {
  return `${p.x * GRID_SIZE},${p.y * GRID_SIZE}`
}

function polylinePoints(path: { x: number; y: number }[]) {
  return path.map(pointToSVG).join(' ')
}

function polylineLength(path: { x: number; y: number }[]) {
  let len = 0
  for (let i = 1; i < path.length; i++) {
    const dx = (path[i].x - path[i - 1].x) * GRID_SIZE
    const dy = (path[i].y - path[i - 1].y) * GRID_SIZE
    len += Math.sqrt(dx * dx + dy * dy)
  }
  return len
}

const pathLengths = activePaths.map(polylineLength)

export function InfrastructureGrid() {
  const shouldReduceMotion = useReducedMotion()
  const svgRef = useRef<SVGSVGElement>(null)
  const animFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (shouldReduceMotion) return
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll<SVGPolylineElement>('.active-path')
    const pulseCircles = svg.querySelectorAll<SVGCircleElement>('.pulse-node')

    paths.forEach((path, i) => {
      const len = pathLengths[i]
      path.style.strokeDasharray = `${len}`
      path.style.strokeDashoffset = `${len}`
    })

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current

      paths.forEach((path, i) => {
        const len = pathLengths[i]
        const duration = 3000 + i * 800
        const delay = i * 600
        const t = ((elapsed - delay) % duration) / duration
        if (t < 0) return
        const offset = len * (1 - Math.min(t * 2, 1))
        path.style.strokeDashoffset = `${offset}`
        if (t > 0.8) {
          path.style.opacity = `${1 - (t - 0.8) * 5}`
        } else {
          path.style.opacity = '1'
        }
      })

      pulseCircles.forEach((circle, i) => {
        const duration = 2500 + i * 300
        const delay = i * 200
        const t = ((elapsed - delay) % duration) / duration
        if (t < 0) return
        const scale = 1 + t * 0.8
        const opacity = Math.max(0, 1 - t * 1.2)
        circle.setAttribute('r', `${2 * scale}`)
        circle.setAttribute('opacity', `${opacity * 0.6}`)
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current)
    }
  }, [shouldReduceMotion])

  const cols = 16
  const rows = 14
  const width = cols * GRID_SIZE
  const height = rows * GRID_SIZE

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 h-full w-full text-[#cbd3e1] dark:text-[#1a2040]"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Vertical grid lines */}
      {Array.from({ length: cols + 1 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={i * GRID_SIZE}
          y1={0}
          x2={i * GRID_SIZE}
          y2={height}
          stroke="currentColor"
          strokeWidth={0.5}
        />
      ))}
      {/* Horizontal grid lines */}
      {Array.from({ length: rows + 1 }, (_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * GRID_SIZE}
          x2={width}
          y2={i * GRID_SIZE}
          stroke="currentColor"
          strokeWidth={0.5}
        />
      ))}

      {/* Active path lines */}
      {activePaths.map((path, i) => (
        <polyline
          key={`path${i}`}
          className="active-path"
          points={polylinePoints(path)}
          fill="none"
          stroke="rgba(0,85,255,0.4)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* Node circles */}
      {nodes.map((node, i) => (
        <g key={`node${i}`}>
          <circle
            cx={node.x * GRID_SIZE}
            cy={node.y * GRID_SIZE}
            r={2}
            fill="rgba(0,85,255,0.15)"
          />
          {!shouldReduceMotion && i % 4 === 0 && (
            <circle
              className="pulse-node"
              cx={node.x * GRID_SIZE}
              cy={node.y * GRID_SIZE}
              r={2}
              fill="none"
              stroke="rgba(0,85,255,0.5)"
              strokeWidth={1}
              opacity={0.5}
            />
          )}
        </g>
      ))}
    </svg>
  )
}
