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
          max-width: 30em;
          background-color: white;
          padding: 2em;
        }
        figcaption {
          margin: 0;
          font-size: 0.9em;
          font-weight: 200;
        }

        blockquote {
          font-family: 'Usherwood';
          margin: 0.3em 0;
          font-size: 2em;
          font-weight: bold;
        }
      `}</style>
    </figure>
  )
}

export default Quote
