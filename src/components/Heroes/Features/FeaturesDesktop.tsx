import { Tab } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { features, usePrevious } from './index'

import { CircleBackground } from '~/components/Theme/CircleBackground'
import { PhoneFrame } from '~/components/Theme/PhoneFrame'

export const FeaturesDesktop = () => {
  const [changeCount, setChangeCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const prevIndex = usePrevious(selectedIndex)
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  const onChange = useDebouncedCallback(
    (selectedIndex: number) => {
      setSelectedIndex(selectedIndex)
      setChangeCount(changeCount => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      vertical
      as='div'
      className='grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24'
      selectedIndex={selectedIndex}
      onChange={onChange}
    >
      <Tab.List className='relative z-10 order-last col-span-6 space-y-6'>
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className='relative rounded-2xl transition-colors hover:bg-gray-800/30'
          >
            {featureIndex === selectedIndex && (
              <motion.div
                className='absolute inset-0 bg-gray-800'
                initial={{ borderRadius: 16 }}
                layoutId='activeBackground'
              />
            )}
            <div className='relative z-10 p-8'>
              <feature.icon className='h-8 w-8' />
              <h3 className='mt-6 text-lg font-semibold text-white'>
                <Tab className='text-left [&:not(:focus-visible)]:focus:outline-none'>
                  <span className='absolute inset-0 rounded-2xl' />
                  {feature.name}
                </Tab>
              </h3>
              <p className='mt-2 text-sm text-gray-400'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className='relative col-span-6'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <CircleBackground className='animate-spin-slow' color='#13B5C8' />
        </div>
        <PhoneFrame className='z-10 mx-auto w-full max-w-[366px]'>
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              custom={{ isForwards, changeCount }}
              initial={false}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    key={feature.name + changeCount}
                    static
                    className='col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none'
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}
