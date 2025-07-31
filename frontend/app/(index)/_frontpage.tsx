'use client'

import Image from 'next-export-optimize-images/image'
import { darken } from 'polished'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { useWindowSize } from 'lib/use-window-size'
import { SiteInfo } from 'lib/kirby-query'
import * as colors from 'lib/colors'

import SecondaryNavigation from 'components/frontpage/secondary-navigation'
import SocialLinks from 'components/social-links'
import {
  CornerCurve,
  FrontpageCurve,
  MobileFrontpageCurve,
  SimpleCutRoundCurve,
} from 'components/curves'

import frontpageBanner from 'public/images/index/frontpage-banner.jpg'

type Props = {
  siteInfo: SiteInfo
}
export default function Frontpage(props: Props) {
  const { width } = useWindowSize()
  const whiteIcons = (width ?? 0) > breakpoint.xs && (width ?? 0) < breakpoint.l

  return (
    <>
      <h1>Wir begleiten bei richtungsweisenden Entscheidungen</h1>
      <div className='image-wrapper'>
        <Image
          priority
          fill
          placeholder='blur'
          className='image'
          src={frontpageBanner}
          alt=''
        />
      </div>
      <div className='image-wrapper clipped-image'>
        <Image
          priority
          fill
          placeholder='blur'
          className='image'
          src={frontpageBanner}
          alt=''
        />
      </div>
      <div className='secondary-and-social-nav'>
        <SecondaryNavigation />
        <SocialLinks
          color={whiteIcons ? 'white' : 'black'}
          linkedinUrl={props.siteInfo.linkedinUrl}
          xingUrl={props.siteInfo.xingUrl}
          instagramUrl={props.siteInfo.instagramUrl}
        />
      </div>
      <div className='main-curve'>
        <FrontpageCurve
          animate
          preserveAspectRatio='none'
          color={colors.backgroundBlue}
        />
      </div>
      <div className='mobile-main-curve'>
        <MobileFrontpageCurve
          animate
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
          grid-row: 3 / 4;
          width: 100%;
          height: 100%;
        }

        .image-wrapper :global(.image) {
          object-fit: cover;
          object-position: center;
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

        .secondary-and-social-nav {
          display: block;
          grid-area: footer;
          width: 100%;
          display: grid;
          direction: rtl;
          justify-content: space-between;
          grid-template-columns: 1fr 1fr;
          justify-self: flex-end;
          text-align: right;
          z-index: 1;
          color: black;
        }

        .corner-curve,
        .main-curve {
          display: none;
          pointer-events: none;
        }

        .mobile-main-curve {
          pointer-events: none;
          display: block;
          justify-self: flex-end;
          grid-column: 1 / 4;
          grid-row: 3 / 4;
          z-index: 1;
          max-width: 650px;
          width: 100%;
          height: 100%;
        }

        .brown-curve {
          pointer-events: none;
          grid-column: 1 / 3;
          grid-row: 1 / 3;
          height: 6em;
          transform: rotate(150deg) scaleX(-1) translateX(-20px) translateY(2em);
          transform-origin: center;
          width: 50%;
        }

        .clipped-image {
          z-index: 10;
          clip-path: inset(
            calc(50% - 135px) 0 calc(50% - 90px) calc(100% - 145px)
          );
        }

        @media ${minWidth(breakpoint.xs)} {
          h1 {
            grid-column: 1 / 3;
            font-size: 1.5em;
          }
          .image-wrapper {
            grid-column: 1 / 3;
            grid-row: 3 / 5;
          }

          .secondary-and-social-nav {
            display: block;
            width: auto;
            grid-area: footer / footer / footer / 3;
            color: white;
            padding: 0.7em 1.5rem 1em 0;
            direction: ltr;
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
              calc(50% - 145px) 0 calc(50% - 100px) calc(100% - 125px)
            );
          }

          .brown-curve {
            transform: rotate(150deg) scaleX(-1) translateY(3em);
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
            clip-path: inset(0 0 0 calc(100% - 170px));
          }

          .secondary-and-social-nav {
            grid-column: 3 / 4;
            grid-row: 3 / 4;
            background-color: white;
            color: black;
            border-radius: 0 0.5em 0 0;
            margin-left: -1em;
            justify-self: flex-start;
            text-align: left;
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
            transform: none;
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
      `}</style>
    </>
  )
}
