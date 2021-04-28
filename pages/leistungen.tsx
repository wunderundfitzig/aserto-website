import { categoryColors } from 'lib/colors'
import { NextPage } from 'next'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { PageProps } from 'pages/_app'
import { OpenCircle } from 'components/curves'

const LeistungenPage: NextPage<PageProps> = (props) => {
  return (
    <main style={{ gridArea: props.gridArea }}>
      <h1>Leistungen</h1>
      <div className='slogan-wrapper'>
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
      </div>
      <style jsx>{`
        h1 {
          color: ${categoryColors.leistungen};
        }

        .slogan-wrapper {
          position: relative;
        }

        .open-circle {
          position: absolute;
          top: -8.5em;
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
