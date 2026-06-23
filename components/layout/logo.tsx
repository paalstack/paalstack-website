import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** 'icon' = icon only | 'mark' = icon + wordmark (default) | 'tagline' = icon + wordmark + tagline */
  variant?: 'icon' | 'mark' | 'tagline'
  /** Controls the icon size (height). Width scales proportionally. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  /** When true, renders the wordmark text in a single-line compact form */
  compact?: boolean
}

const LOGO_RATIO = 496.61 / 120
// Cropped wordmark-only asset (wordmark/wordmark-*.svg) intrinsic ratio,
// from its tight viewBox "0 -41.29 346.58 41.84" -> width / height.
const WORDMARK_RATIO = 346.58 / 41.84

const sizes = {
  sm: { icon: 26, logoH: 30, logoW: Math.round(30 * LOGO_RATIO), wordH: 17, gapX: 9,  gapY: 2 },
  md: { icon: 30, logoH: 38, logoW: Math.round(38 * LOGO_RATIO), wordH: 20, gapX: 10, gapY: 3 },
  lg: { icon: 34, logoH: 46, logoW: Math.round(46 * LOGO_RATIO), wordH: 22, gapX: 11, gapY: 3 },
  xl: { icon: 40, logoH: 54, logoW: Math.round(54 * LOGO_RATIO), wordH: 24, gapX: 12, gapY: 4 },
  '2xl': { icon: 50, logoH: 62, logoW: Math.round(62 * LOGO_RATIO), wordH: 26, gapX: 13, gapY: 5 },
}

export function Logo({ variant = 'mark', size = 'md', className, compact = false }: LogoProps) {
  const s = sizes[size]

  const icon = (
    <>
      <Image
        src="/assets/icon/icon-light.svg"
        alt="PaalStack icon"
        width={s.icon}
        height={s.icon}
        className="shrink-0 dark:hidden"
        priority
      />
      <Image
        src="/assets/icon/icon-dark.svg"
        alt="PaalStack icon"
        width={s.icon}
        height={s.icon}
        className="shrink-0 hidden dark:block"
        priority
      />
    </>
  )

  if (variant === 'icon') return <span className={cn('inline-flex items-center', className)}>{icon}</span>

  if (variant === 'tagline') {
    const wordW = Math.round(s.wordH * WORDMARK_RATIO)
    const wordmark = (
      <>
        <Image
          src="/assets/wordmark/wordmark-light.svg"
          alt="PaalStack"
          width={wordW}
          height={s.wordH}
          style={{ height: s.wordH, width: 'auto' }}
          className="dark:hidden"
          priority
        />
        <Image
          src="/assets/wordmark/wordmark-dark.svg"
          alt="PaalStack"
          width={wordW}
          height={s.wordH}
          style={{ height: s.wordH, width: 'auto' }}
          className="hidden dark:block"
          priority
        />
      </>
    )

    return (
      <span className={cn('inline-flex items-center', className)} style={{ gap: s.gapX }}>
        {icon}
        <span className="inline-flex flex-col justify-center" style={{ gap: s.gapY }}>
          {wordmark}
          <span
            className="hidden pt-1 text-foreground min-[480px]:inline-block whitespace-nowrap leading-none font-medium select-none text-[13px] lg:text-[14px]"
          >
            Build. <span className='text-primary'>Automate.</span> Scale.
          </span>
        </span>
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center', className)}>
      {compact && <span className="sm:hidden">{icon}</span>}
      <span className={cn(compact && 'hidden sm:inline-flex')}>
        <Image
          src="/assets/logo/logo-light.svg"
          alt="PaalStack"
          width={s.logoW}
          height={s.logoH}
          className="dark:hidden"
          priority
        />
        <Image
          src="/assets/logo/logo-dark.svg"
          alt="PaalStack"
          width={s.logoW}
          height={s.logoH}
          className="hidden dark:block"
          priority
        />
      </span>
    </span>
  )
}
