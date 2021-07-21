import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'

type Props = {
  inline?: boolean
  color: string
}
const List: FunctionComponent<Props> = (props) => {
  return (
    <ul className={props.inline ? 'inline' : undefined}>
      {props.children}
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul > :global(li) {
          display: grid;
          grid-template-columns: 5px 1fr;
          grid-gap: 1em;
          margin: 0 2em 1.5em 0;
          line-height: 1.3em;
          padding-top: 0.4em;
        }

        ul.inline > :global(li) {
          align-items: center;
        }

        ul > :global(li)::before {
          content: '';
          width: 100%;
          border-radius: 5px;
          height: 30px;
          background-color: ${props.color};
          margin-right: 1em;
        }

        @media ${minWidth(breakpoint.sm)} {
          ul.inline > :global(li) {
            display: inline-grid;
          }

          ul.inline > :global(li)::before {
            height: 40px;
          }
        }
      `}</style>
    </ul>
  )
}

export default List
