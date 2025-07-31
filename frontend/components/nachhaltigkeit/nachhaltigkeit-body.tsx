'use client'

import Image from 'next/image'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { ImageType } from 'lib/types'

import BlocksHtml from 'components/blocks-html'
import { imageLoader } from 'lib/image-loader'

type Props = { image: ImageType; html: string }
export default function NachhaltigkeitBody(props: Props) {
  return (
    <section className='nachhaltigkeit-body'>
      <div className='text'>
        <BlocksHtml html={props.html} />
      </div>
      <Image loader={imageLoader} src={props.image} alt='' sizes='100vw' />
      <style jsx>{`
        .nachhaltigkeit-body {
          margin-top: 6rem;
        }
        .nachhaltigkeit-body .text {
          margin-bottom: 4rem;
          max-width: 40em;
        }

        .nachhaltigkeit-body :global(img) {
          margin-left: -2rem;
          width: calc(100% + 2rem);
          max-width: 50em;
          height: auto;
        }

        @media ${minWidth(breakpoint.l)} {
          .nachhaltigkeit-body :global(img) {
            margin-left: -3rem;
            width: calc(100% + 3rem);
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .nachhaltigkeit-body :global(img) {
            margin-left: -5rem;
            width: calc(100% + 5rem);
          }
        }
      `}</style>
    </section>
  )
}
