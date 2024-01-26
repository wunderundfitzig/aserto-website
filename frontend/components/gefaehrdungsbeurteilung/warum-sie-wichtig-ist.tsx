import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'
import * as colors from 'lib/colors'
import List from 'components/list'
import image from 'public/images/leistungen/leistungen-image-1.jpg'

const WarumSieWichtigIst: FunctionComponent = () => {
  return (
    <section className='was-uns-ausmacht'>
      <h2>Warum sie wichtig ist</h2>
      <div className='image'>
        <Image fill priority src={image} alt='' />
      </div>
      <div className='text-block'>
        <p>
          Wer dauerhaft zufriedene Mitarbeitende haben will, muss sich um sie
          kümmern – auf verschiedenen Ebenen. Dazu gehört auch ihre psychische
          Gesundheit.
        </p>
        <p>
          In einem ersten Schritt gilt es zu wissen, wie es um die Gesundheit
          der Beschäftigten steht – am besten indem man sie fragt. Durch die
          Ergebnisse ergeben sich Handlungsfelder für Vorstände,
          Geschäftsführung, HR und Personalverantwortliche.
        </p>
        <List color={colors.lightBlue}>
          <>Erkennen</>
          <>Verstehen</>
          <>Handeln</>
        </List>
      </div>

      <style jsx>{`
        .was-uns-ausmacht {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            'image'
            'title'
            'text-block';
          margin-top: 4em;
        }

        h2 {
          grid-area: title;
          margin-top: 4rem;
          margin-bottom: 1em;
        }

        .image {
          position: relative;
          grid-area: image;
          width: 100%;
          height: 300px;
        }

        .image :global(img) {
          object-fit: cover;
          object-postion: center;
        }

        .text-block {
          grid-area: text-block;
          max-width: 27em;
        }

        .text-block p {
          margin-top: 0;
        }

        .text-block p:last-of-type {
          margin-bottom: 3rem;
        }

        @media ${minWidth(breakpoint.s)} {
          .image {
            height: 400px;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .was-uns-ausmacht {
            grid-template-columns: 0.9fr 1.1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
              'title      image'
              'text-block image';
            grid-gap: 0 3em;
            align-items: start;
            margin-top: 4em;
          }

          h2 {
            margin-top: 6rem;
          }

          .image {
            height: 400px;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .was-uns-ausmacht {
            grid-gap: 0 5em;
          }

          .text-block {
            margin-bottom: 2em;
          }
          .image {
            height: 500px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .was-uns-ausmacht {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            grid-template-areas:
              '.          image'
              'title      image'
              'text-block image';
            grid-gap: 0 6em;
            align-items: end;
            margin-top: 6em;
          }

          .image {
            height: 600px;
          }
        }
      `}</style>
    </section>
  )
}

export default WarumSieWichtigIst
