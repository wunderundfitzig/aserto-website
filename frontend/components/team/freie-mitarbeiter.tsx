import { FunctionComponent } from 'react'

const FreieMitarbeiter: FunctionComponent = () => {
  return (
    <section className='freie-mitarbeiter'>
      <h2>
        Unterstützt werden wir zudem durch unsere Projektmitarbeiter*innen:
      </h2>
      <div className='text-block'>
        <p>
          Anica Lammers, Dominik Hahn, Julian Hinrichsen, Katarina Heitz, Lucy
          Fröhlich, Marie Christin Sudmeier, Minha Marie Yeo, Moritz Schäfer,
          Nico Garms, Paula Hutecker, Sabrina Sawadsky, Simon Weigold
        </p>
      </div>
      <style jsx>{`
        section {
          margin: 4em 0 10em;
        }

        h2 {
          max-width: 30rem;
          hyphens: auto;
        }

        .text-block {
          max-width: 30em;
        }
      `}</style>
    </section>
  )
}
export default FreieMitarbeiter
