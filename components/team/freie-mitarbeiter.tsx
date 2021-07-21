import { FunctionComponent } from 'react'

const FreieMitarbeiter: FunctionComponent = () => {
  return (
    <section className='freie-mitarbeiter'>
      <h2>User Team – Anpassungsfähig</h2>
      <div className='text-block'>
        <h3>Vielen Danke für die Zusammenarbeit:</h3> Alexandra Porgann, Anica
        Lammers , Dominik Hahn, Julian Hinrichsen, Katarina Heitz , Lukas
        Kellermann, Marie Sudmeier, Minha Marie Yeo, Moritz Schäfer, Nico Garms
        , Paula Hutecker, Rabea Adam, Sabrina Sawadsky, Simon Weigold
      </div>
      <style jsx>{`
        section {
          margin: 4em 0 10em;
        }

        .text-block {
          max-width: 30em;
        }
      `}</style>
    </section>
  )
}
export default FreieMitarbeiter
