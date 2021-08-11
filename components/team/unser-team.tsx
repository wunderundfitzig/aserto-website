import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import List from 'components/list'
import { breakpoint, minWidth } from 'lib/breakpoints'

const UnserTeam: FunctionComponent = () => {
  return (
    <section>
      <h2>Unser Team</h2>
      <p className='text-block'>
        In unseren dynamischen Projekten sind wir interdisziplinär unterwegs und
        vereinen dabei unterschiedliche Profile: Bei aserto arbeiten
        Data-Scientists, Consultants und Specialists für Medienmonitoring- und
        Analyse. Von Datenanalyse und -Visualisierungen, empirischer
        Sozialforschung bis zur strategischen Kommunikationsberatung können wir
        alles abdecken. Die verschiedenen Perspektiven und Erfahrungen weiten
        unseren Blick und bereichern unsere Ergebnisse.
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
