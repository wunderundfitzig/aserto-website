import { OpenCircle } from 'components/curves'
import Sloagan from 'components/sloagan'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

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
          top: -1.7em;
          left: 50%;
          width: 50%;
          height: 25em;
        }

        @media ${minWidth(breakpoint.s)} {
          .open-circle {
            top: -1.2em;
            width: calc(100% - 15em);
            height: 26em;
            left: 15em;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .open-circle {
            top: -0.6em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .open-circle {
            top: -0.1em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .open-circle {
            top: -1.5em;
            height: 30em;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .open-circle {
            top: -2em;
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
