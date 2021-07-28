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
          margin: 0;
          justify-content: center;
        }

        .inner {
          text-align: center;
          display: block;
          width: auto;
          max-width: 50em;
          background-color: white;
          padding: 2em 4em;
        }
        figcaption {
          margin: 0;
          font-size: 0.9em;
          font-weight: 200;
        }

        blockquote {
          font-family: 'Usherwood';
          margin: 0.3em 0;
          font-size: 1.6em;
          font-weight: bold;
        }

        @media ${minWidth(breakpoint.m)} {
          blockquote {
            font-size: 2em;
          }
        }
      `}</style>
    </figure>
  )
}

export default Quote
