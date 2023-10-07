import Image from 'next/image'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import {
  MotionAppScreenBody,
  MotionAppScreenHeader,
  bodyAnimation,
  headerAnimation,
  type ScreenProps,
} from './index'

import { AppScreen } from '~/components/Heroes/Screens/AppScreen'

export const UploadPhotosScreen = ({
  custom,
  animated = false,
}: ScreenProps) => (
  <AppScreen className='w-full'>
    <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
      <AppScreen.Title>Upload Photos</AppScreen.Title>
      <AppScreen.Subtitle>
        Vehicle: <span className='text-[#eae8ed]'>2019 Honda Civic</span>
      </AppScreen.Subtitle>
    </MotionAppScreenHeader>
    <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
      <section
        aria-label='Wheeled.AI allows you to upload photos of your vehicle for a fast and efficient vehicle inspection service.'
        className='divide-y divide-gray-100'
      >
        {[
          {
            name: 'Tires',
            completed: 'completed',
            data: '8/8 Photos Completed',
          },
          {
            name: 'Interior',
            completed: 'completed',
            data: '12/12 Photos Completed',
          },
          {
            name: 'Exterior',
            completed: 'in progress',
            data: '0/10 Photos Completed',
          },
        ].map(project => (
          <div key={project.name} className='flex items-center gap-4 px-4 py-3'>
            <div className='flex-none rounded-full'></div>
            <div className='flex-auto'>
              <div className='flex-auto text-sm text-gray-900'>
                {project.name}
              </div>
              <div className='text-xs text-gray-400'>{project.data}</div>
            </div>
            <div className='flex-none text-right'>
              <div className='text-sm font-medium text-gray-900'>
                {project.completed !== 'in progress' ? (
                  <BsFillCheckCircleFill className='mr-1 inline-block text-green-400' />
                ) : (
                  'in progress'
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className='flex flex-col items-center'>
        <p className='p-4 text-center text-xs text-gray-400'>
          Please upload photos of the exterior of your vehicle. It is best to
          stand 10-15 feet away from your vehicle and ensure there is good
          lighting.
        </p>
        <Image
          alt='Vheicle Icon - Wheeled.AI'
          height={120}
          src='/Final_UberPool.webp'
          width={120}
        />
        <div className='mt-6 rounded-lg bg-blue-500/90 px-3 py-2 text-center text-sm font-semibold text-white'>
          Begin Exterior
        </div>
      </div>
    </MotionAppScreenBody>
  </AppScreen>
)
