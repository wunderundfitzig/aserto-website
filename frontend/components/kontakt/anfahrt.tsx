import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from 'lib/image-loader'
import { useWindowSize } from 'lib/use-window-size'
import wideMapImage from 'public/images/kontakt/map.png'
import mobileMapImage from 'public/images/kontakt/mobile-map.png'
import { breakpoint } from 'lib/breakpoints'

const Anfahrt: FunctionComponent = () => {
  const { width } = useWindowSize()
  const isBelowBreakpoint = (width || 0) < breakpoint.s

  const mapImage = isBelowBreakpoint ? mobileMapImage : wideMapImage

  return (
    <section className='anfahrt'>
      <h2>Anfahrt</h2>
      <Link href='https://goo.gl/maps/buz9MZ18j6GZBVbr7'>
        <a target='_blank' rel='noreferrer'>
          <Image
            loader={imageLoader}
            layout='responsive'
            src={mapImage}
            alt='Anfahrtkarte'
          />
        </a>
      </Link>
      <style jsx>
        {`
          h2 {
            margin-top: 2em;
          }
        `}
      </style>
    </section>
  )
}

export default Anfahrt
