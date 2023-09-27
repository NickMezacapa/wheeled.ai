import Link from 'next/link'

import NavLinks from '~/components/Headers/NavLinks'
import Button from '~/components/Theme/Button'
import Container from '~/components/Theme/Container'

const HomeHeader = () => {
  return (
    <header>
      <nav className="flex flex-col items-center sm:block">
        <Container className="relative z-50 flex jusitfy-between">
          <div className="relative z-10 flex items-center gap-16 px-[2rem] pt-[3rem] w-full">
            <Link
              aria-label="Home"
              className="flex gap-2 justify-center items-center"
              href="/"
            >
              <h1 className="font-bold text-5xl">Wheeled.AI</h1>
            </Link>
            <div className="ml-auto justify-end items-center gap-x-6 hidden md:flex">
              <NavLinks />
              <Button
                animated
                outline
                ariaLabel="Login Button"
                className="px-4"
                href="/login"
                variant="primary"
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
        <h3 className="italic text-graySecondary px-[3rem] pt-[2.5rem] sm:px-[3.5rem] lg:px-[4rem] mt-[-1.5rem]">
          AI-powered Vehicle Inspection Software
        </h3>
      </nav>
    </header>
  )
}

export default HomeHeader
