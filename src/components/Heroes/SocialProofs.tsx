import Image from 'next/image'

interface Socials {
  alt: string
  height: number
  src: string
  width: number
}

const socials: Socials[] = [
  {
    alt: 'Benzinga',
    height: 48,
    src: '/assets/bloomberg.svg',
    width: 158,
  },
  {
    alt: 'Transistor',
    height: 48,
    src: '/assets/business-insider.svg',
    width: 158,
  },
  {
    alt: 'Transistor',
    height: 48,
    src: '/assets/yahoo-finance.svg',
    width: 158,
  },
  {
    alt: 'Transistor',
    height: 48,
    src: '/assets/benzinga.svg',
    width: 158,
  },
]

export const SocialProofs = () => (
  <div className='mt-[9rem] pb-8'>
    <p className='font-display text-center text-base text-graySecondary/80'>
      As featured in
    </p>
    <ul
      className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
      role='list'
    >
      <li>
        <ul
          className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
          role='list'
        >
          {socials.map((social, index) => (
            <li key={index} className='flex'>
              <Image
                alt={social.alt}
                height={social.height}
                src={social.src}
                width={social.width}
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
)
