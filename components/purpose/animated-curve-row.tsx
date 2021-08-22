import { forwardRef } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'

type Props = {
  category: 'menschen' | 'daten'
  imagePosition?: 'left' | 'right'
  isActive: boolean
  image?: string
  text: string
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
          <Image src={props.image} layout='fill' alt='' objectFit='cover' />
        </div>
      )}
      <div className='text'>
        <h3>{props.category === 'daten' ? 'Daten' : 'Menschen'}</h3>
        <p>{props.text}</p>
      </div>
      <style jsx>{`
        .row {
          position: relative;
          width: 50%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: ${imagePosition === 'left'
            ? '"image text"'
            : '"text image"'};
          align-items: center;
          margin-bottom: 20%;
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
          padding: 3rem;
        }
      `}</style>
    </div>
  )
})

export default AnimatedCurveRow
