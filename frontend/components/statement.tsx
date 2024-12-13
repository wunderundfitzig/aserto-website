'use client'

import { FunctionComponent, ReactChild } from 'react'

type Props = {
  color: string
  children: {
    title?: ReactChild
    content?: ReactChild
  }
}
const Statement: FunctionComponent<Props> = (props) => {
  return (
    <div className={`statement ${props.children.title ? 'with-title' : ''}`}>
      {props.children.title && (
        <div className='title'>{props.children.title}</div>
      )}
      {props.children.content && (
        <div className='content'>{props.children.content}</div>
      )}
      <style jsx>{`
        .statement {
          position: relative;
          padding-left: calc(1em + 5px);
        }
        .statement::before {
          position: absolute;
          left: 0;
          content: '';
          display: inline-block;
          width: 5px;
          border-radius: 5px;
          height: 30px;
          background-color: ${props.color};
          margin-right: 1em;
        }
        .statement.with-title::before {
          top: -4px;
        }

        .title {
          line-height: 1.5;
        }

        .content {
          font-weight: 200;
        }
      `}</style>
    </div>
  )
}
export default Statement
