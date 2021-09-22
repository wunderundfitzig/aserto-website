import ContactCard from 'components/contact-card'
import { FunctionComponent } from 'react'

const Ansprechpartner: FunctionComponent = () => {
  return (
    <section className='ansprechpartner'>
      <h2>Ansprechpartner</h2>
      <ContactCard
        image={{
          width: 696 / 3,
          height: 975 / 3,
          src: '/images/team/portraits/_VND4045.jpg',
        }}
        contact={{
          name: 'Anna Begau',
          phone: '0511-515678-0',
          mail: 'begau@aserto.de',
        }}
      >
        {{ title: <h3>Kontakt für initiative Bewerbungen</h3> }}
      </ContactCard>
      <p>&nbsp;</p>
      <ContactCard
        reverse
        image={{
          width: 696 / 3,
          height: 975 / 3,
          src: '/images/team/portraits/_VND4453.jpg',
        }}
        contact={{
          name: 'Prof. Dr. Lars Harden',
          phone: '0511-515678-0',
          mail: 'harden@aserto.de',
        }}
      >
        {{ title: <h3>Kontakte für eine mögliche Zusammenarbeit</h3> }}
      </ContactCard>
      <p></p>
      <ContactCard
        reverse
        image={{
          width: 696 / 3,
          height: 975 / 3,
          src: '/images/team/portraits/_VND8816.jpg',
        }}
        contact={{
          name: 'Marcel Drews',
          phone: '0511-515678-0',
          mail: 'drews@aserto.de',
        }}
      >
        {{ title: <></> }}
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
