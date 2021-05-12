import { FunctionComponent } from 'react'

type Props = {
  inline?: boolean
  color: string
}
const List: FunctionComponent<Props> = (props) => {
  return (
    <ul className='list'>
      {props.children}
      <style jsx>{`
        .list {
          list-style: none;
          padding: 0;
          margin: 2em 0;
        }

        .list :global(li) {
          display: ${props.inline ? 'inline-flex' : 'flex'};
          align-items: center;
          margin: 0 2em 1.5em 0;
        }

        .list :global(li)::before {
          content: '';
          display: inline-block;
          width: 5px;
          border-radius: 5px;
          height: 40px;
          background-color: ${props.color};
          margin-right: 1em;
        }
      `}</style>
    </ul>
  )
}

export default List
