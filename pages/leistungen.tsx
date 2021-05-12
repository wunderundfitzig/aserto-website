import { NextPage } from 'next'
import * as colors from 'lib/colors'
import { PageProps } from 'pages/_app'
import { OpenCircle } from 'components/curves'
import Sloagan from 'components/sloagan'
import GrowingDot from 'components/growing-dot'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <header>
        <h1>Leistungen</h1>
        <Sloagan emphasisColor={colors.green}>
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
        </Sloagan>
        <div className='open-circle'>
          <OpenCircle
            preserveAspectRatio={{ alignX: 'Max', alignY: 'Mid', fit: 'slice' }}
            color={colors.green}
            strokeWidth={10}
          />
        </div>
      </header>
      <GrowingDot />
      <style jsx>{`
        header {
          position: relative;
        }

        h1 {
          color: ${colors.categoryColors.leistungen};
        }

        .open-circle {
          position: absolute;
          top: -2.5em;
          width: 100%;
          height: 30em;
          padding-left: 20em;
          padding-right: 5em;
        }
      `}</style>
    </main>
  )
}

export default LeistungenPage
