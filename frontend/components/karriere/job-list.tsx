import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { MoreInfoIcon } from 'components/icons'
import { breakpoint, minWidth } from 'lib/breakpoints'

type Props = {
  jobs: { slug: string; title: string }[]
}
const JobList: FunctionComponent<Props> = (props) => {
  return (
    <section id='Stellenanzeigen' className='job-list'>
      <h2>Unsere offenen Stellen</h2>
      <ul>
        {props.jobs.map((job) => (
          <li key={job.slug}>
            <Link href={`/karriere/jobs/${job.slug}`} scroll={false}>
              <a>
                <span>{job.title}</span>
                <MoreInfoIcon color={colors.categoryColors.karriere} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .job-list {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        a {
          display: grid;
          grid-template-columns: 1fr 30px;
          align-items: center;
          padding: 1em 0;
          border-bottom: 2px solid ${colors.lightRed};
          text-transform: uppercase;
        }

        li:last-child a {
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
