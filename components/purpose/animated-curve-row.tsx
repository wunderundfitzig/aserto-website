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
          grid-template-rows: min-content 1fr;
          grid-template-areas:
            'text'
            'image';
          justify-content: start;
          align-content: space-around;
          min-height: 100vh;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .row.daten {
          margin-left: 50%;
          grid-template-rows: 1fr min-content;
          grid-template-areas:
            'image'
            'text';
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
          width: calc(100% + 2rem);
          padding-bottom: 100%;
          margin-left: -2rem;
        }

        .text {
          grid-area: text;
          max-width: 18rem;
          padding: 2rem 2rem 2rem 0;
          background-color: ${props.category === 'daten'
            ? colors.lightBeige
            : 'white'};
          z-index: 1;
        }

        .row.daten .text {
          padding: 2rem;
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
