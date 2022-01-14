import { OpenCircle } from 'components/curves'
import Slogan from 'components/slogan'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

const LeistungenHeader: FunctionComponent = () => {
  return (
    <header className='leistungen-header'>
      <h1>Leistungen</h1>
      <Slogan emphasisColor={colors.green}>
        {{
          sloagen: (
            <>
              Wir verbinden <em>Analysen</em>
              <br /> mit Tiefgang und
              <br />
              <em>Beratung</em> mit Substanz.
            </>
          ),
        }}
      </Slogan>
      <div className='open-circle'>
        <OpenCircle
          animate
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Mid', fit: 'slice' }}
          color={colors.green}
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
          top: -2.5em;
          left: 50%;
          width: 50%;
          height: 25em;
        }

        @media ${minWidth(breakpoint.s)} {
          .open-circle {
            top: -3em;
            width: calc100% - 15em);
            height: 26em;
            left: 15em;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .open-circle {
            top: -2.8em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .open-circle {
            top: -1.9em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .open-circle {
            top: -3em;
            height: 30em;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .open-circle {
            top: -3.1em;
            width: calc(100% - 20em);
            left: 20em;
            padding-right: 5em;
          }
        }
      `}</style>
    </header>
  )
}

export default LeistungenHeader
