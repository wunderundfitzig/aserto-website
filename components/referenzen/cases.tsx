import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import Statement from 'components/statement'

const cases = [
  {
    id: 'case1',
    title:
      'Wie wird evangelischer Glauben im digitalen Zeitalter kommuniziert?',
    category: 'Kommunikationskonzept',
    client: 'Nordkirche',
    logo: { src: '/client-logo-placeholder-2.svg', width: 117, height: 82 },
    task:
      'In Zeiten großer gesellschaftlicher Veränderungen stehen Kirchen vor der Aufgabe erfolgreich und effizient zu kommunizieren.',
    solution:
      'Gemeinsame Ziele, neue Strukturen und Kollaborationsformen schaffen Klarheit und eine stringente Orientierung an den Mitgliedern der Nordkirche.',
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
        <nav>
          <ul>
            {cases.map((singleCase) => (
              <li
                key={singleCase.id}
                className={
                  singleCase.id === activeCaseId ? 'active' : undefined
                }
              >
                <Image {...singleCase.logo} />
              </li>
            ))}
          </ul>
        </nav>
        <div className='content'>
          {cases.map((singleCase) => (
            <article key={singleCase.id}>
              <header>
                <p className='roofline'>
                  {singleCase.client} – {singleCase.category}
                </p>
                <h3>{singleCase.title}</h3>
                <Statement color={colors.categoryColors.referenzen}>
                  {{
                    title: <h4>Das Problem</h4>,
                    content: <p>{singleCase.task}</p>,
                  }}
                </Statement>
                <Statement color={colors.categoryColors.referenzen}>
                  {{
                    title: <h4>Die Lösung</h4>,
                    content: <p>{singleCase.solution}</p>,
                  }}
                </Statement>
              </header>
            </article>
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
          grid-template-columns: 70px 1fr;
        }

        nav {
          background-color: ${colors.categoryColors.referenzen};
          height: 100vh;
          overflow-y: auto;
          position: sticky;
          top: 0;
        }

        nav ul {
          list-style: none;
          padding: 2em 0;
          margin: 0;
        }

        nav ul li {
          height: 60px;
          padding: 0.8em;
        }

        nav ul li.active {
          background-color: white;
        }

        article {
          min-height: 100vh;
          padding: 2em 2em 2em 1.5em;
        }

        .roofline {
          font-size: 0.8em;
          margin: 0 0 0.3em;
          font-weight: 200;
        }

        h3 {
          font-weight: 600;
          color: ${colors.categoryColors.referenzen};
        }
      `}</style>
    </section>
  )
}

export default Cases
