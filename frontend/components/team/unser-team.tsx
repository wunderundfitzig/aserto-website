import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import List from 'components/list'

const UnserTeam: FunctionComponent = () => {
  return (
    <section>
      <h2>Unser Team</h2>
      <p className='text-block'>
        In dynamischen Projekten arbeiten wir oft interdisziplinär. Unsere
        Schwerpunkte sind Datenanalyse und -visualisierungen, empirische
        Sozialforschung und strategische Kommunikationsberatung. Die
        verschiedenen Perspektiven und Erfahrungen weiten unseren Blick und
        bereichern unsere Ergebnisse.
      </p>
      <List inline color={colors.lightBlue}>
        <>Consulting</>
        <>Data-Science</>
        <>Medienmonitoring- und Analyse</>
      </List>
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
