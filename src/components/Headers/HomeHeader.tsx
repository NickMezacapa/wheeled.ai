import Link from 'next/link'

import NavLinks from '~/components/Headers/NavLinks'
import Container from '~/components/Theme/Container'

const HomeHeader = () => {
  return (
    <header>
      <nav className="flex flex-col items-center sm:block">
        <Container className="relative z-50 flex jusitfy-between">
          <div className="relative z-10 flex items-center gap-16 px-[2rem] pt-[3rem] w-full max-w-7xl">
            <Link
              href="/"
              aria-label="Home"
              className="flex gap-2 justify-center items-center"
            >
              <h1 className="font-bold text-5xl">Wheeled.AI</h1>
            </Link>
            <div className="ml-auto justify-end gap-x-6 hidden md:flex">
              <NavLinks />
            </div>
          </div>
        </Container>
        <h3 className="italic text-slate-400 px-[3rem] pt-[2.5rem] sm:px-[3.5rem] lg:px-[4rem] mt-[-1.5rem]">
          AI-powered Vehicle Inspection Software
        </h3>
      </nav>
    </header>
  )
}

export default HomeHeader
