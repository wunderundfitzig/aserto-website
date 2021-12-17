import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'
import { RoundCurve, EndlessLine } from 'components/curves'
import image from 'public/images/referenzen/referenzen-image.jpg'

const ReferenzenHeader: FunctionComponent = () => {
  return (
    <header className='referenzen-header'>
      <h1>Referenzen</h1>
      <div className='text-block'>
        <p>
          Für Entscheider*innen aus Wirtschaft, Wissenschaft und Institutionen
          schaffen wir Durchblick, erleichtern Richtungsentscheidungen, bauen
          Hürden ab oder gestalten Transformationen.
        </p>
      </div>
      <div className='image'>
        <Image
          loader={imageLoader}
          priority
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt=''
        />
      </div>
      <div className='curve'>
        <RoundCurve
          color={colors.categoryColors.referenzen}
          preserveAspectRatio={{ alignX: 'Max', alignY: 'Min', fit: 'slice' }}
        />
      </div>
      <div className='line'>
        <EndlessLine color={colors.categoryColors.referenzen} rotate={7} />
      </div>
      <style jsx>{`
        .referenzen-header {
          position: relative;
          display: grid;
          align-items: start;
          grid-template-rows: auto auto 8em auto;
          grid-template-areas:
            'title'
            'text-block'
            'space'
            'image';
        }

        h1 {
          grid-area: title;
          color: ${colors.categoryColors.referenzen};
          background-color: white;
          padding: 0.3em 1em;
          margin-top: -0.3em;
          margin-left: -1em;
        }

        .text-block {
          grid-area: text-block;
          max-width: 30em;
          background-color: white;
        }

        .image {
          grid-area: image;
          position: relative;
          width: 100%;
          padding-bottom: 60%;
        }

        .curve {
          position: absolute;
          grid-area: title / title / space / space;
          top: 0;
          left: 0;
          width: 60%;
          transform: translate(0, -6em);
          height: calc(100% + 18em);
          z-index: -1;
        }

        .line {
          position: absolute;
          grid-area: space;
          width: 100%;
          height: 100%;
        }

        @media ${minWidth(breakpoint.s)} {
          h1 {
            background-color: transparent;
          }

          .text-block {
            max-width: 80%;
          }

          .curve {
            width: 95%;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .referenzen-header {
            grid-template-rows: auto auto 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0;
            grid-template-areas:
              'image title'
              'image text-block'
              'image space';
          }

          h1 {
            background-color: white;
            padding-left: 2rem;
            padding-top: 1em;
            padding-bottom: 0.5em;
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 0;
          }

          .image {
            width: calc(100% + 2em);
            padding-top: 80%;
            margin-left: -2em;
          }

          .text-block {
            padding-left: 2rem;
            max-width: none;
          }

          .curve {
            grid-area: image / image / space / space;
            height: calc(100% + 50em);
            transform: translate(0, -9em);
          }

          .line {
            grid-area: space / image / space / space;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .referenzen-header {
            grid-template-columns: 1fr 1fr;
          }

          h1 {
            padding-top: 1em;
          }

          .image {
            width: calc(100% + 3em);
            margin-left: -3em;
          }

          .text-block {
            max-width: 30em;
          }

          .line {
            height: 20px;
            transform: translateY(150px);
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .referenzen-header {
            grid-template-columns: 1fr 1fr;
          }

          h1 {
            padding-top: 1em;
            margin-top: -1em;
          }
          .image {
            margin-top: -5em;
            padding-top: 80%;
          }

          .text-block {
            width: 80%;
          }

          .curve {
            transform: translate(0, -15em);
            height: 150vw;
            min-height: calc(100% + 50em);
            width: 90%;
            max-height: 1500px;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          h1 {
            padding-left: 4rem;
          }

          .text-block {
            padding-left: 4rem;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .image {
            margin-top: -5em;
            margin-left: 0;
            width: 100%;
            padding-top: 60%;
          }
          .curve {
            transform: translate(0, -10em);
            height: 160vw;
          }
        }
      `}</style>
    </header>
  )
}

export default ReferenzenHeader
