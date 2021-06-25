import React, { FunctionComponent, useState } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import CasesNav from 'components/referenzen/cases-nav'
import CaseArticle from 'components/referenzen/case-article'

const cases = [
  {
    id: 'case1',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-2.svg', width: 117, height: 82 },
    task:
      'Kostenlose Informationen über das tagesaktuelle Geschehen finden wir zahlreich im Internet. Doch wie gewinnen wir Nutzer*Innen, die für Qualitätsjournalismus zu zahlen bereit sind? Doch wie gewinnen wir Nutzer*Innen, die für Qualitätsjournalismus zu zahlen bereit sind?',
    solution:
      'Für DIE ZEIT machen wir die Treiber und Hürden der Nutzer*Innen auf dem Weg zum Digitalabo transparent. Der Weg für eine bessere Conversion ist frei. Für DIE ZEIT machen wir die Treiber und Hürden der Nutzer*Innen auf dem Weg zum Digitalabo transparent. Link zu einer Seite',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case2',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case3',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case4',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case5',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case6',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
  {
    id: 'case7',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-white.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
    assets: [{ type: 'link', url: 'https://example.com' }],
  },
]

const Cases: FunctionComponent = () => {
  const [activeCaseId, setActiveCaseId] = useState('case1')

  return (
    <section className='cases'>
      <h2>Unsere Cases</h2>
      <div className='case-container'>
        <CasesNav cases={cases} activeCaseId={activeCaseId} />
        <div className='content'>
          {cases.map((caseArticle) => (
            <CaseArticle key={caseArticle.id} case={caseArticle} />
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
        }

        @media ${minWidth(breakpoint.s)} {
          .case-container {
            grid-template-columns: 150px 1fr;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
        }
      `}</style>
    </section>
  )
}

export default Cases
