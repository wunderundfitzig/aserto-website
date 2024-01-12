import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { TeamMember } from 'lib/types'
import PersonCard from 'components/person-card'
import { PersonLine1, PersonLine2 } from 'components/curves'

const calculateLastRowIndex = (
  membersCount: number,
  layout: { columns: number; empty: number },
): number => Math.ceil((membersCount + layout.empty) / layout.columns) + 1

type Props = {
  members: TeamMember[]
}
const DasSindWir: FunctionComponent<Props> = (props) => {
  const layouts = {
    xxs: { columns: 1, empty: 0 },
    xs: { columns: 2, empty: 3 },
    sm: { columns: 3, empty: 3 },
    xxl: { columns: 4, empty: 3 },
  }
  const lastRowIndex = Object.entries(layouts)
    .map(([breakpoint, layout]) => ({
      [breakpoint]: calculateLastRowIndex(props.members.length, layout),
    }))
    .reduce((aggregat, next) => ({ ...aggregat, ...next }), {})

  return (
    <section className='das-sind-wir'>
      <h2>Das sind wir</h2>
      <div className='persons'>
        {props.members.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
        <Link legacyBehavior href='/karriere#Stellenanzeigen'>
          <a className='job-list-link'>
            <div>
              <h3>Und Du?</h3>
              <p>Hier entlang.</p>
            </div>
          </a>
        </Link>
        <PersonLine1
          className='person-line1'
          color={colors.backgroundBlue}
          preserveAspectRatio={'none'}
        />
        <PersonLine2
          className='person-line2'
          color={colors.backgroundBlue}
          preserveAspectRatio={'none'}
        />
      </div>
      <style jsx>{`
        h2 {
          margin: 3em 0 2em;
        }

        .persons {
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          grid-gap: 2em;
          position: relative;
        }

        .job-list-link {
          box-sizing: border-box;
          width: 50%;
          height: calc(100% - 3rem);
          margin-left: 0;
          display: grid;
          grid-template-areas: 'single-area';
          grid-template-columns: minmax(0, 1fr);
        }

        .job-list-link div {
          grid-area: single-area;
          width: 100%;
          background-color: ${colors.lightBlue};
          color: white;
          padding: 2em;
          font-size: 0.9em;
          font-weight: 200;
          text-align: center;
        }

        .job-list-link::before {
          content: '';
          width: 100%;
          grid-area: single-area;
          padding-bottom: 126%;
        }

        .job-list-link h3 {
          font-size: 1.5em;
          font-weight: 200;
        }

        .job-list-link p {
          line-height: 1.4em;
          hyphens: auto;
        }

        .persons :global(.person-line1) {
          grid-column: 1 / span 1;
          grid-row: 1 / span 5;
          position: absolute;
          width: calc(100% + 6rem);
          height: calc(100% - 16rem);
          top: 8rem;
          right: 0;
          z-index: -1;
        }

        .persons :global(.person-line2) {
          position: absolute;
          bottom: 6rem !important;
          right: 0;
          width: 100%;
          height: calc(100% - 6rem);
          grid-row: ${lastRowIndex.xxs - 2} / span 3;
          grid-column: span 2;
          z-index: -1;
        }

        @media ${minWidth(breakpoint.xs)} {
          .persons {
            grid-template-columns: repeat(2, minmax(0, 170px));
            justify-content: right;
          }
          .persons > :global(*:nth-child(1)) {
            grid-column: 2 / 2;
          }

          .persons > :global(*:nth-child(7)) {
            grid-column: 1 / 1;
          }

          .persons > :global(*:nth-child(11)) {
            grid-column: 2 / 2;
          }

          .job-list-link {
            grid-column: 1;
            width: 100%;
          }

          .persons :global(.person-line1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 7;
            width: calc(100% + 8rem);
          }

          .persons :global(.person-line2) {
            grid-row: ${lastRowIndex.xs - 2} / span 3;
            grid-column: span 2;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .persons {
            grid-template-columns: repeat(3, minmax(0, 200px));
          }

          .persons > :global(*:nth-child(n + 2)) {
            grid-column: unset;
          }

          .persons > :global(*:nth-child(11)) {
            grid-column: 1 / 1;
          }

          .persons > :global(*:nth-child(17)) {
            grid-column: 2 / 2;
          }

          .persons :global(.person-line1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 7;
          }

          .job-list-link {
            grid-column: 1;
          }

          .persons :global(.person-line2) {
            grid-row: ${lastRowIndex.sm - 2} / span 3;
            grid-column: 1 / span 3;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .persons {
            grid-template-columns: repeat(4, minmax(0, 200px));
          }

          .persons > :global(*:nth-child(n + 2)) {
            grid-column: unset;
          }

          .persons > :global(*:nth-child(11)) {
            grid-column: 1 / 1;
          }

          .persons > :global(*:nth-child(15)) {
            grid-column: 2 / 2;
          }

          .persons .job-list-link {
            grid-column: 1;
          }

          .persons :global(.person-line1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 5;
          }

          .persons :global(.person-line2) {
            grid-row: ${lastRowIndex.xxl - 1} / span 2;
            grid-column: 1 / span 3;
          }
        }
      `}</style>
    </section>
  )
}

export default DasSindWir
