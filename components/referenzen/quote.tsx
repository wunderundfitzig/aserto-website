import { FunctionComponent, ReactElement } from 'react'

type Props = {
  children: {
    quote: ReactElement
    author: ReactElement
  }
}
const Quote: FunctionComponent<Props> = (props) => {
  return (
    <figure>
      <figcaption>{props.children.author}</figcaption>
      <blockquote>{props.children.quote}</blockquote>
    </figure>
  )
}

export default Quote
