import { breakpoint, minWidth } from 'lib/breakpoints'
import { Children, FunctionComponent } from 'react'
import Statement from './statement'

type Props = {
  inline?: boolean
  color: string
}
const List: FunctionComponent<Props> = (props) => {
  const children = Children.toArray(props.children)

  return (
    <ul className={props.inline ? 'inline' : undefined}>
      {children.map((element, idx) => (
        <li key={idx}>
          <Statement color={props.color}>{{ title: <>{element}</> }}</Statement>
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul li {
          display: block;
          margin: 0 2em 1.5em 0;
          line-height: 1.3em;
          padding-top: 0.4em;
        }

        ul.inline li {
          align-items: center;
        }

        @media ${minWidth(breakpoint.sm)} {
          ul.inline > :global(li) {
            display: inline-block;
          }
        }
      `}</style>
    </ul>
  )
}

export default List
