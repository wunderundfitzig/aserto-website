import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { TeamMember } from 'lib/types'
import PersonCard from 'components/person-card'

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

        @media ${minWidth(breakpoint.xs)} {
          .persons {
            grid-template-columns: repeat(2, minmax(0, 170px));
            justify-content: right;
          }
          .persons > :global(*:nth-child(5)) {
            grid-column: 2 / 2;
          }

          .job-list-link {
            grid-column: 2 / 2;
            width: 100%;
            margin-left: 0;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .persons {
            grid-template-columns: repeat(3, minmax(0, 200px));
          }

          .persons > :global(*:nth-child(1)) {
            grid-column: 2 / 2;
          }

          .persons > :global(*:nth-child(5)) {
            grid-column: unset;
          }

          .persons > :global(*:nth-child(8)) {
            grid-column: 1 / 1;
          }

          .job-list-link {
            grid-column: 3 / 3;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .persons {
            grid-template-columns: repeat(4, minmax(0, 200px));
          }

          .persons > :global(*:nth-child(7)) {
            grid-column: 1 / 1;
          }

          .persons > :global(*:nth-child(8)) {
            grid-column: unset;
          }
          .job-list-link {
            grid-column: 4 / 4;
          }
        }
      `}</style>
    </section>
  )
}

export default DasSindWir