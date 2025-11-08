import { FunctionComponent } from 'react'
import { breakpoint, minWidth } from 'lib/breakpoints'

const UnserTeam: FunctionComponent = () => {
  return (
    <section>
      <h2>Unser Team</h2>
      <p className='text-block'>
        In dynamischen Projekten arbeiten wir oft interdisziplinär. Unsere
        Schwerpunkte sind Datenanalyse und Datenvisualisierungen, empirische
        Sozialforschung und strategische Kommunikationsberatung. Die
        verschiedenen Perspektiven und Erfahrungen weiten unseren Blick und
        bereichern unsere Ergebnisse.
      </p>
      <style jsx>{`
        h2 {
          margin-top: 2em;
        }
        .text-block {
          max-width: 45rem;
          margin-bottom: 3em;
        }

        @media ${minWidth(breakpoint.l)} {
          h2 {
            margin-top: 3em;
          }
        }
      `}</style>
    </section>
  )
}

export default UnserTeam
