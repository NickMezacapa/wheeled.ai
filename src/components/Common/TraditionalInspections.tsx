import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '~/components/Theme/Container'

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * idx,
      duration: 0.4,
    },
  }),
}
const FEATURES: string[] = [
  'No more scheduling appointments or manual paperwork',
  'Zero upselling or unnecessary repairs',
  'Conduct the inspection at your convenience',
  'Receive your certification on the same day',
]

const TraditionalInspections = () => {
  return (
    <section
      aria-label='The Ride-Share Inspection Process for Uber and Lyft'
      className='bg-[#FAFAFA] py-20 sm:py-32'
      id='traditionalInspections'
    >
      <Container className='mx-auto max-w-6xl'>
        <div className='mx-auto flex w-full items-center justify-evenly lg:mx-0'>
          <div className='h-full w-full'>
            <h1 className='text-3xl font-semibold text-[#1d1d1f]'>
              Ride Share Inspection Requirements
            </h1>
            <p className='mt-8 w-full text-[#1d1d1fba] md:w-4/5'>
              Vehicle inspection is a mandatory prerequisite for all ride share
              drivers. The conventional approach involves scheduling
              appointments at mechanic shops,{' '}
              <span className='font-semibold'>
                which often results in certification delays by several days,
                headaches finding a mechanic, and a costly price point.
              </span>
            </p>
            <p className='mt-8 w-full text-lg font-semibold text-[#1d1d1f] md:w-4/5'>
              <span className='bg-blue-300/50'>
                WheeledAI is a third of the price, takes less than 30 minutes,
                and you never leave your driveway.
              </span>
            </p>
            <ul className='ml-6 mt-10 list-disc font-semibold'>
              {FEATURES.map((feature: string, idx: number) => (
                <motion.li
                  key={idx}
                  className='mt-4 w-full text-[#1d1d1fba]'
                  custom={idx}
                  initial='initial'
                  variants={fadeInAnimationVariants}
                  viewport={{ once: true }}
                  whileInView='animate'
                >
                  <p>{feature}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className='hidden w-1/2 md:block'>
            <Image
              alt='Driver preparing for Wheeled.AI vehicle inspeciton'
              height={400}
              src='/assets/man-phone-car.png'
              width={400}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TraditionalInspections
