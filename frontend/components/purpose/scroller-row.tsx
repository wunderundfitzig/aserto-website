import { forwardRef } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import { imageLoader } from 'lib/image-loader'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  category: 'menschen' | 'daten'
  isActive: boolean
  image?: string
  text: string
  id: string
}
const ScrollerRow = forwardRef<HTMLDivElement, Props>(function row(props, ref) {
  return (
    <div
      id={props.id}
      className={`row ${props.isActive ? 'active' : ''} ${
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
        <h3>{props.category === 'daten' ? 'Daten,' : 'Menschen,'}</h3>
        <p>{props.text}</p>
      </div>
      <style jsx>{`
        .row {
          width: 50%;
          position: relative;
          display: grid;
          grid-gap: 0;
          grid-template-rows: min-content auto;
          grid-template-columns: 1fr;
          grid-template-areas:
            'text'
            'image';
          justify-content: start;
          align-content: flex-end;
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
          padding-bottom: 120%;
          margin-left: -2rem;
        }

        .text {
          grid-area: text;
          max-width: 20rem;
          padding: 2rem;
          padding-left: 0;
          z-index: 1;
          background-color: transparent;
        }

        .daten .text {
          padding: 2rem;
          background-color: ${colors.lightBeige};
        }

        #zuhoeren .text {
          background-color: white;
        }

        #prognosen .text {
          background-color: transparent;
        }

        @media ${minWidth(breakpoint.sm)} {
          .row,
          .row.daten {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-gap: 0 3rem;
            grid-template-areas: 'text image';
            align-items: center;
          }

          .row.daten {
            z-index: 1;
            grid-template-areas: 'image text';
          }

          .text {
            max-width: none;
            padding: 3rem;
            padding-left: 0;
          }

          .meschen .text {
            background-color: transparent;
          }

          .image-wrapper {
            margin-left: 0;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .image-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
})

export default ScrollerRow
