import clsx from 'clsx'
import { forwardRef, type ReactNode } from 'react'

interface IconProps {
  className?: string
  height?: number
  width?: number
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        d='M5 6h14M5 18h14M5 12h14'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

function UserIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        d='M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

interface AppScreenProps {
  children: ReactNode
  className?: string
}

export function AppScreen({ children, className, ...props }: AppScreenProps) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className='flex justify-between px-4 pt-4'>
        <MenuIcon className='h-6 w-6 flex-none' />
        <UserIcon className='h-6 w-6 flex-none' />
      </div>
      {children}
    </div>
  )
}

type AppScreenHeaderProps = {
  children: ReactNode
}

type AppScreenTitleProps = {
  children: ReactNode
}

type AppScreenSubtitleProps = {
  children: ReactNode
}

type AppScreenBodyProps = {
  children: ReactNode
  className?: string
}

AppScreen.Header = forwardRef<HTMLDivElement, AppScreenHeaderProps>(
  function AppScreenHeader({ children }, ref) {
    return (
      <div ref={ref} className='mt-6 px-4 text-4xl text-white'>
        {children}
      </div>
    )
  }
)

AppScreen.Title = forwardRef<HTMLDivElement, AppScreenTitleProps>(
  function AppScreenTitle({ children }, ref) {
    return (
      <div ref={ref} className='text-2xl text-white'>
        {children}
      </div>
    )
  }
)

AppScreen.Subtitle = forwardRef<HTMLDivElement, AppScreenSubtitleProps>(
  function AppScreenSubtitle({ children }, ref) {
    return (
      <div ref={ref} className='text-sm text-gray-500'>
        {children}
      </div>
    )
  }
)

AppScreen.Body = forwardRef<HTMLDivElement, AppScreenBodyProps>(
  function AppScreenBody({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
      >
        {children}
      </div>
    )
  }
)
