import { FunctionComponent } from 'react'
import { transparentize } from 'polished'
import ReactMarkdown from 'react-markdown'

import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { Contact, ImageType } from 'lib/types'
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
  contactImage: ImageType
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
            <ContactCard image={job.contactImage} contact={job.contact} />
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
          z-index: 300;
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
          padding: 0 2em 1.5em;
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
          line-height: 1.5em;
        }

        .content :global(h2) {
          font-size: 1.2em;
          margin-top: 1.5em;
        }

        .content :global(p) {
          line-height: 1.5em;
        }

        .content :global(ul) {
          padding: 0 0 1em 1em;
        }

        .content :global(li) {
          margin: 0.5em 0;
        }

        aside {
          margin: 3em auto;
          display: grid;
          grid-template-areas:
            'contact-card'
            'buttons';
          grid-gap: 2em;
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
            grid-template-areas: 'contact-card buttons';
            grid-template-columns: auto 1fr;
            align-items: flex-end;
            max-width: 40rem;
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
          .button-wrapper {
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
