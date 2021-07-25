import { NextPage } from 'next'
import Image from 'next/image'
import { darken } from 'polished'

import {
  CornerCurve,
  FrontpageCurve,
  MobileFrontpageCurve,
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
      <div className='image-wrapper clipped-image'>
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
        <SecondaryNavigation />
        <SocialLinks />
      </div>
      <div className='main-curve'>
        <FrontpageCurve
          preserveAspectRatio='none'
          color={colors.backgroundBlue}
        />
      </div>
      <div className='mobile-main-curve'>
        <MobileFrontpageCurve
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
          margin: 0;
          font-weight: 200;
          line-height: 1.35em;
        }

        .image-wrapper {
          position: relative;
          background-color: ${darken(0.2, colors.grey)};
          grid-column: 1 / 4;
          grid-row: 3 / 5;
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
          grid-area: footer;
          justify-self: start;
          z-index: 1;
          padding: 0.7em 0.5em 1.5em 0;
        }

        .brown-curve,
        .corner-curve,
        .main-curve {
          display: none;
          pointer-events: none;
        }

        .mobile-main-curve {
          display: block;
          justify-self: flex-end;
          grid-column: 1 / 4;
          grid-row: 3 / 5;
          z-index: 1;
          max-width: 650px;
          width: 100%;
          height: 100%;
        }

        .clipped-image {
          z-index: 10;
          clip-path: inset(
            calc(50% - 105px) 0 calc(50% - 75px) calc(100% - 100px)
          );
        }

        @media ${minWidth(breakpoint.xs)} {
          h1 {
            grid-column: 1 / 3;
          }
          .image-wrapper {
            grid-column: 1 / 3;
          }

          .clipped-image {
            clip-path: inset(
              calc(50% - 107px) 0 calc(50% - 75px) calc(100% - 100px)
            );
          }

          .mobile-main-curve {
            grid-column: 1 / 3;
            grid-row: 3 / 5;
            width: 90%;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .clipped-image {
            clip-path: inset(
              calc(50% - 120px) 0 calc(50% - 85px) calc(100% - 120px)
            );
          }
        }

        @media ${minWidth(breakpoint.l)} {
          h1 {
            text-align: right;
            justify-self: end;
            grid-column: 3 / 5;
            grid-row: 2 / 3;
            max-width: 300px;
            font-size: 1.7em;
            margin-top: 0em;
            font-weight: 200;
          }
          .image-wrapper {
            position: relative;
            grid-column: 1 / 3;
            grid-row: 1 / 4;
            width: 100%;
            height: 100%;
          }

          .clipped-image {
            clip-path: inset(0 0 0 calc(100% - 140px));
          }

          .social-links {
            grid-column: 3 / 4;
            grid-row: 3 / 4;
            background-color: white;
            border-radius: 0 0.5em 0 0;
            margin-left: -1em;
          }

          .brown-curve {
            display: block;
            grid-column: 3 / 5;
            grid-row: 2 / 4;
            width: 200px;
            height: 500px;
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

          .mobile-main-curve {
            display: none;
          }

          .main-curve {
            display: block;
            justify-self: flex-end;
            grid-column: 1 / 3;
            grid-row: 1 / 4;
            z-index: 1;
            max-width: 650px;
            width: 80%;
            min-height: 100%;
          }
        }
        @media ${minWidth(breakpoint.xxl)} {
          .clipped-image {
            clip-path: inset(0 0 0 calc(100% - 160px));
          }
        }
      `}</style>
    </>
  )
}

export default Index
