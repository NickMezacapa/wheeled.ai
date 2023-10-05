import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { features } from './index'

import { CircleBackground } from '~/components/Theme/CircleBackground'
import { PhoneFrame } from '~/components/Theme/PhoneFrame'

export const FeaturesMobile = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const slideContainerRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(
              slideRefs.current.findIndex(ref => ref === entry.target)
            )
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide)
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className='-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden'
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={ref => (slideRefs.current[featureIndex] = ref)}
            className='w-full flex-none snap-center px-4 sm:px-6'
          >
            <div className='relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6'>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <CircleBackground
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                  color='#13B5C8'
                />
              </div>
              <PhoneFrame className='relative mx-auto w-full max-w-[366px]'>
                <feature.screen />
              </PhoneFrame>
              <div className='absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10'>
                <feature.icon className='h-8 w-8' />
                <h3 className='mt-6 text-sm font-semibold text-white sm:text-lg'>
                  {feature.name}
                </h3>
                <p className='mt-2 text-sm text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-6 flex justify-center gap-3'>
        {features.map((_, featureIndex) => (
          <button
            key={featureIndex}
            aria-label={`Go to slide ${featureIndex + 1}`}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            type='button'
            onClick={() => {
              const targetElement = slideRefs.current[featureIndex]
              if (targetElement) {
                targetElement.scrollIntoView({
                  block: 'nearest',
                  inline: 'nearest',
                })
              }
            }}
          >
            <span className='absolute -inset-x-1.5 -inset-y-3' />
          </button>
        ))}
      </div>
    </>
  )
}
