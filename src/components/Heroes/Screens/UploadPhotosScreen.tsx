import clsx from 'clsx'
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
}: ScreenProps) => {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

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
