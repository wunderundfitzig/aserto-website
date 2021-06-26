import { FunctionComponent } from 'react'
import { transparentize } from 'polished'
import Link from 'next/link'
import * as colors from 'lib/colors'
import { CloseIcon } from 'components/icons'
import MainGrid from 'components/main-grid'

type Props = {
  job: {
    id: string
    title: string
  }
}
const JobAdd: FunctionComponent<Props> = (props) => {
  return (
    <article className='job-add'>
      <MainGrid>
        <div className='modal'>
          <header>
            <Link href='/karriere' scroll={false}>
              <a className='close-button'>
                <CloseIcon color={colors.categoryColors.karriere} />
              </a>
            </Link>
            <hr />
            <h1>{props.job.title}</h1>
          </header>
        </div>
      </MainGrid>

      <style jsx>{`
        :global(body) {
          overflow: hidden;
        }

        .job-add {
          background-color: ${transparentize(0.1, colors.backgroundRed)};
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          width: 100%;
          height: 100%;
          overflow: auto;
        }

        .modal {
          grid-area: 1 / main;
          background-color: white;
          padding: 1.5em 2em;
          z-index: 110;
          margin: 0;
          height: calc(100vh + 10rem);
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

        h1 {
          text-align: center;
          text-transform: uppercase;
          color: ${colors.red};
          font-size: 1.2rem;
        }
      `}</style>
    </article>
  )
}

export default JobAdd
