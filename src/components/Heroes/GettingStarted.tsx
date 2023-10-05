import { FeaturesDesktop } from './Features/FeaturesDesktop'
import { FeaturesMobile } from './Features/FeaturesMobile'

import Container from '~/components/Theme/Container'

export const GettingStarted = () => {
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
            Wheeled.AI empowers vehicle owners to breeze through inspections
            with unmatched convenience. Our AI-driven platform ensures a
            hassle-free process, saving you time and money in just a few simple
            steps. Why wait?
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
