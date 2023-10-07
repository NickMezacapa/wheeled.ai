import { AppScreen } from '~/components/Heroes/Screens/AppScreen'
import {
  MotionAppScreenBody,
  MotionAppScreenHeader,
  bodyAnimation,
  headerAnimation,
  type ScreenProps,
} from './index'

export const RegisterScreen = ({ custom, animated = false }: ScreenProps) => (
  <AppScreen className='w-full'>
    <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
      <AppScreen.Title>Sign up</AppScreen.Title>
      <AppScreen.Subtitle>
        Get started by <span className='text-white'>creating an account.</span>
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
              <div className='text-sm text-gray-500 focus:outline-none'>
                {field.label}
              </div>
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
