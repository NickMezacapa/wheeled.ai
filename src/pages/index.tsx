import { type NextPage } from 'next'
import HomeHeader from '~/components/Headers/HomeHeader'
import IntroHero from '~/components/Heroes/IntroHero'

const Home: NextPage = () => {
  return (
    <section
      aria-label="Homepage for Wheeled.ai AI-powered vehicle inspection software."
      className="w-full relative flex h-full min-h-[100vh] flex-col"
    >
      <HomeHeader />
      <IntroHero />
    </section>
  )
}

export default Home
