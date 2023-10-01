import Link from 'next/link'

import NavLinks from '~/components/Headers/NavLinks'
import Button from '~/components/Theme/Button'
import Container from '~/components/Theme/Container'

const HomeHeader = () => {
  return (
    <header>
      <nav className='flex flex-col items-center sm:block'>
        <Container className='jusitfy-between relative z-50 flex'>
          <div className='relative z-10 flex w-full items-center gap-16 px-[2rem] pt-[3rem]'>
            <Link
              aria-label='Home'
              className='flex items-center justify-center gap-2'
              href='/'
            >
              <h1 className='text-5xl font-bold text-[#e3edf6]'>Wheeled.AI</h1>
            </Link>
            <div className='ml-auto hidden items-center justify-end gap-x-6 md:flex'>
              <NavLinks />
              <Button
                animated
                outline
                ariaLabel='Login Button'
                className='px-4'
                href='/login'
                variant='primary'
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
        <h3 className='mt-[-1.5rem] px-[3rem] pt-[2.5rem] italic text-graySecondary sm:px-[3.5rem] lg:px-[4rem]'>
          AI-powered Vehicle Inspection Software
        </h3>
      </nav>
    </header>
  )
}

export default HomeHeader
