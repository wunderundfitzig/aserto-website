import { FunctionComponent, ReactElement } from 'react'

type Props = {
  color: string
  children: {
    title: ReactElement
    content: ReactElement
  }
}
const Statement: FunctionComponent<Props> = (props) => {
  return (
    <div className='statement'>
      <div>{props.children.title}</div>
      <div className='content'>{props.children.content}</div>
      <style jsx>{`
        .statement {
          position: relative;
          padding-left: calc(1em + 5px);
        }
        .statement::before {
          position: absolute;
          left: 0;
          top: -7px;
          content: '';
          display: inline-block;
          width: 5px;
          border-radius: 5px;
          height: 30px;
          background-color: ${props.color};
          margin-right: 1em;
        }

        .content {
          font-weight: 200;
        }
      `}</style>
    </div>
  )
}
export default Statement
