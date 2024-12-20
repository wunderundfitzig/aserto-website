import { FunctionComponent } from 'react'
import { Contact, ImageType } from 'lib/types'
import ContactCard from 'components/contact-card'

type Props = {
  contacts: {
    contact: Contact
    image: ImageType
  }[]
}
const Kontakte: FunctionComponent<Props> = (props) => {
  return (
    <section className='ansprechpartner'>
      <h2>Kontakt</h2>
      <div className='contacs-wrapper'>
        {props.contacts.map((leadsContact, idx) => (
          <ContactCard key={idx} reverse={Boolean(idx % 2)} {...leadsContact}>
            {{ title: <></> }}
          </ContactCard>
        ))}
      </div>

      <style jsx>{`
        h2 {
          margin-top: 2em;
        }
        .contacs-wrapper {
          margin: 3rem 0;
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: 2rem;
        }
      `}</style>
    </section>
  )
}

export default Kontakte
