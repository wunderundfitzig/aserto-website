import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import List from 'components/list'

import officeImage from 'public/images/purpose/purpose.jpg'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'

const MenschenUndDaten: FunctionComponent = () => {
  return (
    <section className='menschen-und-daten'>
      <h2>Es braucht Menschen und Daten:</h2>
      <div className='image'>
        <Image
          loader={imageLoader}
          src={officeImage}
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>
      <div className='text'>
        <p>
          Diese Erkenntnis hat uns zur Gründung von aserto im Jahr 2003 bewegt.
          Unsere Vision war und ist:
        </p>
        <List color={categoryColors.purpose}>
          <>Beratung evidenzbasierter gestalten</>
          <>Wissenschaft zu Wirksamkeit verhelfen</>
          <>Ständig größere Datenmengen in kürzester Zeit greifbar machen</>
        </List>
      </div>

      <style jsx>{`
        section {
          display: grid;
          grid-template-areas:
            'title'
            'image'
            'text';
          margin-top: 3rem;
        }

        .image {
          position: relative;
          grid-area: image;
          width: 100%;
          max-height: 0;
          padding-bottom: 80%;
          overflow: hidden;
        }

        h2 {
          grid-area: title;
          width: calc(100% - 3rem);
        }

        .text {
          grid-area: text;
          margin-top: 1rem;
        }

        .text p {
          margin-bottom: 3rem;
        }

        @media ${minWidth(breakpoint.s)} {
          .image {
            padding-bottom: 50%;
          }
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
