import { categoryColors } from 'lib/colors'
import { NextPage } from 'next'
import * as colors from 'lib/colors'
import Sloagen from 'components/sloagen'
import { PageProps } from 'pages/_app'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <h1>Leistungen</h1>
      <Sloagen emphasisColor={colors.green}>
        {{
          roofline: 'Das Beste aus zwei Welten:',
          sloagen: (
            <>
              Wir verbinden <em>Analysen</em>
              <br /> mit Tiefgang und
              <br />
              <em>Beratung</em> mit Substanz.
            </>
          ),
        }}
      </Sloagen>
      <style jsx>{`
        h1 {
          color: ${categoryColors.leistungen};
        }
      `}</style>
    </main>
  )
}

export default LeistungenPage
