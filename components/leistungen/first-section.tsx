import { FunctionComponent } from 'react'
import Image from 'next/image'

const FirstSection: FunctionComponent = () => {
  return (
    <section className='first-section'>
      <div className='text-block'>
        <h2>Was uns ausmacht</h2>
        <p>
          aserto begleitet Unternehmen und Institutionen bei richtungsweisenden
          Handlungen und eröffnet Möglichkeiten zur Veränderung:
        </p>
        <p>
          Durch belastbare, verständliche Erkenntnisse und durch einen
          wertschätzenden, verbindlichen Dialog mit den Beteiligten.
        </p>
      </div>
      <Image
        src='/leistungen-placeholder-image-1.jpg'
        width={746}
        height={979}
      />
      <style jsx>{`
        .first-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 6em;
          align-items: end;
          margin-top: 3em;
        }

        .text-block {
          margin-bottom: 2em;
          max-width: 30em;
        }
      `}</style>
    </section>
  )
}
export default FirstSection
