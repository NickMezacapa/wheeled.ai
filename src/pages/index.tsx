import { type NextPage } from 'next'

import { GettingStarted } from '~/components/Common/GettingStarted'
import TraditionalInspections from '~/components/Common/TraditionalInspections'
import HomeHeader from '~/components/Headers/HomeHeader'
import IntroHero from '~/components/Heroes/IntroHero'

const Home: NextPage = () => {
  return (
    <section
      aria-label='Homepage for Wheeled.ai AI-powered vehicle inspection software.'
      className='relative flex h-full min-h-[100vh] w-full flex-col'
    >
      <HomeHeader />
      <IntroHero />
      <GettingStarted />
      <TraditionalInspections />
    </section>
  )
}

export default Home
