import { FunctionComponent } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'

const WasUnsAusmacht: FunctionComponent = () => {
  return (
    <section className='was-uns-ausmacht'>
      <h2>Was uns ausmacht</h2>
      <div className='image'>
        <Image
          src='/leistungen-placeholder-image-1.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className='text-block'>
        <p>
          aserto begleitet Unternehmen und Institutionen bei richtungsweisenden
          Handlungen und eröffnet Möglichkeiten zur Veränderung:
        </p>
        <p>
          Durch belastbare, verständliche Erkenntnisse und durch einen
          wertschätzenden, verbindlichen Dialog mit den Beteiligten.
        </p>
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
          margin-top: 2em;
          margin-bottom: 1em;
        }

        .image {
          position: relative;
          grid-area: image;
          width: 100%;
          height: 300px;
        }

        .text-block {
          grid-area: text-block;
          max-width: 27em;
        }

        @media ${minWidth(breakpoint.s)} {
          .image {
            height: 400px;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .was-uns-ausmacht {
            grid-template-columns: 0.9fr 1.1fr;
            grid-template-rows: auto auto auto;
            grid-template-areas:
              '.          image'
              'title      image'
              'text-block image';
            grid-gap: 0 3em;
            align-items: end;
            margin-top: 3em;
          }

          .image {
            height: 400px;
          }
        }

        @media ${minWidth(breakpoint.l)} {
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
            margin-top: 3em;
          }

          .image {
            height: 600px;
          }
        }
      `}</style>
    </section>
  )
}

export default WasUnsAusmacht