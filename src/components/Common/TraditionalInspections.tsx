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
          <h1 className='text-2xl font-semibold text-[#1d1d1f]'>
            Ride Share Inspection Requirements
          </h1>
          <p className='mt-14 w-full text-[#1d1d1fba] md:w-4/5'>
            Vehicle inspection is a mandatory prerequisite for all Uber drivers.
            While there are various methods to fulfill this compliance, the
            conventional approach involves scheduling appointments at mechanic
            shops, which often results in certification delays by several days.
          </p>
          <p className='mt-4 w-full text-[#1d1d1fba] md:w-4/5'>
            WheeledAI offers a cutting-edge and streamlined solution to fulfill
            Uber&apos;s vehicle inspection mandate without the need for a trip
            to a mechanic. You can effortlessly access our platform via any web
            browser, where you can simply upload photos and video clips of your
            vehicle from your driveway or any location that suits you. It&apos;s
            that straightforward.
          </p>
          <ul className='ml-6 mt-12 list-disc font-semibold'>
            <li className='mt-4 w-full text-[#1d1d1fba] md:w-4/5'>
              <p>No more scheduling appointments or manual paperwork</p>
            </li>
            <li className='mt-4 w-full text-[#1d1d1fba] md:w-4/5'>
              <p>Conduct the inspection at your convenience</p>
            </li>
            <li className='mt-4 w-full text-[#1d1d1fba] md:w-4/5'>
              <p>Receive your certification on the same day</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default TraditionalInspections
