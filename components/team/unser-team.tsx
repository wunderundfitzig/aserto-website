import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import List from 'components/list'

const UnserTeam: FunctionComponent = () => {
  return (
    <section>
      <h2>Unser Team - interdisziplinär</h2>
      <p className='text-block'>
        In unseren dynamischen Projekten sind wir interdisziplinär unterwegs und
        vereinen dabei unterschiedliche Profile: Bei aserto arbeiten
        Data-Scientists, Consultants und Specialists für Medienmonitoring und
        Analyse. Von Datenanalyse und -Visualisierungen, empirischer
        Sozialforschung bis zur strategischen Kommunikationsberatung können wir
        alles abdecken. Die verschiedenen Perspektiven und Erfahrungen weiten
        unseren Blick und bereichern unsere Ergebnisse.
      </p>
      <List inline color={colors.lightBlue}>
        <li>Consulting</li>
        <li>Data-Science</li>
        <li>Medienmonitorung- und Analyse</li>
      </List>
      <style jsx>{`
        .text-block {
          max-width: 35em;
        }
      `}</style>
    </section>
  )
}

export default UnserTeam
