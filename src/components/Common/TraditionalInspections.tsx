import Container from '~/components/Theme/Container'

const TraditionalInspections = () => {
  return (
    <section
      aria-label='The Ride-Share Inspection Process for Uber and Lyft'
      className='bg-[#FAFAFA] py-20 sm:py-32'
      id='traditionalInspections'
    >
      <Container>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
          <h1 className='text-[#1d1d1f]'>Ride Share Inspection Requirements</h1>
          <p>
            Uber and Lyft require all drivers to pass a vehicle inspection
            before they can start driving. This inspection is to ensure that
            your vehicle is safe to drive and meets the minimum requirements for
            rideshare driving.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default TraditionalInspections
