import Image from 'next/image'

import { breakpoint, minWidth } from 'lib/breakpoints'
import BlocksHtml from 'components/blocks-html'
import image from 'public/images/nachhaltigkeitsbericht/nachhaltigkeitsbericht.jpg'

type Props = { html: string }
export default function NachhaltigkeitsberichtBody(props: Props) {
  return (
    <section className='nachhaltigkeitsbericht-body'>
      <div className='text'>
        <BlocksHtml html={props.html} />
      </div>
      <Image src={image} alt='' sizes='100vw' />
      <style jsx>{`
        .nachhaltigkeitsbericht-body {
          margin-top: 6rem;
        }
        .nachhaltigkeitsbericht-body .text {
          margin-bottom: 4rem;
          max-width: 40em;
        }

        .nachhaltigkeitsbericht-body :global(img) {
          margin-left: -2rem;
          width: calc(100% + 2rem);
          height: auto;
        }

        @media ${minWidth(breakpoint.l)} {
          .nachhaltigkeitsbericht-body :global(img) {
            margin-left: -3rem;
            width: calc(100% + 3rem);
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .nachhaltigkeitsbericht-body :global(img) {
            margin-left: -5rem;
            width: calc(100% + 5rem);
          }
        }
      `}</style>
    </section>
  )
}
