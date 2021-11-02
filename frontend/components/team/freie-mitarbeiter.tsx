import { FunctionComponent } from 'react'

type Props = {
  title: string
  names: string
}
const FreieMitarbeiter: FunctionComponent<Props> = (props) => {
  return (
    <section className='freie-mitarbeiter'>
      <h2>{props.title}</h2>
      <div className='text-block'>
        <p>{props.names}</p>
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
