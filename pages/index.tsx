import { NextPage } from 'next'
import Image from 'next/image'
import { darken } from 'polished'

import {
  CornerCurve,
  FrontpageCurve,
  SimpleCutRoundCurve,
} from 'components/curves'
import SocialLinks from 'components/social-links'
import SecondaryNavigation from 'components/frontpage/secondary-navigation'
import { breakpoint, minWidth } from 'lib/breakpoints'
import * as colors from 'lib/colors'

const Index: NextPage = () => {
  return (
    <>
      <h1>Wir begleiten bei Richtungsweisenden Entscheidungen</h1>
      <div className='image-wrapper'>
        <Image
          className='image'
          src='/frontpage-banner-2.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='right'
          alt=''
        />
      </div>
      <div className='social-links'>
        <SocialLinks />
      </div>
      <SecondaryNavigation gridArea='bottom-right' />
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
          text-align: right;
          justify-self: end;
          grid-column: 1 / 4;
          grid-row: 2 / 3;
          max-width: 10em;
          font-size: 1.5em;
          margin: 0 0 1em 0;
          font-weight: 200;
          line-height: 1.35em;
        }

        .image-wrapper {
          position: relative;
          background-color: ${darken(0.2, colors.grey)};
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

        .social-links {
          grid-column: 3 / 4;
          grid-row: 3 / 4;
          justify-self: start;
          z-index: 1;
          background-color: white;
          padding: 0.7em 0.5em 1.5em 0;
          border-radius: 0 0.5em 0 0;
          margin-left: -1em;
        }

        .brown-curve,
        .corner-curve,
        .main-curve {
          display: none;
          pointer-events: none;
        }

        @media ${minWidth(breakpoint.l)} {
          h1 {
            text-align: right;
            justify-self: end;
            grid-column: 3 / 5;
            grid-row: 2 / 3;
            max-width: 300px;
            font-size: 2em;
            margin-top: 1em;
          }
          .image-wrapper {
            position: relative;
            grid-column: 1 / 3;
            grid-row: 1 / 4;
            width: 100%;
            height: 100%;
          }

          .brown-curve {
            display: block;
            grid-column: 3 / 5;
            grid-row: 2 / 4;
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
            grid-row: 1 / 4;
            z-index: 1;
            height: 100vh;
          }
        }
      `}</style>
    </>
  )
}

export default Index
