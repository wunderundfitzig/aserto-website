import { FunctionComponent } from 'react'
import Image from 'next/image'
import mapImage from 'public/images/karte-placeholder.png'

const Anfahrt: FunctionComponent = () => {
  return (
    <section className='anfahrt'>
      <h2>Anfahrt</h2>
      <Image layout='responsive' src={mapImage} alt='Anfahrtkarte' />
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
