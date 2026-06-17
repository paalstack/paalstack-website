import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#05080f',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,85,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,255,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,85,255,0.14) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, gap: 0 }}>
          {/* Icon SVG inline */}
          <svg
            viewBox="0 0 40 32"
            width={96}
            height={80}
            style={{ marginBottom: 28 }}
          >
            <polygon points="20,23 1,27 20,31 39,27" fill="#0A35A2" />
            <polygon points="20,12 1,16 20,20 39,16" fill="#1552D4" />
            <polygon points="20,1 1,5 20,9 39,5" fill="#3070FF" />
          </svg>

          {/* Wordmark */}
          <div
            style={{
              fontSize: 88,
              letterSpacing: '-3px',
              marginBottom: 20,
              display: 'flex',
              lineHeight: 1,
            }}
          >
            <span style={{ color: '#f0f4ff', fontWeight: 500 }}>PAAL</span>
            <span style={{ color: '#0055FF', fontWeight: 700 }}>STACK</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 26,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'flex',
              gap: 12,
            }}
          >
            <span style={{ color: 'rgba(240,244,255,0.6)' }}>Build.</span>
            <span style={{ color: '#0055FF' }}>Automate.</span>
            <span style={{ color: 'rgba(240,244,255,0.6)' }}>Scale.</span>
          </div>

          {/* Accent line */}
          <div
            style={{
              marginTop: 36,
              width: 80,
              height: 2,
              background: 'linear-gradient(90deg, #0055FF, #6366f1)',
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
