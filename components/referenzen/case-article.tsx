import React, { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Statement from 'components/statement'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  case: {
    id: string
    title: string
    client: string
    category: string
    task: string
    solution: string
  }
}
const CaseArticle: FunctionComponent<Props> = (props) => {
  return (
    <article className='case-article'>
      <header>
        <p className='roofline'>
          {props.case.client} – {props.case.category}
        </p>
        <h3>{props.case.title}</h3>
      </header>
      <main className='statements'>
        <Statement color={colors.categoryColors.referenzen}>
          {{
            title: <h4>Die Herausforderung</h4>,
            content: <p>{props.case.task}</p>,
          }}
        </Statement>
        <Statement color={colors.categoryColors.referenzen}>
          {{
            title: <h4>Die Lösung</h4>,
            content: <p>{props.case.solution}</p>,
          }}
        </Statement>
      </main>
      <style jsx>{`
        .case-article {
          padding: 2em 1.5em;
          max-width: 25em;
        }

        .roofline {
          font-size: 0.9em;
          margin: 0 0 0.3em;
          font-weight: 200;
        }

        h3 {
          font-weight: 600;
          color: ${colors.categoryColors.referenzen};
          font-size: 1.2em;
        }

        .statements {
          display: grid;
          grid-template-rows: auto auto;
          grid-gap: 2em;
          margin-top: 2em;
          max-width: 18em;
        }

        h4 {
          font-weight: 400;
          margin: 0;
          font-size: 1.05rem;
        }

        @media ${minWidth(breakpoint.s)} {
          .case-article {
            padding: 2em;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .roofline {
            margin-top: 3em;
          }

          h3 {
            max-width: 30em;
            margin-bottom: 3em;
            font-size: 1.4em;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .case-article {
            padding-left: 3em;
            padding-right: 4em;
            max-width: none;
          }
          .statements {
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            grid-gap: 3em;
            max-width: none;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .case-article {
            padding-right: 1em;
            max-width: 700px;
            margin-bottom: 4em;
          }
        }
      `}</style>
    </article>
  )
}

export default CaseArticle
