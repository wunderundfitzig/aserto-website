import React, { FunctionComponent } from 'react'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Statement from 'components/statement'
import Motto from 'components/motto'

type Props = {
  case: {
    id: string
    title: string
    client: string
    category: string
    task: string
    solution: string
  }
  isActive: boolean
}
const CaseArticle: FunctionComponent<Props> = (props) => {
  return (
    <article
      id={props.case.id}
      className={`case-article ${props.isActive ? 'active' : undefined}`}
    >
      <div className='inner'>
        <header>
          <Motto color={categoryColors.referenzen}>
            {{
              roofline: (
                <p className='roofline'>
                  {props.case.client} – {props.case.category}
                </p>
              ),
              title: <h3>{props.case.title}</h3>,
            }}
          </Motto>
          <p className='roofline'></p>
        </header>
        <main className='statements'>
          <Statement color={categoryColors.referenzen}>
            {{
              title: <h4>Die Herausforderung</h4>,
              content: <p>{props.case.task}</p>,
            }}
          </Statement>
          <Statement color={categoryColors.referenzen}>
            {{
              title: <h4>Die Lösung</h4>,
              content: <p>{props.case.solution}</p>,
            }}
          </Statement>
        </main>
      </div>

      <style jsx>{`
        .case-article {
          padding: 2em 1.5em;
          max-width: 25em;
          min-height: 100vh;
          display: grid;
          align-items: center;
          opacity: 0.5;
          transition: opacity 0.5s;
        }

        .case-article.active {
          opacity: 1;
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
          p.roofline {
            margin-top: 3em;
          }

          h3 {
            max-width: 30em;
            margin-bottom: 3em;
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
          }

          .inner {
            margin-bottom: 4em;
          }
        }
      `}</style>
    </article>
  )
}

export default CaseArticle
