import React, { FunctionComponent, useEffect, useRef } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'
import CasesNav from 'components/referenzen/cases-nav'
import CaseArticle from 'components/referenzen/case-article'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { useRouter } from 'next/router'

const cases = [
  {
    id: 'case1',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: {
      src: '/images/referenzen/client-logo-placeholder.svg',
      width: 117,
      height: 82,
    },
    task:
      'Kostenlose Informationen über das tagesaktuelle Geschehen finden wir zahlreich im Internet. Doch wie gewinnen wir Nutzer*Innen, die für Qualitätsjournalismus zu zahlen bereit sind? Doch wie gewinnen wir Nutzer*Innen, die für Qualitätsjournalismus zu zahlen bereit sind?',
    solution:
      'Für DIE ZEIT machen wir die Treiber und Hürden der Nutzer*Innen auf dem Weg zum Digitalabo transparent. Der Weg für eine bessere Conversion ist frei. Für DIE ZEIT machen wir die Treiber und Hürden der Nutzer*Innen auf dem Weg zum Digitalabo transparent. Link zu einer Seite',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case2',
    title:
      'Ut ut sunt aut accusamus quas optio quia est. Magnam iure aut omnis voluptatibus',
    category: 'Kommunikationskonzept',
    client: 'client 2',
    logo: {
      src: '/images/referenzen/client-logo-placeholder-2.svg',
      width: 117,
      height: 50,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case3',
    title:
      'Corporis amet et atque occaecati ipsam quo ab earum. Doloremque possimus?',
    category: 'Kommunikationskonzept',
    client: 'client 3',
    logo: {
      src: '/images/referenzen/client-logo-placeholder-3.svg',
      width: 117,
      height: 30,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case4',
    title:
      'Similique voluptate eligendi laboriosam qui. Debitis esse facilis consequatur?',
    category: 'Kommunikationskonzept',
    client: 'client 4',
    logo: {
      src: '/images/referenzen/client-logo-placeholder.svg',
      width: 117,
      height: 82,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case5',
    title:
      'Voluptate voluptates amet laborum laboriosam. Laborum dolores est non enim facilis non sint molestiae. Beatae odit explicabo ut sed quo ipsam accusantium soluta?',
    category: 'Kommunikationskonzept',
    client: 'client 5',
    logo: {
      src: '/images/referenzen/client-logo-placeholder-2.svg',
      width: 117,
      height: 50,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case6',
    title:
      'Accusantium natus est provident veniam mollitia deserunt. Assumenda repudiandae repudiandae?',
    category: 'Kommunikationskonzept',
    client: 'client with long name',
    logo: {
      src: '/images/referenzen/client-logo-placeholder-3.svg',
      width: 117,
      height: 30,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case7',
    title:
      'Placeat repellendus impedit id aut est autem. Veritatis sunt perferendis ducimus?',
    category: 'Kommunikationskonzept',
    client: 'client 7',
    logo: {
      src: '/images/referenzen/client-logo-placeholder.svg',
      width: 117,
      height: 82,
    },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
]

const Cases: FunctionComponent = () => {
  const router = useRouter()
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const sectionIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })

  const activeCaseId = cases[sectionIndex ?? 0].id

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
        <CasesNav cases={cases} activeCaseId={activeCaseId} />
        <div className='content'>
          {cases.map((caseArticle, idx) => (
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
        section {
          margin-bottom: -2rem;
        }

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
