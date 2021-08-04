import { FunctionComponent } from 'react'
import Image from 'next/image'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { categoryColors } from 'lib/colors'
import { LeftRightTurnCurve } from 'components/curves'

import purposeHeaderImage from 'public/images/purpose-header.jpg'

const PurposeHeader: FunctionComponent = () => {
  return (
    <header className='purpose-header'>
      <h1>Purpose</h1>
      <div className='header-image'>
        <Image
          src={purposeHeaderImage}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className='mobile-curve'>
          <LeftRightTurnCurve
            color={categoryColors.purpose}
            preserveAspectRatio='none'
          />
        </div>
      </div>

      <style jsx>{`
        header {
          position: relative;
        }

        .header-image {
          position: absolute;
          top: -2rem;
          left: -2rem;
          width: calc(100% + 4rem);
          padding-bottom: 130%;
          z-index: -1;
        }

        .header-image::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 300px;
          z-index: 1;
          background: linear-gradient(
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0)
          );
        }

        .mobile-curve {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }

        @media ${minWidth(breakpoint.xs)} {
          .header-image {
            padding-bottom: 80%;
          }

          .mobile-curve :global(path) {
            transform: translateX(25px);
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .header-image {
            padding-bottom: 60%;
          }

          .mobile-curve :global(path) {
            transform: translate(25px, 10px);
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .header-image {
            top: -8rem;
            padding-bottom: 70%;
          }

          .header-image::before {
            height: 300px;
            background: linear-gradient(
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0.7) 20%,
              rgba(255, 255, 255, 0)
            );
          }

          .mobile-curve :global(path) {
            transform: translate(25px, 0px);
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .header-image {
            width: calc(100% + 3rem);
            height: 600px;
            top: -9rem;
            left: -3rem;
          }

          .header-image::before {
            display: none;
          }

          .mobile-curve {
            display: none;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .header-image {
            width: calc(100% + 2rem);
            left: -2rem;
          }
        }
      `}</style>
    </header>
  )
}

export default PurposeHeader
