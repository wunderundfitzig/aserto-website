import { OpenCircle } from 'components/curves'
import Sloagan from 'components/sloagan'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'

const LeistungenHeader: FunctionComponent = () => {
  return (
    <header className='leistungen-header'>
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
      <style jsx>{`
        .leistungen-header {
          position: relative;
          z-index: 1;
        }

        h1 {
          color: ${colors.categoryColors.leistungen};
        }

        .open-circle {
          position: absolute;
          top: -10px;
          width: 100%;
          height: 30em;
          padding-left: 20em;
          padding-right: 5em;
        }
      `}</style>
    </header>
  )
}

export default LeistungenHeader
