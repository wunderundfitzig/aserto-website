import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import List from 'components/list'

import officeImage from 'public/referenzen-placeholder-image-1.jpg'
import { breakpoint, minWidth } from 'lib/breakpoints'

const MenschenUndDaten: FunctionComponent = () => {
  return (
    <section className='menschen-und-daten'>
      <div className='image'>
        <Image src={officeImage} layout='fill' objectFit='cover' alt='' />
      </div>
      <h2>Es braucht Menschen und Daten:</h2>
      <div className='text'>
        <p>
          Diese Erkenntnis hat uns zur Gründung von aserto im Jahr 2003 bewegt.
          <br />
          Unsere Vision war und ist es:
        </p>
        <List color={categoryColors.purpose}>
          <>Beratung evidenzbasierter gestalten</>
          <>Wissenschaft zu Wirksamkeit zu verhelfen</>
          <>Ständig größere Datenmengen in kürzester Zeit greifbar machen</>
        </List>
      </div>

      <style jsx>{`
        section {
          display: grid;
          grid-template-areas:
            'image'
            'title'
            'text';
        }

        .image {
          grid-area: image;
          position: relative;
          width: 100%;
          max-height: 0;
          padding-bottom: 50%;
          overflow: hidden;
        }

        h2 {
          grid-area: title;
          margin-top: 2rem;
        }

        .text {
          grid-area: text;
          margin-bottom: 6rem;
        }

        .text p {
          margin-bottom: 3rem;
        }

        @media ${minWidth(breakpoint.m)} {
          section {
            display: grid;
            grid-gap: 0 3rem;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              'title title'
              'text  image';
          }

          .image {
            position: relative;
            padding-bottom: 120%;
          }

          h2 {
            margin-bottom: 3rem;
          }

          .text p {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default MenschenUndDaten
