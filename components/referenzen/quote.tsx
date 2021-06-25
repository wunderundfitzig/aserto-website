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
      <figcaption>{props.children.author}</figcaption>
      <blockquote>{props.children.quote}</blockquote>
      <style jsx>{`
        .quote {
          text-align: center;
          margin: 0;
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
        }
      `}</style>
    </figure>
  )
}

export default Quote
