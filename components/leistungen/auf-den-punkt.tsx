import { FunctionComponent } from 'react'
import Image from 'next/image'
import List from 'components/list'
import { categoryColors } from 'lib/colors'
import { SkewedHalfCircle } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

const AufDenPunkt: FunctionComponent = () => {
  return (
    <section className='auf-den-punkt'>
      <h2>Auf den Punkt gebracht</h2>
      <div className='image'>
        <Image
          src='/leistungen-placeholder-image-2.jpg'
          width={746}
          height={499}
        />
      </div>

      <div className='list'>
        <List color={categoryColors.leistungen}>
          <li>Relevanz und Überzeugungskraft durch 18 Jahre Erfahrung.</li>
          <li>
            Hohe Systemkompetenz durch über 500 richtungsweisende Projekte.
          </li>
          <li>
            Strategischer Partner für Entscheider*innen aus Wirtschaft,
            Wissenschaft und Institutionen.
          </li>
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

        .list {
          grid-area: list;
          max-width: 20em;
        }

        .circle {
          grid-area: 1 / 1 / 4 / 1;
          width: 100%;
          margin-top: 40px;
        }

        @media ${minWidth(breakpoint.m)} {
          .auf-den-punkt {
            grid-template-areas:
              'title'
              'image'
              'list';
          }

          .circle {
            grid-area: image;
            position: absolute;
            z-index: -1;
          }

          .image {
            margin-bottom: 3em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .auf-den-punkt {
            position: relative;
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
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
            position: relative;
            width: calc(100% - 7em);
            height: 70vw;
            left: 7em;
            max-height: 1100px;
            margin-top: 40px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .auf-den-punkt {
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 6em;
          }

          .circle {
            width: 100%;
            left: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default AufDenPunkt
