import Container from './Container'

const BackgroundGradient = () => {
  return (
    <Container className='hidden'>
      <div className='GradientBlur Animation-fadeAndScale AnimationContainer w-full overflow-hidden'>
        <div className='GradientBg h-full w-full overflow-hidden' />
      </div>
    </Container>
  )
}

export default BackgroundGradient
