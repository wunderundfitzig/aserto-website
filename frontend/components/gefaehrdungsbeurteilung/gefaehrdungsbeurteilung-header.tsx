'use client'

import { OpenCircle } from 'components/curves'
import Slogan from 'components/slogan'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

const GefaehrdungsbeurteilungHeader: FunctionComponent = () => {
  return (
    <header className='leistungen-header'>
      <h1>
        Gefährdungs
        <wbr />
        beurteilung
        <br /> psychischer Belastung
      </h1>
      <Slogan emphasisColor={colors.lightBlue}>
        {{
          sloagen: (
            <>
              Zufriedenere <em>Mitarbeitende,</em>
              <br /> gesündere Mitarbeitende,
              <br /> höhere <em>Arbeitgeberattraktivität</em>
            </>
          ),
        }}
      </Slogan>
      <div className='open-circle'>
        <OpenCircle
          animate
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Mid', fit: 'slice' }}
          color={colors.beige}
        />
      </div>
      <style jsx>{`
        .leistungen-header {
          position: relative;
          z-index: 1;
        }

        h1 {
          color: black;
        }

        .open-circle {
          display: none;
        }

        @media ${minWidth(breakpoint.s)} {
          .open-circle {
            display: block;
            position: absolute;
            top: 0;
            width: calc(100% - 20em);
            height: 26em;
            left: 22em;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .open-circle {
            top: -2.3em;
            height: 30em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .open-circle {
            top: -1.2em;
            padding-right: 5em;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .open-circle {
            top: -2em;
            height: 33em;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .open-circle {
            top: -2.2em;
            width: calc(100% - 20em);
            left: 25em;
            padding-right: 5em;
          }
        }
      `}</style>
    </header>
  )
}

export default GefaehrdungsbeurteilungHeader
