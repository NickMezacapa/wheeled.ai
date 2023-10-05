import { useEffect, useRef } from 'react'

import {
  DeviceNotificationIcon,
  DeviceTouchIcon,
  DeviceUserIcon,
} from '~/components/Theme/Icons'

import { type ScreenProps } from '../Screens'
import { LinkInspectionScreen } from '../Screens/LinkInspectionScreen'
import { RegisterScreen } from '../Screens/RegisterScreen'
import { UploadPhotosScreen } from '../Screens/UploadPhotosScreen'

export interface IFeature {
  screen: React.FC<ScreenProps>
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  description: string
}

export const features: IFeature[] = [
  {
    name: 'Create an account or sign in with Uber',
    description:
      'Register within seconds or use your Uber credentials to get started on Wheeled.AI. Your path to hassle-free inspections begins here.',
    icon: DeviceUserIcon,
    screen: RegisterScreen,
  },
  {
    name: 'Upload photos of your vehicle',
    description:
      "Easily submit images of your vehicle's condition through our user-friendly interface. Our comprehensive AI-driven system will guide you every step of the way.",
    icon: DeviceNotificationIcon,
    screen: UploadPhotosScreen,
  },
  {
    name: 'Link inspection certification',
    description:
      "Connect your inspection certification directly to your rideshare account, and we'll handle the rest. It's the final step toward unlocking your full earning potential.",
    icon: DeviceTouchIcon,
    screen: LinkInspectionScreen,
  },
]

export function usePrevious<T>(value: T | undefined): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
