import { FunctionComponent } from 'react'
import Image from 'next/image'
import List from 'components/list'
import { categoryColors } from 'lib/colors'
import { SkewedHalfCircle } from 'components/curves'

const AufDenPunkt: FunctionComponent = () => {
  return (
    <section className='auf-den-punkt'>
      <h2>Auf den Punkt gebracht</h2>
      <div className='inner'>
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
            strokeWidth={10}
          />
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-align: right;
          margin-bottom: 2em;
        }

        .inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 6em;
          grid-template-areas: 'list image';
        }

        .image {
          grid-area: image;
        }

        .list {
          grid-area: list;
          max-width: 20em;
          margin-top: 5em;
        }

        .circle {
          position: absolute;
          top: 80px;
          left: calc(50% + 200px);
          z-index: -1;
          width: 600px;
        }
      `}</style>
    </section>
  )
}

export default AufDenPunkt
