import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from 'lib/image-loader'
import { useWindowSize } from 'lib/use-window-size'
import { breakpoint } from 'lib/breakpoints'
import wideMapImage from 'public/images/kontakt/map.png'
import mobileMapImage from 'public/images/kontakt/mobile-map.png'

type Props = {
  mapsLink: string
}
const Anfahrt: FunctionComponent<Props> = (props) => {
  const { width } = useWindowSize()
  const isBelowBreakpoint = (width || 0) < breakpoint.s

  const mapImage = isBelowBreakpoint ? mobileMapImage : wideMapImage

  return (
    <section className='anfahrt'>
      <h2>Anfahrt</h2>
      <Link href={props.mapsLink} target='_blank' rel='noreferrer'>
        <Image
          priority
          loader={imageLoader}
          layout='responsive'
          src={mapImage}
          alt='Anfahrtkarte'
        />
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
