'use client'

import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { MoreInfoIcon } from 'components/icons'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  jobs: (
    | {
        slug: string
        title: string
        blueprint: 'pages/job-add'
      }
    | {
        slug: string
        title: string
        externalURL: string
        blueprint: 'pages/personio-link'
      }
  )[]
}
const JobList: FunctionComponent<Props> = (props) => {
  return (
    <section id='Stellenanzeigen' className='job-list'>
      <h2>Unsere offenen Stellen</h2>
      <p className='agg-text'>
        Wir schätzen Vielfalt und schöpfen daraus Innovationskraft. Unseren
        Recruiting- und Bewerbungsprozess haben wir deswegen im Einklang mit dem
        Allgemeinen Gleichbehandlungsgesetz (AGG) gestaltet.
      </p>
      <ul>
        {props.jobs.map((job) => (
          <li key={job.slug}>
            {job.blueprint === 'pages/job-add' ? (
              <Link
                href={`/karriere/jobs/${job.slug}`}
                scroll={false}
                className='job-link'
              >
                <span>{job.title}</span>
                <MoreInfoIcon color={colors.categoryColors.karriere} />
              </Link>
            ) : (
              <Link href={job.externalURL} target='_blank' className='job-link'>
                <span>{job.title}</span>
                <MoreInfoIcon color={colors.categoryColors.karriere} />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .agg-text {
          max-width: 80ch;
        }

        .job-list {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .job-list :global(a) {
          display: grid;
          grid-template-columns: 1fr 30px;
          align-items: center;
          grid-gap: 0 1.5em;
          padding: 1em 0;
          border-bottom: 2px solid ${colors.lightRed};
          text-transform: uppercase;
        }
        .job-list :global(.job-link) {
          grid-template-columns: 1fr 30px;
        }

        .new-tab-info {
          color: ${colors.grey};
          font-size: 0.8em;
          margin-top: 0.1em;
        }

        li:last-child :global(a) {
          border-bottom: 0;
        }

        @media ${minWidth(breakpoint.l)} {
          .job-list {
            margin: 4rem 0;
          }
        }
      `}</style>
    </section>
  )
}
export default JobList
