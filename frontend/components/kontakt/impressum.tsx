import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'

type Props = {
  html: string
}
const Impressum: FunctionComponent<Props> = (props) => {
  return (
    <section className='impressum'>
      <h2>Impressum</h2>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <style jsx>{`
        h2 {
          margin-top: 4em;
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

export default Impressum
