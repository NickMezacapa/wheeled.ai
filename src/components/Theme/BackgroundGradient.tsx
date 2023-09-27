import Container from './Container'

const BackgroundGradient = () => {
  return (
    <Container>
      <div className="GradientBlur w-full overflow-hidden">
        <div className="GradientBg h-full w-full overflow-hidden" />
      </div>
    </Container>
  )
}

export default BackgroundGradient
