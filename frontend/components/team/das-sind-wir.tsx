import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { TeamMember } from 'lib/types'
import PersonCard from 'components/person-card'
import { TeamLine } from 'components/curves'

type Props = {
  members: TeamMember[]
}
const DasSindWir: FunctionComponent<Props> = (props) => {
  return (
    <section className='das-sind-wir'>
      <h2>Das sind wir</h2>
      <div className='persons'>
        {props.members.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
        <Link href='/karriere#Stellenanzeigen'>
          <a className='job-list-link'>
            <div>
              <h3>Und Du?</h3>
              <p>Hier entlang.</p>
            </div>
          </a>
        </Link>
        <TeamLine
          className='team-line'
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
          margin-left: 50%;
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

        .das-sind-wir :global(.team-line) {
          grid-area: 1 / 1 / 6 / 2;
          position: absolute;
          width: calc(100% + 6rem);
          height: calc(100% - 16rem);
          top: 8rem;
          right: 0;
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
            grid-column: 2 / 2;
            width: 100%;
            margin-left: 0;
          }

          .das-sind-wir :global(.team-line) {
            grid-area: 1 / 1 / 8 / 3;
            width: calc(100% + 8rem);
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

          .job-list-link {
            grid-column: 3 / 3;
          }

          .das-sind-wir :global(.team-line) {
            grid-area: 1 / 1 / 8 / 4;
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
          .job-list-link {
            grid-column: 4 / 4;
          }

          .das-sind-wir :global(.team-line) {
            grid-area: 1 / 1 / 6 / 5;
          }
        }
      `}</style>
    </section>
  )
}

export default DasSindWir
