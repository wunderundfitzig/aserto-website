import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { ArrowIcon, CloseIcon } from 'components/icons'
import Slider from 'components/slider'
import { useRouter } from 'next/router'

type Job = {
  slug: string
  title: string
}

type Props = {
  jobs: Job[]
  jobIndex: number
}

const clamp = (index: number, length: number): number => {
  if (index < 0) return length - 1
  if (index > length - 1) return 0
  return index
}

const JobAddHeader: FunctionComponent<Props> = (props) => {
  const router = useRouter()
  const prevJob = props.jobs[clamp(props.jobIndex - 1, props.jobs.length)]
  const nextJob = props.jobs[clamp(props.jobIndex + 1, props.jobs.length)]

  return (
    <header>
      <Link href='/karriere' scroll={false}>
        <a className='close-button'>
          <CloseIcon color={colors.categoryColors.karriere} />
        </a>
      </Link>
      <hr />
      <div className='slider-wrapper'>
        <Link href={`/karriere/jobs/${prevJob.slug}`} scroll={false}>
          <a className='arrow-icon prev'>
            <ArrowIcon color={colors.categoryColors.karriere} />
          </a>
        </Link>
        <Slider
          index={props.jobIndex}
          onNavigation={(index: number) => {
            const job = props.jobs[clamp(index, props.jobs.length)]
            router.push(`/karriere/jobs/${job.slug}`)
          }}
        >
          {(index: number) => {
            const job = props.jobs[clamp(index, props.jobs.length)]
            return <h1>{job.title}</h1>
          }}
        </Slider>

        <Link href={`/karriere/jobs/${nextJob.slug}`} scroll={false}>
          <a className='arrow-icon next'>
            <ArrowIcon color={colors.categoryColors.karriere} rotate={180} />
          </a>
        </Link>
      </div>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          padding-top: 1.5rem;
          background-color: white;
        }
        .close-button {
          display: block;
          width: 15px;
          float: right;
        }

        hr {
          clear: both;
          border: 0;
          border-bottom: 1px solid ${colors.lightRed};
          padding-top: 1em;
          margin: 1.5em 0;
        }

        .slider-wrapper {
          display: grid;
          grid-template-columns: 8px 1fr 8px;
          padding: 0 0.2em;
        }

        h1 {
          text-align: center;
          text-transform: uppercase;
          color: ${colors.red};
          font-size: 1.2rem;
          margin-top: 0;
        }

        @media print {
          .close-button {
            display: none;
          }
          .arrow-icon {
            visibility: hidden;
          }
        }
      `}</style>
    </header>
  )
}

export default JobAddHeader
