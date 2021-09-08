import { forwardRef } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import { imageLoader } from 'lib/image-loader'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  category: 'menschen' | 'daten'
  imagePosition?: 'left' | 'right'
  isActive: boolean
  image?: string
  text: string
  onBackground?: boolean
}
const AnimatedCurveRow = forwardRef<HTMLDivElement, Props>(function row(
  props,
  ref
) {
  const imagePosition = props.imagePosition || 'left'
  return (
    <div
      className={`row ${props.isActive && 'active'} ${
        props.category === 'daten' ? 'daten' : 'meschen'
      }`}
      ref={ref}
    >
      {props.image && (
        <div className='image-wrapper'>
          <Image
            loader={imageLoader}
            src={props.image}
            layout='fill'
            alt=''
            objectFit='cover'
          />
        </div>
      )}
      <div className='text'>
        <h3>{props.category === 'daten' ? 'Daten' : 'Menschen'}</h3>
        <p>{props.text}</p>
      </div>
      <style jsx>{`
        .row {
          width: 50%;
          position: relative;
          display: grid;
          grid-gap: 0;
          grid-template-rows: auto auto;
          grid-template-areas:
            'text'
            'image';
          justify-content: center;
          align-content: space-around;
          min-height: 100vh;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .row.daten {
          margin-left: 50%;
          z-index: 1;
        }

        .row.active {
          opacity: 1;
        }

        .row h3 {
          font-weight: 200;
          color: ${colors.categoryColors.purpose};
          text-transform: uppercase;
        }

        .image-wrapper {
          grid-area: image;
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }

        .text {
          grid-area: text;
          max-width: 18rem;
          padding: 2rem;
          background-color: ${props.category === 'daten'
            ? colors.lightBeige
            : 'white'};
          z-index: 1;
        }

        @media ${minWidth(breakpoint.sm)} {
          .row {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: ${imagePosition === 'left'
              ? '"image text"'
              : '"text image"'};
            align-items: center;
          }

          .row.daten {
            z-index: 1;
          }

          .text {
            max-width: none;
            padding: 3rem;
            background-color: ${props.category === 'daten' && props.onBackground
              ? colors.lightBeige
              : 'transparent'};
          }
        }
      `}</style>
    </div>
  )
})

export default AnimatedCurveRow
