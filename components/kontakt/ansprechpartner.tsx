import ContactCard from 'components/contact-card'
import { FunctionComponent } from 'react'

const Ansprechpartner: FunctionComponent = () => {
  const contactImage = {
    width: 188,
    height: 246,
    src: '/contact-placeholder-image.jpg',
  }
  const contact = {
    name: 'Prof. Dr. Lars Harden ',
    phone: '0511-515678-0',
    mail: 'harden@aserto.de',
  }
  return (
    <section className='ansprechpartner'>
      <h2>Ansprechpartner</h2>
      <ContactCard image={contactImage} contact={contact}>
        {{ title: <h3>Ihr Kontakt für Initiative Bewerbungen</h3> }}
      </ContactCard>
      <ContactCard reverse image={contactImage} contact={contact}>
        {{ title: <h3>Ihr Kontakt für Fragen Zum Thema Leistungen</h3> }}
      </ContactCard>
      <style jsx>{`
        h2 {
          margin-top: 2em;
          text-align: right;
        }
      `}</style>
    </section>
  )
}

export default Ansprechpartner
