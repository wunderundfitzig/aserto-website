import React, { FunctionComponent, useEffect, useRef } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Case } from 'lib/types'
import CasesNav from 'components/referenzen/cases-nav'
import CaseArticle from 'components/referenzen/case-article'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { useRouter } from 'next/router'

type Props = {
  cases: Case[]
}
const Cases: FunctionComponent<Props> = (props) => {
  const router = useRouter()
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const sectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })

  const activeCaseId = props.cases[sectionIndex ?? 0].id

  useEffect(() => {
    if (sectionIndex === null) {
      router.replace(`/referenzen`, undefined, { scroll: false })
    } else {
      history.replaceState(null, 'null', `#${activeCaseId}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIndex, activeCaseId])

  return (
    <section className='cases'>
      <h2>Unsere Cases</h2>
      <div className='case-container'>
        <CasesNav cases={props.cases} activeCaseId={activeCaseId} />
        <div className='content'>
          {props.cases.map((caseArticle, idx) => (
            <div
              key={caseArticle.id}
              ref={(ref) => (sectionRefs.current[idx] = ref)}
            >
              <CaseArticle
                case={caseArticle}
                isActive={caseArticle.id === activeCaseId}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-align: right;
        }

        .case-container {
          background-color: white;
          margin: 2em -2em 0;
          display: grid;
          grid-template-areas: 'nav content';
          grid-template-columns: minmax(70px, 18vw) 1fr;
        }

        .content {
          display: grid;
          justify-content: center;
          align-items: center;
        }

        @media ${minWidth(breakpoint.s)} {
          .case-container {
            grid-template-columns: minmax(150px, 23vw) 1fr;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .case-container {
            grid-template-columns: 200px 1fr;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .case-container {
            grid-template-columns: 300px 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Cases
