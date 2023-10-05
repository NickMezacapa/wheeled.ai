import {
  MotionAppScreenBody,
  MotionAppScreenHeader,
  bodyAnimation,
  headerAnimation,
  type ScreenProps,
} from './index'

import { AppScreen } from '~/components/Heroes/Screens/AppScreen'

export const LinkInspectionScreen = ({
  custom,
  animated = false,
}: ScreenProps) => (
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
