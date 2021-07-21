import { FunctionComponent } from 'react'
import { Contact, ImageType } from 'lib/types'
import PersonCard from 'components/person-card'

const persons: { image: ImageType; contact: Contact }[] = [
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
      linkedIn: 'https://hui.de',
      xing: 'https://hui.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
  {
    image: { src: '/images/portraits/jan.jpg', width: 155, height: 195 },
    contact: {
      name: 'Jan Blume',
      role: 'Senor Data Scietist',
      phone: '0511-4357389',
      mail: 'blume@aserto.de',
    },
  },
]

const DasSindWir: FunctionComponent = () => {
  return (
    <section className='das-sind-wir'>
      <h2>Das Sind Wir</h2>
      <div className='persons'>
        {persons.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
      <style jsx>{`
        h2 {
          margin-top: 3em;
        }

        .persons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1em;
        }

        .persons > :global(*:nth-child(5)) {
          margin-left: 100%;
        }
      `}</style>
    </section>
  )
}

export default DasSindWir
