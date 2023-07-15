import { FunctionComponent } from 'react'
import Image from 'next/image'
import { imageLoader } from 'lib/image-loader'

import image1 from 'public/images/karriere/karriere-image-3.jpg'
import image2 from 'public/images/karriere/karriere-image-4.jpg'
import Statement from 'components/statement'
import { categoryColors } from 'lib/colors'
import { StraightLine } from 'components/curves'

const Vorteile: FunctionComponent = () => {
  return (
    <section className='vorteile'>
      <svg
        className='background'
        preserveAspectRatio='none'
        viewBox='0 0 100 10'
      >
        <rect
          fill={categoryColors.karriere}
          x={-100}
          y={0}
          width={300}
          height={10}
        />
      </svg>
      <div className='images'>
        <div className='image-1'>
          <Image loader={imageLoader} src={image1} alt='' />
        </div>
        <div className='image-2'>
          <Image loader={imageLoader} src={image2} alt='' />
        </div>
      </div>
      <div className='title'>
        <Statement color={categoryColors.karriere}>
          {{
            title: (
              <h3>
                Welche Vorteile die Arbeit
                <br /> bei aserto bietet
              </h3>
            ),
          }}
        </Statement>
      </div>
      <div className='text'>
        <p>Gute Work Life Balance</p>
        <p>Erfolgsbeteiligungen und weitere Zuschüsse</p>
        <p>Möbilitätslösungen für ÖPNV und Individualverkehr</p>
        <p>Angebote zur (mentalen) Gesundheitsförderung</p>
        <p>Sinnstiftende Arbeit</p>
        <p>Flache Hierarchien und Augenhöhe</p>
        <p>Schnelle Aufstiegsmöglichkeiten</p>
        <p>Vielfältige Weiterbildungsangebote</p>
        <p>Hohe Flexibilität durch Arbeitszeitkonten</p>
      </div>
      <div className='line white-line'>
        <StraightLine
          color='white'
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <div className='line red-line'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <style jsx>{`
        .vorteile {
          position: relative;
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 50% 40%;
          grid-gap: 0 4rem;
          grid-template-rows: min-content min-content 200px;
          grid-template-areas:
            'images title'
            'images text'
            'images .';
        }

        .background {
          grid-area: 2 / 1 / 2 / 3;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .images {
          grid-area: images;
        }

        .image-1 {
          margin-bottom: 3rem;
          transform: translateX(-4rem);
        }

        .title {
          grid-area: title;
          color: ${categoryColors.karriere};
          margin: 3rem 0 3rem;
          line-height: 1.7;
        }

        .title h3 {
          margin: 0;
        }

        .text {
          grid-area: text;
          padding: 2rem 0 2.5rem;
          padding-left: calc(1em + 5px);
          color: white;
        }

        .line {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 600px;
          transform: translate(691px, -200px);
          z-index: 1;
        }
        .line.white-line {
          transform: translate(680px, -200px);
        }
      `}</style>
    </section>
  )
}
export default Vorteile
