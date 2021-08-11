import { categoryColors } from 'lib/colors'
import { FunctionComponent } from 'react'
import { DownhillCurve } from 'components/curves'
import Motto from 'components/motto'
import { breakpoint, minWidth } from 'lib/breakpoints'

const Quotes: FunctionComponent = () => {
  return (
    <section className='quotes'>
      <h2>Was braucht es, um zukunftsweisende Entscheidungen zu treffen?</h2>
      <figure className='quote-1'>
        <Motto color={categoryColors.purpose} align='right'>
          {{
            roofline: <figcaption>Daniel Keys Moran:</figcaption>,
            title: (
              <blockquote>
                You can have data without information, but you cannot have
                information without data.
              </blockquote>
            ),
          }}
        </Motto>
      </figure>
      <figure className='quote-2'>
        <Motto color={categoryColors.purpose}>
          {{
            roofline: <figcaption>Hans Rosling:</figcaption>,
            title: (
              <blockquote>
                The world cannot be understood without numbers. But the world
                cannot be understood with numbers alone.
              </blockquote>
            ),
          }}
        </Motto>
      </figure>
      <DownhillCurve
        className='curve'
        color={categoryColors.purpose}
        preserveAspectRatio='none'
      />
      <style jsx>{`
        .quotes {
          position: relative;
          display: grid;
          align-content: flex-start;
          grid-template-areas:
            'quote-1'
            'title'
            'quote-2';
          margin-bottom: -2rem;
        }

        h2 {
          grid-area: title;
          background-color: white;
          padding: 0.5em 0;
          margin: 5rem 0 8rem;
          max-width: 20em;
        }

        .quote-1 {
          grid-area: quote-1;
          width: 90%;
          justify-self: flex-end;
        }

        .quote-2 {
          grid-area: quote-2;
          width: calc(100% - 9rem);
          margin-bottom: 10rem;
        }

        figure,
        blockquote {
          margin: 0;
          padding: 0;
        }

        blockquote::before {
          content: '“';
        }

        blockquote::after {
          content: '”';
        }

        .quotes :global(.curve) {
          position: absolute;
          top: 6rem;
          height: calc(100% - 6rem);
          z-index: -1;
        }

        @media ${minWidth(breakpoint.xs)} {
          h2 {
            margin: 8rem 0 11rem;
          }

          .quote-2 {
            margin-bottom: 11rem;
            width: 70%;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          h2 {
            margin: 10rem 0 13rem;
          }
          .quote-2 {
            margin-bottom: 17rem;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .quotes {
            min-height: 800px;
            margin-top: 10rem;
          }

          h2 {
            margin: 10rem 0 0;
          }

          .quote-1 {
            max-width: 35em;
            margin-top: -6rem;
          }

          .quote-2 {
            margin: 14rem 0 0;
            max-width: 26em;
          }

          .quotes :global(.curve) {
            top: 0;
            height: 100%;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .quotes {
            margin-top: 8rem;
            min-height: 1000px;
          }
          .quote-1 {
            margin-top: 3rem;
          }

          h2 {
            margin-top: 4rem;
          }

          .quote-2 {
            margin-top: 18rem;
          }

          .quotes :global(.curve) {
            position: absolute;
            width: 70%;
            height: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default Quotes
