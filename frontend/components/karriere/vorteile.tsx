import { FunctionComponent } from 'react'
import Image from 'next/image'
import { imageLoader } from 'lib/image-loader'
import { categoryColors } from 'lib/colors'
import Statement from 'components/statement'
import { StraightLine } from 'components/curves'

import image1 from 'public/images/karriere/karriere-image-3.jpg'
import image2 from 'public/images/karriere/karriere-image-4.jpg'
import image3 from 'public/images/karriere/karriere-image-5.jpg'

import chartaLogo from 'public/images/karriere/charta-der-vielfalt-logo.svg'
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
        <p>Gute Work-Life-Integration</p>
        <p>Erfolgsbeteiligungen und weitere Zuschüsse</p>
        <p>Möbilitätslösungen für ÖPNV und Individualverkehr</p>
        <p>Angebote zur (mentalen) Gesundheitsförderung</p>
        <p>Sinnstiftende Arbeit</p>
        <p>Flache Hierarchien und Augenhöhe</p>
        <p>Schnelle Aufstiegsmöglichkeiten</p>
        <p>Vielfältige Weiterbildungsangebote</p>
        <p>Hohe Flexibilität durch Arbeitszeitkonten</p>
      </div>
      <div className='charta-logo'>
        <Image
          loader={imageLoader}
          src={chartaLogo}
          alt='charta der vielfalt | Für Diversity in der Arbeitswelt'
        />
      </div>
      <div className='charta-text'>
        <p>
          Wir treten für ein wertschätzendes und vorurteilsfreies Arbeitsumfeld
          ein, das Talente aufgrund ihrer Leistungen schätzt – unabhängig von
          Alter, Geschlecht und geschlechtlicher Identität, ethnischer oder
          kultureller Herkunft, Religion und Weltanschauung, sexueller
          Orientierung und Identität oder Behinderung. Deshalb haben wir die
          Charta der Vielfalt unterzeichnet.
        </p>
      </div>
      <div className='image-right'>
        <Image loader={imageLoader} src={image3} alt='' />
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
            'title'
            'text'
            'charta-logo'
            'charta-text'
            'right-image';
        }

        .images {
          grid-area: images;
          margin-left: -2em;
          margin-right: -2em;
        }

        .background {
          grid-area: text;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .title {
          grid-area: title;
          color: ${categoryColors.karriere};
          margin: 4rem 0 3rem;
          line-height: 1.7;
        }

        .title h3 {
          margin: 0;
        }

        .text {
          grid-area: text;
          padding: 2.5rem 0 3rem;
          padding-left: calc(1em + 5px);
          color: white;
        }

        .charta-text {
          grid-area: charta-text;
        }

        .charta-logo {
          grid-area: charta-logo;
          margin: 4rem 0 2rem;
          text-align: center;
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
        @media ${minWidth(breakpoint.sm)} {
          .vorteile {
            margin-top: 8rem;
            grid-template-columns: 1fr 55%;
            grid-gap: 0 3rem;
            grid-template-areas:
              '.           title'
              'images      text'
              'right-image text'
              'charta-logo charta-text';
            grid-template-rows: auto minmax(0, auto) minmax(0, auto) 1fr;
          }

          .background {
            grid-area: 2 / 1 / 4 / 3;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .title {
            margin-top: 0;
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

          .charta-logo {
            align-self: center;
          }

          .charta-text {
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
              '.           title'
              'images      text'
              'right-image text'
              'right-image .'
              'charta-logo charta-text';
            grid-template-rows: auto minmax(0, auto) minmax(0, auto) min-content 1fr;
          }
          .image-right {
            margin-bottom: 0;
          }
          .charta-logo {
            align-self: flex-start;
          }
          .charta-text {
            margin: 0;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .vorteile {
            margin-top: 4rem;
            grid-template-columns: 50% 40%;
            grid-gap: 0 4rem;
            grid-template-rows: min-content min-content min-content min-content 1fr;
            grid-template-areas:
              'images      title'
              'images      text'
              'images      right-image'
              'charta-logo right-image'
              'charta-text right-image';
          }

          .background {
            grid-area: 2 / 1 / 2 / 3;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .title {
            margin: 4rem 0 3rem;
          }

          .images {
            display: block;
          }

          .image-1 {
            margin-bottom: 4rem;
            margin-left: -2rem;
            transform: translateX(-3rem);
          }

          .image-2 {
            position: relative;
            margin-left: -2rem;
            z-index: 2;
          }

          .image-right {
            margin-top: 5rem;
            width: calc(100% + 220px);
            margin-left: 1rem;
          }

          .charta-text {
            margin-top: 0;
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
