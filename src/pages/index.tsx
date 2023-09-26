import { type NextPage } from 'next'
import HomeHeader from '~/components/Headers/HomeHeader'
import IntroHero from '~/components/Heroes/IntroHero'

const Home: NextPage = () => {
  return (
    <section
      className="max-w-screen w-full relative flex h-full min-h-[100vh] flex-col dark:bg-[#182633] bg-[#F6F5F8]"
      aria-label="Homepage for Wheeled.ai AI-powered vehicle inspection software."
    >
      <HomeHeader />
      <IntroHero />
    </section>
  )
}

export default Home
