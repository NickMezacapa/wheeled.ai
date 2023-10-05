import { type NextPage } from 'next'

import HomeHeader from '~/components/Headers/HomeHeader'
import { GettingStarted } from '~/components/Heroes/GettingStarted'
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
    </section>
  )
}

export default Home
