import { FunctionComponent } from 'react'
import Image from 'next-export-optimize-images/image'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { SkewedHalfCircle } from 'components/curves'
import List from 'components/list'
import image from 'public/images/leistungen/leistungen-image-2.jpg'

const AufDenPunkt: FunctionComponent = () => {
  return (
    <section className='auf-den-punkt'>
      <h2>Auf den Punkt gebracht</h2>
      <div className='image'>
        <Image src={image} alt='' />
      </div>

      <div className='list'>
        <List color={categoryColors.leistungen}>
          <>Relevanz und Überzeugungskraft durch über 20 Jahre Erfahrung.</>
          <>Hohe Systemkompetenz durch über 600 richtungsweisende Projekte.</>
          <>
            Strategischer Partner für Entscheider*innen aus Wirtschaft,
            Wissenschaft und Institutionen.
          </>
        </List>
      </div>
      <div className='circle'>
        <SkewedHalfCircle
          color={categoryColors.leistungen}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
        />
      </div>
      <style jsx>{`
        .auf-den-punkt {
          margin-top: 4rem;
          margin-bottom: 6rem;
          position: relative;
          display: grid;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            'image'
            'title'
            'list';
        }
        h2 {
          grid-area: title;
          margin-top: 2em;
        }

        .image {
          grid-area: image;
          width: 80%;
        }

        .image :global(img) {
          width: 100%;
          height: auto;
        }

        .list {
          grid-area: list;
          max-width: 20em;
        }

        .circle {
          position: absolute;
          z-index: -1;
          grid-area: image / image / list / list;
          width: 100%;
          height: calc(100% + 430px);
          margin-top: 130px;
        }

        @media ${minWidth(breakpoint.sm)} {
          .auf-den-punkt {
            grid-template-areas:
              'title'
              'image'
              'list';
          }

          .circle {
            grid-area: image / image / list / list;
            height: calc(100% + 400px);
            margin-top: 80px;
          }

          .image {
            grid-area: image;
            margin-bottom: 3em;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .auf-den-punkt {
            margin-top: 2rem;
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 3em;
            grid-template-areas:
              'title title'
              'list image';
          }

          h2 {
            text-align: right;
            margin-bottom: 2em;
          }

          .image {
            width: 100%;
          }

          .list {
            max-width: 20em;
            margin-top: 5em;
          }

          .circle {
            width: calc(100% - 7em);
            height: 120vw;
            left: 7em;
            max-height: 1100px;
            margin-top: 100px;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .auf-den-punkt {
            grid-template-columns: 0.9fr 1.1fr;
          }
          .circle {
            width: calc(100% - 7em);
            height: 85vw;
            left: 7em;
            max-height: 1100px;
            margin-top: 100px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .auf-den-punkt {
            grid-template-columns: 0.8fr 1.2fr;
            grid-gap: 0 6em;
          }

          .circle {
            width: 100%;
            left: 80px;
            height: 70vw;
            margin-top: 70px;
          }
        }
      `}</style>
    </section>
  )
}

export default AufDenPunkt
