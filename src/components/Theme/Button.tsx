import clsx from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'transparent'
  animated?: boolean
  outline?: boolean
  href?: string | undefined
  children?: React.ReactNode
  className?: string // Allow users to pass additional classes
  ariaLabel?: string // For accessibility
  onClick?: () => void
}

interface ButtonStyles {
  primary: string
  secondary: string
  transparent: string
}

const baseStyles: ButtonStyles = {
  primary: 'bg-slate-900 text-offWhite',
  secondary: 'bg-offWhite text-dark',
  transparent: 'bg-transparent text-offWhite',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  animated = false,
  outline = false,
  href,
  children,
  className,
  ariaLabel,
  onClick,
}) => {
  const styles =
    variant === 'primary'
      ? 'primary'
      : variant === 'secondary'
      ? 'secondary'
      : 'transparent'

  return (
    <a
      aria-label={ariaLabel}
      className={clsx(
        'inline-flex justify-center items-center rounded-lg px-2 py-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
        baseStyles[styles],
        outline ? 'border border-themeBorder' : 'border border-transparent',
        animated
          ? 'hover:scale-[0.98] cursor-pointer hover:border hover:border-slate-400'
          : '',
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Button
