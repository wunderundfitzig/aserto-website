import { FunctionComponent } from 'react'
import { transparentize } from 'polished'
import ReactMarkdown from 'react-markdown'

import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Contact } from 'lib/types'
import MainGrid from 'components/main-grid'
import JobAddHeader from 'components/karriere/job-add-header'
import Button from 'components/button'
import CopyUrlButton from 'components/copy-url-button'
import AsertoLogo from 'components/aserto-logo'
import ContactCard from 'components/contact-card'

type Job = {
  id: string
  title: string
  content: string
  contact: Contact
}

type Props = {
  jobs: Job[]
  jobIndex: number
}

const JobAdd: FunctionComponent<Props> = (props) => {
  const job = props.jobs[props.jobIndex]

  return (
    <article className='job-add'>
      <MainGrid>
        <div className='modal'>
          <div className='aserto-logo' aria-hidden='true'>
            <AsertoLogo />
          </div>
          <JobAddHeader jobs={props.jobs} jobIndex={props.jobIndex} />
          <main className='content'>
            <ReactMarkdown>{job.content}</ReactMarkdown>
          </main>
          <aside>
            <ContactCard
              image={{
                src: '/contact-placeholder-image.jpg',
                width: 188,
                height: 246,
              }}
              contact={job.contact}
            />
            <div className='button-wrapper'>
              <CopyUrlButton color={colors.categoryColors.karriere}>
                Link kopieren
              </CopyUrlButton>
              <Button
                onClick={() => {
                  window.print()
                }}
                color={colors.categoryColors.karriere}
              >
                Drucken / Download
              </Button>
            </div>
          </aside>
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 100vh;
          background-color: white;
          padding: 1.5em 2em;
          z-index: 110;
          margin: 0;
        }

        .aserto-logo {
          visibility: hidden;
          display: none;
        }

        .content {
          font-weight: 200;
          max-width: 40rem;
          margin: 0 auto;
        }

        aside {
          max-width: 40rem;
          margin: 3em auto;
          display: grid;
          grid-template-columns: auto auto;
          grid-template-areas:
            'image address'
            'buttons buttons';
          grid-gap: 2em;
          align-items: flex-end;
        }

        .button-wrapper {
          display: grid;
          grid-area: buttons;
          grid-gap: 1em;
          justify-items: flex-end;
        }

        @media ${minWidth(breakpoint.s)} {
          .modal {
            position: static;
            grid-area: 1 / main;
            min-height: calc(100vh - 7rem);
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          aside {
            grid-template-areas: 'image address buttons';
          }
        }

        @media print {
          @page {
            margin: 0;
          }
          .aserto-logo {
            display: grid;
            grid-template-columns: 80px;
            justify-content: flex-end;
            visibility: visible;
          }
          aside {
            display: none;
          }

          .modal {
            padding: 0;
          }
        }
      `}</style>
    </article>
  )
}

export default JobAdd
