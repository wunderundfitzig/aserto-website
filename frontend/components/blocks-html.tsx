'use client'

import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'

type Props = {
  html: string
  color?: string
}
const BlocksHtml: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <style jsx>{`
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
          background-color: ${props.color ?? colors.grey};
          margin-right: 1em;
        }
      `}</style>
    </>
  )
}

export default BlocksHtml
