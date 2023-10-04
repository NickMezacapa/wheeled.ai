import { type NextPage } from 'next'
import HomeHeader from '~/components/Headers/HomeHeader'
import IntroHero from '~/components/Heroes/IntroHero'
import { PrimaryFeatures } from '~/components/PrimaryFeatures.jsx'

const Home: NextPage = () => {
  return (
    <section
      aria-label='Homepage for Wheeled.ai AI-powered vehicle inspection software.'
      className='relative flex h-full min-h-[100vh] w-full flex-col'
    >
      <HomeHeader />
      <IntroHero />
      <PrimaryFeatures />
    </section>
  )
}

export default Home
