import { FunctionComponent } from 'react'
import { minWidth } from 'lib/breakpoints'
import { Contact, ImageType } from 'lib/types'
import ContactCard from 'components/contact-card'

type Props = {
  jobsContact: {
    contact: Contact
    image: ImageType
  }
  leadsContacts: {
    contact: Contact
    image: ImageType
  }[]
}
const Ansprechpartner: FunctionComponent<Props> = (props) => {
  return (
    <section className='ansprechpartner'>
      <h2>Ansprechpartner</h2>
      <ContactCard {...props.jobsContact}>
        {{ title: <h3>Kontakt für initiative Bewerbungen</h3> }}
      </ContactCard>
      <div className='leads-contacs-wrapper'>
        {props.leadsContacts.map((leadsContact, idx) => (
          <ContactCard key={idx} reverse {...leadsContact}>
            {{
              title:
                idx === 0 ? (
                  <h3 className='lead-contact-title'>
                    Kontakte für eine mögliche Zusammenarbeit
                  </h3>
                ) : (
                  <></>
                ),
            }}
          </ContactCard>
        ))}
      </div>

      <style jsx>{`
        h2 {
          margin-top: 2em;
          text-align: right;
        }
        .leads-contacs-wrapper {
          margin-top: 3rem;
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: 2rem;
        }

        .lead-contact-title {
          width: 200%;
          text-align: left;
          margin-bottom: 6rem;
        }

        @media ${minWidth(350)} {
          .lead-contact-title {
            width: unset;
            text-align: unset;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </section>
  )
}

export default Ansprechpartner
