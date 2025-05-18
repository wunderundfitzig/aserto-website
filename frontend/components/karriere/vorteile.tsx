import { FunctionComponent } from 'react'
import Image from 'next-export-optimize-images/image'
import { categoryColors } from 'lib/colors'
import Statement from 'components/statement'
import { StraightLine } from 'components/curves'

import image1 from 'public/images/karriere/karriere-image-3.jpg'
import image2 from 'public/images/karriere/karriere-image-4.jpg'
import image3 from 'public/images/karriere/karriere-image-5.jpg'

import chartaLogo from 'public/images/karriere/charta-der-vielfalt-logo.svg'
import niloHealthBadge from 'public/images/karriere/nilo-badge.png'
import { breakpoint, minWidth } from 'lib/breakpoints'

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
          <Image src={image1} alt='' />
        </div>
        <div className='image-2'>
          <Image src={image2} alt='' />
        </div>
      </div>
      <div className='text'>
        <Statement color='white'>
          {{
            title: (
              <h3>
                Welche Vorteile die Arbeit
                <br /> bei aserto bietet
              </h3>
            ),
            content: (
              <>
                <p>Gute Work-Life-Integration</p>
                <p>Erfolgsbeteiligungen und weitere Zuschüsse</p>
                <p>Mobilitätslösungen für ÖPNV und Individualverkehr</p>
                <p>Angebote zur (mentalen) Gesundheitsförderung</p>
                <p>Sinnstiftende Arbeit</p>
                <p>Flache Hierarchien und Augenhöhe</p>
                <p>Schnelle Aufstiegsmöglichkeiten</p>
                <p>Vielfältige Weiterbildungsangebote</p>
                <p>Hohe Flexibilität durch Arbeitszeitkonten</p>
              </>
            ),
          }}
        </Statement>
      </div>
      <div className='badges'>
        <a
          className='charta'
          target='_blank'
          rel='noreferrer'
          href='https://www.charta-der-vielfalt.de/'
        >
          <Image
            src={chartaLogo}
            alt='charta der vielfalt | Für Diversity in der Arbeitswelt'
          />
        </a>
        <a
          className='nio'
          target='_blank'
          rel='noreferrer'
          href='https://nilohealth.com/de/'
        >
          <Image
            src={niloHealthBadge}
            alt='We use nilo.health to empower employee mental health'
          />
        </a>
      </div>
      <div className='badges-text'>
        <p>
          Wir treten für ein wertschätzendes und vorurteilsfreies Arbeitsumfeld
          ein. Deshalb haben wir die Charta der Vielfalt unterzeichnet.
        </p>
        <p>
          Unseren Mitarbeiter*innen bieten wir die Nutzung von nilo.health an –
          eine Plattform mit wertvollen Angeboten für mentales Wohlbefinden.
        </p>
      </div>
      <div className='image-right'>
        <Image src={image3} alt='' />
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
      <div className='line white-line2'>
        <StraightLine
          color='white'
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <div className='line red-line2'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <div className='line right-line'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <style jsx>{`
        .vorteile {
          position: relative;
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: min-content auto auto auto;
          grid-gap: 0 4rem;
          grid-template-areas:
            'images'
            'text'
            'badges'
            'badges-text'
            'right-image';
        }

        .images {
          grid-area: images;
          margin-left: -2em;
          margin-right: -2em;
          margin-bottom: 4rem;
        }

        .images :global(img) {
          width: 100%;
          height: auto;
        }

        .background {
          grid-area: text;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .text {
          grid-area: text;
          padding: 4rem 0 3rem;
          color: white;
        }

        .badges-text {
          grid-area: badges-text;
          margin-bottom: 3em;
        }

        .badges {
          grid-area: badges;
          margin: 4rem 0 2rem;
          display: grid;
          width: 100%;
          justify-items: center;
          align-items: center;
          grid-template-areas:
            'charta'
            'nio';
          grid-gap: 2em;
        }

        .badges :global(img) {
          max-width: 100%;
          height: auto;
        }

        .badges .charta {
          grid-area: charta;
        }

        .badges .nio {
          grid-area: nio;
          max-width: 200px;
        }

        .image-1 {
          width: 80%;
        }

        .image-2 {
          position: relative;
          width: 80%;
          margin-left: 20%;
          margin-top: 2em;
          z-index: 1;
        }

        .image-right {
          grid-area: right-image;
        }

        .image-right :global(img) {
          width: 100%;
          height: auto;
        }

        .line {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
        }
        .red-line {
          height: 600px;
          top: 20px;
          left: -91px;
        }
        .white-line {
          height: 600px;
          top: 0;
          left: -107px;
        }
        .red-line2 {
          display: none;
        }
        .white-line2 {
          display: none;
        }
        .right-line {
          display: none;
        }
        @media ${minWidth(breakpoint.xs)} {
          .red-line {
            height: 1200px;
            top: 80px;
            left: -201px;
          }
          .white-line {
            height: 1200px;
            top: 60px;
            left: -217px;
          }
        }
        @media ${minWidth(breakpoint.s)} {
          .badges {
            align-items: space-between;
            grid-template-areas: 'charta nio';
            grid-gap: 2em;
          }
        }
        @media ${minWidth(breakpoint.sm)} {
          .vorteile {
            margin-top: 8rem;
            grid-template-columns: 1fr 55%;
            grid-gap: 0 3rem;
            grid-template-areas:
              'images      text'
              'right-image text'
              'badges badges-text';
            grid-template-rows: minmax(0, auto) minmax(0, auto) 1fr;
          }

          .background {
            grid-area: 1 / 1 / 3 / 3;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .images {
            position: relative;
            top: -4rem;
            margin: 0;
            margin-left: -2em;
          }

          .image-1 {
            width: 100%;
            margin-bottom: 2em;
          }

          .image-2 {
            width: 100%;
            margin: 0;
            margin-bottom: 2em;
          }

          .image-right {
            position: relative;
            top: -4rem;
            margin-left: -2em;
            margin-bottom: 2rem;
          }

          .badges {
            margin: 0;
            padding: 3em 0;
            grid-gap: 2em;
            align-content: space-evenly;
            justify-items: flex-end;
            grid-template-areas:
              'charta'
              'nio';
          }

          .badges-text {
            margin-top: 3em;
            padding-left: calc(1em + 5px);
          }

          .red-line {
            height: 600px;
            right: 260px;
            left: auto;
            top: -120px;
          }

          .white-line {
            height: 600px;
            right: 267px;
            left: auto;
            top: -120px;
          }
        }
        @media ${minWidth(breakpoint.m)} {
          .vorteile {
            margin-top: 8rem;
            grid-template-columns: 1fr 55%;
            grid-gap: 0 3rem;
            grid-template-areas:
              'images      text'
              'right-image text'
              'right-image .'
              'badges badges-text';
            grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr;
          }
          .image-right {
            margin-bottom: 0;
          }
          .badges {
            padding: 0;
          }
          .badges-text {
            margin: 0;
            padding: 0;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .vorteile {
            margin-top: 4rem;
            grid-template-columns: 50% 40%;
            grid-gap: 0 4rem;
            grid-template-rows: 5em min-content min-content min-content 1fr;
            grid-template-areas:
              'images      .'
              'images      text'
              'images      right-image'
              'badges right-image'
              'badges-text right-image';
          }

          .background {
            grid-area: 2 / 1 / 2 / 3;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .images {
            position: static;
            display: block;
            margin: 0;
          }

          .text {
            padding: 5em 0 4em;
          }

          .image-1 {
            margin: 0;
            margin-bottom: 4rem;
            margin-left: -2rem;
            transform: translateX(-3rem);
          }

          .image-2 {
            margin: 0;
            position: relative;
            margin-left: -2rem;
            z-index: 2;
          }

          .image-right {
            position: static;
            margin: 0;
            margin-top: 5rem;
            width: calc(100% + 183px);
            margin-left: 1rem;
          }

          .badges {
            margin: 4rem 0 2rem;
            grid-template-areas: 'charta' 'nio';
            justify-items: center;
          }

          .red-line {
            height: 600px;
            top: 0;
            left: 0;
            transform: translate(689px, -200px);
            z-index: 1;
          }
          .white-line {
            top: 0;
            left: 0;
            height: 600px;
            transform: translate(680px, -200px);
          }
          .red-line2 {
            display: block;
            height: 800px;
            transform: translate(22px, 550px);
            z-index: 3;
          }
          .white-line2 {
            display: block;
            height: 1200px;
            transform: translate(-260px, 200px);
          }
          .right-line {
            display: none;
            top: auto;
            left: auto;
            bottom: 0;
            right: 0;
            height: 800px;
            transform: translate(-200px, 580px);
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .image-right {
            width: calc(100% + 196px);
          }
          .red-line {
            height: 600px;
            transform: translate(689px, -200px);
            z-index: 1;
          }
          .white-line {
            height: 600px;
            transform: translate(680px, -200px);
          }
          .red-line2 {
            height: 800px;
            transform: translate(122px, 550px);
            z-index: 3;
          }
          .white-line2 {
            height: 1200px;
            transform: translate(-160px, 200px);
          }
        }
        @media ${minWidth(breakpoint.xxl)} {
          .badges {
            margin: 4rem 0 2rem;
            grid-template-areas: 'charta nio';
            justify-items: center;
            justify-content: space-between;
            max-width: 480px;
          }
          .red-line {
            height: 600px;
            transform: translate(691px, -200px);
            z-index: 1;
          }
          .white-line {
            height: 600px;
            transform: translate(680px, -200px);
          }
          .red-line2 {
            height: 800px;
            transform: translate(224px, 550px);
            z-index: 3;
          }
          .white-line2 {
            height: 1200px;
            transform: translate(-60px, 200px);
          }
        }
      `}</style>
    </section>
  )
}
export default Vorteile
