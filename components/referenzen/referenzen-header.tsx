import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import { RoundCurve, StraigtLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

const ReferenzenHeader: FunctionComponent = () => {
  return (
    <header className='referenzen-header'>
      <h1>Referenzen</h1>
      <div className='text-block'>
        <p>
          Für Wirtschaft, Wissenschaft und Institutionen verschaffen wir
          Durchblick, bestimmten die Richtung, bauen Hürden ab oder gestalten
          Transformationen.
        </p>
      </div>
      <div className='image'>
        <Image
          src='/referenzen-placeholder-image-1.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div className='curve'>
        <RoundCurve
          color={colors.categoryColors.referenzen}
          preserveAspectRatio={{ alignX: 'Max', alignY: 'Min', fit: 'slice' }}
        />
      </div>
      <div className='line'>
        <StraigtLine color={colors.categoryColors.referenzen} rotate={5} />
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
          width: 100vw;
          height: 100%;
          left: 50%;
          transform: translate(-50%, -2em);
        }

        @media ${minWidth(breakpoint.s)} {
          h1 {
            background-color: transparent;
          }

          .text-block {
            max-width: 80%;
          }

          .curve {
            width: 90%;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .referenzen-header {
            grid-template-rows: auto auto 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 3em;
            grid-template-areas:
              'image title'
              'image text-block'
              'image space';
          }

          h1 {
            background-color: white;
          }

          .image {
            width: calc(100% + 2em);
            padding-top: 120%;
            margin-left: -2em;
          }

          .curve {
            grid-area: image / image / space / space;
            height: calc(100% + 50em);
          }

          .line {
            grid-area: space / image / space / space;
          }
        }
      `}</style>
    </header>
  )
}

export default ReferenzenHeader
