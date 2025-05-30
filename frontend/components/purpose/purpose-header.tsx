import { FunctionComponent } from 'react'
import Image from 'next-export-optimize-images/image'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { categoryColors } from 'lib/colors'
import { LeftRightTurnCurve, PurposeCurve } from 'components/curves'

import purposeHeaderImage from 'public/images/purpose/purpose-header.jpg'

const PurposeHeader: FunctionComponent = () => {
  return (
    <header className='purpose-header'>
      <h1>Purpose</h1>
      <div className='header-image'>
        <Image priority fill src={purposeHeaderImage} alt='' />
        <div className='curve mobile-curve'>
          <LeftRightTurnCurve
            animate
            color={categoryColors.purpose}
            preserveAspectRatio='none'
          />
        </div>
        <div className='curve desctop-curve'>
          <PurposeCurve
            animate
            color={categoryColors.purpose}
            preserveAspectRatio='none'
          />
        </div>
      </div>
      <div className='text-box'>
        <p>
          Wir leben in einem Zeitalter der digitalen Transformation, in dem
          Unternehmen und Institutionen vor richtungsweisenden Entscheidungen
          stehen. Es bestehen enorme Chancen, beispielsweise durch neue
          Geschäftsmodelle. Gleichzeitig kann der digitale Transformationsdruck
          aber auch Unsicherheiten auslösen. Uns stehen immer mehr Daten zur
          Verfügung. In dieser Flut an Informationen und Meinungen fällt es
          jedoch keineswegs leicht, die richtigen Entscheidungen abzuleiten.
        </p>
      </div>

      <style jsx>{`
        header {
          position: relative;
          display: grid;
          grid-template-areas:
            'image'
            'text';
          margin-bottom: 4rem;
        }

        h1 {
          grid-area: image;
        }

        .header-image {
          position: relative;
          left: -2rem;
          grid-area: image;
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

        .header-image :global(img) {
          object-fit: cover;
          object-position: center;
        }

        .curve {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .desctop-curve {
          display: none;
        }

        .text-box {
          grid-area: text;
          margin-top: 40vw;
        }

        @media ${minWidth(breakpoint.xs)} {
          .header-image {
            padding-bottom: 70%;
          }

          .mobile-curve :global(path) {
            transform: translateX(25px);
          }

          .text-box {
            margin-top: 30vw;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .text-box {
            margin-top: 25vw;
            max-width: 25rem;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .text-box {
            margin-top: 6rem;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .header-image {
            padding-bottom: 60%;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .header-image {
            margin-top: -8rem;
            padding-bottom: 70%;
          }
          .header-image::before {
            height: 300px;
            background: linear-gradient(
              rgba(255, 255, 255, 0.7) 0%,
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
            margin-top: -9rem;
            left: -3rem;
            padding-bottom: 75%;
          }

          .header-image::before {
            display: none;
          }

          .mobile-curve {
            display: none;
          }

          .desctop-curve {
            display: block;
          }

          .text-box {
            max-width: 30rem;
            margin-top: 8rem;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .header-image {
            padding-bottom: 65%;
          }

          .desctop-curve :global(.dot-mask) {
            transform: translateY(20px);
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .header-image {
            width: calc(100% + 5rem);
            left: -5rem;
            padding-bottom: 55%;
          }

          .desctop-curve :global(.dot-mask) {
            transform: translateY(35px);
          }
        }
      `}</style>
    </header>
  )
}

export default PurposeHeader
