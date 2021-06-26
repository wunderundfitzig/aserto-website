import { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { MoreInfoIcon } from 'components/icons'

type Props = {
  jobs: { id: string; title: string }[]
}
const JobList: FunctionComponent<Props> = (props) => {
  return (
    <section className='job-list'>
      <h2>Unsere offenen Stellen</h2>
      <ul>
        {props.jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/karriere/jobs/${job.id}`} scroll={false}>
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
          margin-top: 4em;
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
      `}</style>
    </section>
  )
}
export default JobList
