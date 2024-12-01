import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'

type Props = {
  html: string
}
const BlocksHtml: FunctionComponent<Props> = (props) => {
  return (
    <section className='blocks-html'>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />

      <style jsx>{`
        section {
          margin-top: 6rem;
          margin-bottom: 6rem;
          max-width: 40em;
        }

        h3 {
          hyphens: auto;
          line-height: 1.4em;
          position: relative;
          padding-left: calc(1em + 5px);
        }

        h3::before {
          position: absolute;
          left: 0;
          top: -6px;
          content: '';
          display: inline-block;
          width: 5px;
          border-radius: 5px;
          height: 30px;
          background-color: ${colors.grey};
          margin-right: 1em;
        }
      `}</style>
    </section>
  )
}

export default BlocksHtml
