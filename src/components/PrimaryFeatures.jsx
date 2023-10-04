/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '~/components/Theme/AppScreen'
import { CircleBackground } from '~/components/Theme/CircleBackground'
import Container from '~/components/Theme/Container'
import { PhoneFrame } from '~/components/Theme/PhoneFrame'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Create an account or sign in with Uber',
    description:
      'Sign up for yourself or your business in seconds. Link your wallet to start investing in minutes. Users have the option to invest using USD or ETH.',
    icon: DeviceUserIcon,
    screen: RegisterScreen,
  },
  {
    name: 'Upload photos of your vehicle',
    description:
      'All of our assets are vetted and verified before being placed on our marketplace to ensure they are legitimate and meet our strict standards. Browse through our verified carbon assets and offset projects and select the one that best suits your goals.',
    icon: DeviceNotificationIcon,
    screen: ProjectsScreen,
  },
  {
    name: 'Link inspection certification',
    description:
      'Invest with USD or ETH from your digital wallet. You can invest as little as $1 and as much as you want. We will send you a verified certificate of purchase of your asset for you to retire and offset your emissions, or optionally place back on the marketplace for sale.',
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg aria-hidden='true' viewBox='0 0 32 32' {...props}>
      <circle cx={16} cy={16} fill='#A3A3A3' fillOpacity={0.2} r={16} />
      <path
        clipRule='evenodd'
        d='M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z'
        fill='#737373'
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z'
        fill='#A3A3A3'
        fillRule='evenodd'
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg aria-hidden='true' viewBox='0 0 32 32' {...props}>
      <circle cx={16} cy={16} fill='#A3A3A3' fillOpacity={0.2} r={16} />
      <path
        clipRule='evenodd'
        d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
        fill='#A3A3A3'
        fillRule='evenodd'
      />
      <path
        d='M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z'
        fill='#737373'
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  const id = useId()

  return (
    <svg aria-hidden='true' fill='none' viewBox='0 0 32 32' {...props}>
      <defs>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id={`${id}-gradient`}
          x1={14}
          x2={7}
          y1={14.5}
          y2={17}
        >
          <stop stopColor='#737373' />
          <stop offset={1} stopColor='#D4D4D4' stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} fill='#A3A3A3' fillOpacity={0.2} r={16} />
      <path
        clipRule='evenodd'
        d='M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z'
        fill='#A3A3A3'
        fillRule='evenodd'
      />
      <path
        d='M7 22c0-4.694 3.5-8 8-8'
        stroke={`url(#${id}-gradient)`}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
      <path
        d='M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z'
        fill='#A3A3A3'
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = custom => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: custom =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: custom => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: custom =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function RegisterScreen({ custom, animated = false }) {
  return (
    <AppScreen className='w-full'>
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Sign up</AppScreen.Title>
        <AppScreen.Subtitle>
          Get started by{' '}
          <span className='text-white'>creating an account.</span>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <section className='px-4 py-6'>
          <div className='space-y-6'>
            {[
              { label: 'Full name', value: 'John Appleseed' },
              { label: 'Email address', value: 'j.appleseed@email.com' },
            ].map(field => (
              <div key={field.label}>
                <div className='text-sm text-gray-500'>{field.label}</div>
                <div className='mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900'>
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className='mt-6 rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white'>
            Sign in with Uber
          </div>
          <div className='mt-6 rounded-lg bg-blue-500/90 px-3 py-2 text-center text-sm font-semibold text-white'>
            Sign up
          </div>
        </section>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ProjectsScreen({ custom, animated = false }) {
  const currentDate = new Date()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    currentDate
  )

  return (
    <AppScreen className='w-full'>
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Upload Photos</AppScreen.Title>
        <AppScreen.Subtitle>{formattedDate}</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <section
          aria-label='Carbon offset projects from around the world.'
          className='divide-y divide-gray-100'
        >
          {[
            {
              name: 'Hydro Power Project',
              price: '$2.44',
              change: '+1.98%',
              color: '#4ade80',
              location: 'Masli and Tangnu',
            },
            {
              name: 'Behr Wind Farm',
              price: '$8.14',
              change: '-2.38%',
              color: '#5A67D8',
              location: 'Argentina',
            },
            {
              name: 'Evergreen Redd+',
              price: '$10.47',
              change: '+0.25%',
              color: '#2A5B94',
              location: 'Brazil',
            },
            {
              name: 'Project HydroBus',
              price: '$13.73',
              change: '+2.87%',
              color: '#3320A7',
              location: 'California, USA',
            },
            {
              name: 'Florestal Santa Maria',
              price: '$6.99',
              change: '+0.87%',
              color: '#3320A7',
              location: 'Brazil',
            },
            {
              name: 'Gunder HydroPower',
              price: '$5.45',
              change: '-3.11%',
              color: '#0EA5E9',
              location: 'Turkey',
            },
            {
              name: 'Evergreenful',
              price: '$4.08',
              change: '+9.09%',
              color: '#16A34A',
              location: 'Washington, USA',
            },
            {
              name: 'Qinghai Wind + Solar',
              price: '$7.60',
              change: '-1.25%',
              color: '#8D8D8D',
              location: 'China',
            },
          ].map(project => (
            <div
              key={project.name}
              className='flex items-center gap-4 px-4 py-3'
            >
              <div
                className='flex-none rounded-full'
                style={{ backgroundColor: project.color }}
              >
                {/* <project.logo className='h-10 w-10' /> */}
              </div>
              <div className='flex-auto'>
                <div className='flex-auto text-sm text-gray-900'>
                  {project.name}
                </div>
                <div className='text-xs text-gray-400'>{project.location}</div>
              </div>
              <div className='flex-none text-right'>
                <div className='text-sm font-medium text-gray-900'>
                  {project.price}
                </div>
                <div
                  className={clsx(
                    'text-xs leading-5',
                    project.change.startsWith('+')
                      ? 'text-green-400'
                      : 'text-gray-500'
                  )}
                >
                  {project.change}
                </div>
              </div>
            </div>
          ))}
        </section>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className='w-full'>
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Link your inspection</AppScreen.Title>
        <AppScreen.Subtitle>
          Forget about the manual paperwork.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <section
          aria-label='Link Wheeled.AI Vehicle Inspeciton screen'
          className='px-4 py-6'
        >
          <div className='space-y-4'>
            {[
              { label: 'Ride share platform', value: 'Uber' },
              { label: 'Account username', value: 'j.appleseed11' },
              { label: 'Vehicle', value: '2019 Honda Civic' },
              {
                label: 'Inspection status',
                value: (
                  <div className='flex text-[#4ade80]'>
                    pass
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24'>
                      <path
                        d='M17 15V7H9M17 7 7 17'
                        stroke='#4ade80'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                      />
                    </svg>
                  </div>
                ),
              },
            ].map(item => (
              <div
                key={item.label}
                className='flex justify-between border-b border-gray-100 pb-4'
              >
                <div className='text-sm text-gray-500'>{item.label}</div>
                <div className='text-sm font-semibold text-gray-900'>
                  {item.value}
                </div>
              </div>
            ))}
            <div className='rounded-lg bg-blue-500/90 px-3 py-2 text-center text-sm font-semibold text-white'>
              Link
            </div>
          </div>
        </section>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  const [changeCount, setChangeCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const prevIndex = usePrevious(selectedIndex)
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  const onChange = useDebouncedCallback(
    selectedIndex => {
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

function FeaturesMobile() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideContainerRef = useRef()
  const slideRefs = useRef([])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
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
      if (slide) {
        observer.observe(slide)
      }
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
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className='absolute -inset-x-1.5 -inset-y-3' />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      aria-label='Features for investing all your money'
      className='bg-gray-900 py-20 sm:py-32'
      id='features'
    >
      <Container>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
          <h2 className='text-3xl font-medium tracking-tight text-white'>
            Inspections haven&apos;t been easier. Try it for yourself.
          </h2>
          <p className='mt-2 text-lg text-gray-400'>
            Carbona was built for individuals and enterprises to offset their
            carbon emissions with ease like never before. In just a few simple
            steps, streamline transactions on our transparent and secure
            blockchain ledger. Why wait?
          </p>
        </div>
      </Container>
      <div className='mt-16 md:hidden'>
        <FeaturesMobile />
      </div>
      <Container className='hidden md:mt-20 md:block'>
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
