import { useId } from 'react'

interface CircleBackgroundProps {
  color: string
  width?: number
  height?: number
  className?: string
}

export function CircleBackground({
  color,
  width = 558,
  height = 558,
  className = '',
  ...props
}: CircleBackgroundProps) {
  const id = useId()

  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 558 558'
      width={width}
      {...props}
    >
      <defs>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id={id}
          x1='79'
          x2='105'
          y1='16'
          y2='237'
        >
          <stop stopColor={color} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
      <path
        d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
        opacity='.2'
        stroke={color}
      />
      <path
        d='M1 279C1 125.465 125.465 1 279 1'
        stroke={`url(#${id})`}
        strokeLinecap='round'
      />
    </svg>
  )
}
