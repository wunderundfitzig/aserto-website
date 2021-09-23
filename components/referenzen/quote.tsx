import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent, ReactElement } from 'react'

type Props = {
  children: {
    quote: ReactElement
    author: ReactElement
  }
}
const Quote: FunctionComponent<Props> = (props) => {
  return (
    <figure className='quote'>
      <div className='inner'>
        <figcaption>{props.children.author}</figcaption>
        <blockquote>{props.children.quote}</blockquote>
      </div>

      <style jsx>{`
        .quote {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          margin: 0;
          height: 100%;
          min-height: 300px;
          justify-items: center;
          align-items: center;
        }

        .inner {
          text-align: center;
          display: block;
          width: auto;
          overflow-wrap: break-word;
          width: 100%;
          max-width: 50em;
          padding: 2em 1em;
          background-color: white;
        }
        figcaption {
          margin: 0;
          font-size: 0.9em;
          font-weight: 200;
        }

        blockquote {
          font-family: 'Usherwood';
          margin: 0.3em 0;
          font-size: 1.5em;
          font-weight: bold;
        }

        @media ${minWidth(breakpoint.m)} {
          blockquote {
            font-size: 1.7em;
          }

          .inner {
            padding: 2em 4em;
          }
        }
      `}</style>
    </figure>
  )
}

export default Quote
