'use client'

import { FunctionComponent } from 'react'
import BlocksHtml from 'components/blocks-html'

type Props = {
  html: string
}
const Impressum: FunctionComponent<Props> = (props) => {
  return (
    <section className='impressum'>
      <h2>Impressum</h2>
      <BlocksHtml html={props.html} />
      <style jsx>{`
        h2 {
          margin-top: 4em;
        }
      `}</style>
    </section>
  )
}

export default Impressum
