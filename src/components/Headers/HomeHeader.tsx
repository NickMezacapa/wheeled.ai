import Link from 'next/link'

import NavLinks from '~/components/Headers/NavLinks'
import Button from '~/components/Theme/Button'
import Container from '~/components/Theme/Container'

const HomeHeader = () => {
  return (
    <header className='z-[99999999]'>
      <nav className='flex flex-col sm:block'>
        <Container className='jusitfy-between relative z-50 ml-0 flex'>
          <div className='relative z-[60] flex w-full items-center gap-16 px-[0.5rem] pt-[3rem] text-left sm:px-[2rem]'>
            <Link
              aria-label='Home'
              className='flex items-center justify-center gap-2'
              href='/'
            >
              <h1 className='text-3xl font-bold text-[#e3edf6] sm:text-5xl'>
                Wheeled.AI
              </h1>
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
        <h3 className='mt-[-1.5rem] px-[1.5rem] pt-[2rem] text-sm italic text-graySecondary sm:px-[3.5rem] sm:pt-[2.5rem] sm:text-base lg:px-[4rem]'>
          AI-powered Vehicle Inspection Software
        </h3>
      </nav>
    </header>
  )
}

export default HomeHeader
