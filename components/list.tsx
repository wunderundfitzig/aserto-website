import { FunctionComponent } from 'react'

type Props = {
  inline?: boolean
  color: string
}
const List: FunctionComponent<Props> = (props) => {
  return (
    <ul className={`list ${props.inline && 'inline'}`}>
      {props.children}
      <style jsx>{`
        .list {
          list-style: none;
          padding: 0;
          margin: 2em 0;
        }

        .list :global(li) {
          display: flex;
          align-items: top;
          margin: 0 2em 4em 0;
          line-height: 1.7em;
        }

        .list.inline :global(li) {
          display: inline-flex;
          align-items: center;
          margin: 0 2em 1.5em 0;
        }

        .list :global(li)::before {
          content: '';
          display: inline-block;
          flex: 0 0 5px;
          border-radius: 5px;
          height: 30px;
          background-color: ${props.color};
          margin-right: 1em;
        }

        .list.inline :global(li)::before {
          height: 40px;
        }
      `}</style>
    </ul>
  )
}

export default List
