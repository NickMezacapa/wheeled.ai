import Image from 'next/image'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
}

const BackgroundImage = ({
  src,
  alt,
  className = '',
}: BackgroundImageProps) => {
  return (
    <section className='min-w-screen absolute inset-0 z-[1] h-full min-h-screen w-full opacity-70'>
      <div aria-label={alt} className='relative'>
        <Image
          alt={alt}
          className={className}
          height={1080}
          quality={100}
          src={src}
          width={1920}
        />
      </div>
    </section>
  )
}

export default BackgroundImage
