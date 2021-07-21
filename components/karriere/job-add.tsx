import { FunctionComponent } from 'react'
import { transparentize } from 'polished'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import MainGrid from 'components/main-grid'
import JobAddHeader from 'components/karriere/job-add-header'
import Button from 'components/button'
import CopyUrlButton from 'components/copy-url-button'

import contactImage from 'public/contact-placeholder-image.jpg'
import AsertoLogo from 'components/aserto-logo'
import { Contact } from 'lib/types'

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
            <div className='image'>
              <Image
                src={contactImage}
                alt={`Portait von ${job.contact.name}`}
              />
            </div>
            <address>
              <h3>Ihr Kontakt</h3>
              <p>{job.contact.name}</p>
              <p>{job.contact.phone}</p>
              <a href={`mailto:${job.contact.mail}`}>{job.contact.mail}</a>
            </address>
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
          bottom: 0;
          left: 0;
          width: 100%;
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
          grid-template-columns: auto 1fr auto;
          grid-gap: 2em;
          align-items: flex-end;
        }

        address {
          font-style: normal;
          font-weight: 200;
          margin: 2em 0 0;
        }

        address p {
          margin: 0;
        }

        .button-wrapper {
          display: grid;
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
          .image,
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
