import { motion } from 'framer-motion'
import { AppScreen } from '~/components/Heroes/Screens/AppScreen'

export const MotionAppScreenHeader = motion(AppScreen.Header)
export const MotionAppScreenBody = motion(AppScreen.Body)

type CustomAnimation = { changeCount: number; isForwards?: boolean }
export interface ScreenProps {
  custom?: CustomAnimation
  animated?: boolean
}

export const headerAnimation = {
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

const bodyVariantForwards = (custom: CustomAnimation) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

export const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimation) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom: CustomAnimation) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimation) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}
