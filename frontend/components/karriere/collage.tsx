'use client'

import { FunctionComponent } from 'react'
import Image from 'next/image'
import { StraightLine } from 'components/curves'

import image1 from 'public/images/karriere/karriere-image-6.jpg'
import image2 from 'public/images/karriere/karriere-image-7.jpg'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

const Collage: FunctionComponent = () => {
  return (
    <section className='collage'>
      <div className='left-image'>
        <Image src={image1} alt='' />
      </div>
      <div className='right-image'>
        <Image src={image2} alt='' />
      </div>
      <div className='line'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <style jsx>{`
        .collage {
          position: relative;
          display: grid;
          grid-template-rows: auto auto;
          grid-gap: 1rem;
          grid-template-areas: 'left' 'right';
          margin-bottom: 2rem;
        }

        .collage :global(img) {
          width: 100%;
          height: auto;
        }

        .left-image {
          grid-area: left;
          width: 80%;
          z-index: 1;
        }

        .right-image {
          grid-area: right;
          width: 70%;
          margin-top: -4rem;
          justify-self: flex-end;
        }

        .line {
          position: absolute;
          top: -50px;
          left: 0px;
          height: calc(100% + 100px);
          width: 1px;
        }
        @media ${minWidth(breakpoint.s)} {
          .collage {
            grid-template-columns: 1.3fr 1fr;
            grid-gap: 2rem;
            grid-template-areas: 'left right';
            margin-top: 2rem;
            margin-bottom: 4rem;
          }
          .line {
            top: -80px;
            height: calc(100% + 150px);
          }
          .left-image {
            width: 100%;
          }

          .right-image {
            width: 100%;
            margin-top: 6rem;
          }
        }
        @media ${minWidth(breakpoint.l)} {
          .collage {
            grid-template-columns: calc(50% + 4rem) 1fr;
            grid-gap: 4rem;
            grid-template-areas: 'left right';
            margin-top: 5rem;
            margin-bottom: 0;
          }
          .right-image {
            margin-top: 10rem;
          }
          .line {
            top: -150px;
            left: -30px;
            height: calc(100% + 800px);
            width: 1px;
          }
        }
      `}</style>
    </section>
  )
}

export default Collage
