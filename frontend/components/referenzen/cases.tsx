import React, { FunctionComponent, useEffect, useRef } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'
import CasesNav from 'components/referenzen/cases-nav'
import CaseArticle from 'components/referenzen/case-article'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { useRouter } from 'next/router'

const cases = [
  {
    id: 'die-zeit',
    title: 'Wie kann DIE ZEIT gegen den Markttrend weiter wachsen?',
    category: 'Leser*innen-zentrierte Weiterentwicklung',
    client: 'DIE ZEIT',
    logo: {
      src: '/images/referenzen/zeit-logo.svg',
      width: 781,
      height: 112,
    },
    task:
      'DIE ZEIT hat in den letzten Jahren viele Abonnent*innen neu hinzugewonnen. Um diese starke Position zu halten und auszubauen, möchte DIE ZEIT die Wünsche ihrer Leser*innen intensiv einbeziehen.',
    solution:
      'Zusammen mit der ZEIT hat aserto qualitative und quantitative Instrumentarien etabliert, die redaktionelle und verlegerische Konzepte prüfen und eine Leser*innen-zentrierte Weiterentwicklung ermöglichen.',
  },
  {
    id: 'ewde',
    title:
      'Wie finden unsere Antworten auf gesellschaftliche Fragen hohe Resonanz?',
    category: 'Issues Dashboard',
    client: 'Das Evangelische Werk für Diakonie und Entwicklung (EWDE) ',
    clientShortName: 'EWDE',
    logo: {
      src: '/images/referenzen/diakonie-logo.svg',
      width: 284,
      height: 93,
    },
    task:
      'In einer sich wandelnden digitalen Öffentlichkeit müssen Wohlfahrtsverbände und Hilfsorganisationen immer kurzfristiger in der Lage sein, sich mit angemessenen und gleichzeitig klaren Positionen in gesellschaftliche Debatten einzubringen.',
    solution:
      'Mithilfe eines Dashboard-gestützten Issue Mangements erkennen Diakonie Deutschland, Brot für die Welt und Diakonie Katastrophenhilfe frühzeitig, wie sich Debatten entwickeln.',
  },
  {
    id: 'huk-coburg',
    title:
      'Wie können wir noch zielgruppenadäquater und themenspezifischer kommunizieren?',
    category: 'Monitoring',
    client: 'HUK-Coburg',
    logo: {
      src: '/images/referenzen/huk-coburg-logo.svg',
      width: 117,
      height: 30,
    },
    task:
      'Die Perspektiven auf Versicherungen werden immer differenzierter. Damit Kommunikation erfolgreich sein kann, muss sie an die öffentlich diskutierten Fragen anknüpfen.',
    solution:
      'Das gemeinsam entwickelte Dashboard bündelt alle Quellen und liefert komfortable Ad-hoc-Analysen zu tagesaktuellen Fragestellungen. Ein thematisch sortierter Newsletter verschafft allen Interessierten einen optimalen Überblick zur öffentlichen Sichtbarkeit.',
  },
  {
    id: 'nordkirche',
    title: 'Wie gelingt die Neugründung eines Kommunikationswerkes?',
    category: 'Begleitung bei der Umsetzung eines Kommunikationskonzepts',
    client: 'Nordkirche',
    logo: {
      src: '/images/referenzen/logo-nordkirche.svg',
      width: 117,
      height: 82,
    },
    task:
      'Im neuen Werk stellen sich Fragen nach Zielen, Führung, Kultur und Struktur. Gleichzeitig gilt es die interne Kommunikation, die Mitgliederkommunikation und die Öffentlichkeitsarbeit auf den medialen Wandel einzustellen.',
    solution:
      'aserto begleitet die Umsetzung durch eine Moderation des Wandels und den Einbezug empirischer Ergebnisse (Befragungen, Gruppendiskussionen).',
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
