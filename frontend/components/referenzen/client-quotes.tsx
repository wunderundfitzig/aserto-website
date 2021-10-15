import { FunctionComponent, useState } from 'react'
import Slider from 'components/slider'
import Quote from 'components/referenzen/quote'
import { ArrowIcon } from 'components/icons'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'

const quotes = [
  {
    author: 'DIE ZEIT, Nils von der Call, CMO',
    quote:
      'aserto begleitet seit vielen Jahren unsere erfolgreiche Entwicklung mit evidenzbasiertem Input, aus dem sich klare, praktische Handlungsempfehlungen ableiten lassen.',
  },
  {
    author:
      'Diakonie Deutschland, Matthias Sobolewski, CVD/Referatsleiter Aktuelles',
    quote:
      'Dank des gemeinsam mit aserto entwickelten Tools können wir auf kurzfristige Entwicklungen medienadäquat reagieren.',
  },
  {
    author:
      'HUK Coburg, Dr. Kerstin Bartels, Leiterin Unternehmenskommunikation',
    quote: 'aserto unterscheidet täglich das Wichtige vom Unwichtigen.',
  },
  {
    author:
      'Nordkirche, Matthias Birgden, Kommunikationsdirektor Organisationskommunikation',
    quote:
      'aserto begleitet die Modernisierung kirchlicher Kommunikation – kompetent und evidenzbasiert.',
  },
]

const ClientQuotes: FunctionComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className='client-quotes'>
      <button
        className='slide-button prev'
        title='vorheriges kommentat'
        onClick={() => {
          setSlideIndex(slideIndex - 1)
        }}
      >
        <ArrowIcon color={categoryColors.referenzen} />
      </button>
      <Slider index={slideIndex} onNavigation={setSlideIndex}>
        {(index: number) => {
          const length = quotes.length
          const wrappedIndex = (length + (index % length)) % length
          const quote = quotes[wrappedIndex]

          return (
            <Quote>
              {{
                author: <>{quote.author}</>,
                quote: <>„{quote.quote}“</>,
              }}
            </Quote>
          )
        }}
      </Slider>
      <button
        className='slide-button next'
        title='nächstes kommentat'
        onClick={() => {
          setSlideIndex(slideIndex + 1)
        }}
      >
        <ArrowIcon rotate={180} color={categoryColors.referenzen} />
      </button>
      <style jsx>{`
        .client-quotes {
          display: grid;
          grid-template-columns: 15px 1fr 15px;
          grid-gap: 0 1rem;
          margin: 10em -1rem 12em;
        }

        .slide-button {
          background-color: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }

        .slide-button:disabled {
          opacity: 0.2;
          cursor: default;
        }

        @media ${minWidth(breakpoint.s)} {
          .client-quotes {
            margin: 10em 0 12em;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientQuotes
