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
      <div>{props.children.content}</div>
      <style jsx>{`
        .statement::before {
          content: '';
          display: inline-block;
          flex: 0 0 5px;
          border-radius: 5px;
          height: 30px;
          background-color: ${props.color};
          margin-right: 1em;
        }
      `}</style>
    </div>
  )
}
export default Statement
