import {
  CornerCurve,
  FrontpageCurve,
  SimpleCutRoundCurve,
} from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import * as colors from 'lib/colors'
import { NextPage } from 'next'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
    <>
      <h1>Wir begleiten bei Richtungsweisende Entscheidungen</h1>
      <div className='image-wrapper'>
        <Image
          className='image'
          src='/frontpage-banner.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='right'
        />
      </div>
      <div className='main-curve'>
        <FrontpageCurve
          preserveAspectRatio='none'
          color={colors.backgroundBlue}
        />
      </div>
      <div className='corner-curve'>
        <CornerCurve
          preserveAspectRatio={{ alignX: 'Max', alignY: 'Mid', fit: 'slice' }}
          color={colors.backgroundBlue}
        />
      </div>
      <div className='brown-curve'>
        <SimpleCutRoundCurve
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Max', fit: 'meet' }}
          color={colors.beige}
        />
      </div>
      <style jsx>{`
        h1 {
          font-weight: normal;
          text-align: right;
          justify-self: end;
          grid-column: 1 / 4;
          grid-row: 2 / 3;
          max-width: 10em;
          font-size: 1.5em;
          margin: 0 0 1em 0;
        }

        .image-wrapper {
          position: relative;
          grid-column: 1 / 4;
          grid-row: 3 / 4;
          width: 100%;
          height: 100%;
        }

        .image-wrapper:after {
          content: '';
          position: absolute;
          right: 0;
          width: 250px;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.6)
          );
        }

        .brown-curve,
        .corner-curve,
        .main-curve {
          display: none;
        }

        @media ${minWidth(breakpoint.xl)} {
          h1 {
            font-weight: normal;
            text-align: right;
            justify-self: end;
            grid-column: 3 / 5;
            grid-row: 2 / 3;
            max-width: 300px;
            font-size: 2em;
          }
          .image-wrapper {
            position: relative;
            grid-column: 1 / 3;
            grid-row: 1 / 3;
            width: 100%;
            height: 100%;
          }

          .brown-curve {
            display: block;
            grid-column: 3 / 5;
            grid-row: 2 / 3;
            width: 270px;
            height: 400px;
            max-height: 50%;
            justify-self: end;
            align-self: end;
            margin-right: -3em;
          }

          .corner-curve {
            display: block;
            justify-self: start;
            align-self: center;
            margin-top: -50px;
            width: 8vw;
            height: 400px;
            max-height: 50vh;
            grid-column: 1 / 3;
            grid-row: 2 / 3;
            z-index: 1;
          }

          .main-curve {
            display: flex;
            justify-content: flex-end;
            margin-top: -4em;
            margin-right: -131px;
            grid-column: 1 / 3;
            grid-row: 1 / 3;
            z-index: 1;
            height: 100vh;
          }
        }
      `}</style>
    </>
  )
}

export default Index
