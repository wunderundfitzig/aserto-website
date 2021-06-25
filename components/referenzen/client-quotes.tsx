import { FunctionComponent, useState } from 'react'
import Slider from 'components/slider'
import Quote from 'components/referenzen/quote'
import { ArrowIcon } from 'components/icons'

const quotes = [
  {
    author: 'Max Muster',
    quote: 'Wir brauchten eine Entscheidung, die wir fundiert umsetzen können',
  },
  {
    author: 'Tina Muster',
    quote: 'Quote 2',
  },
  {
    author: 'Paul Muster',
    quote: 'Quote 3',
  },
  {
    author: 'Laura Muster',
    quote: 'Quote 4',
  },
]

const ClientQuotes: FunctionComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const lastSlideIndex = quotes.length - 1
  const prevIndex = slideIndex > 0 ? slideIndex - 1 : lastSlideIndex
  const nextIndex = slideIndex < lastSlideIndex ? slideIndex + 1 : 0

  return (
    <section className='client-quotes'>
      <button
        className='slide-button prev'
        title='vorheriges kommentat'
        disabled={slideIndex <= 0}
        onClick={() => {
          setSlideIndex(prevIndex)
        }}
      >
        <ArrowIcon />
      </button>
      <Slider index={slideIndex} onNavigation={setSlideIndex}>
        {(index: number) => {
          const quote = quotes[index]
          if (quote === undefined) return null
          return (
            <Quote>
              {{
                author: <>Kunde: {quote.author}</>,
                quote: <>„{quote.quote}“</>,
              }}
            </Quote>
          )
        }}
      </Slider>
      <button
        className='slide-button next'
        title='nächstes kommentat'
        disabled={slideIndex >= lastSlideIndex}
        onClick={() => {
          setSlideIndex(nextIndex)
        }}
      >
        <ArrowIcon rotate={180} />
      </button>
      <style jsx>{`
        .client-quotes {
          display: grid;
          grid-template-columns: 20px 1fr 20px;
          margin: 10em 0 12em;
        }

        .slide-button {
          background-color: transparent;
          border: 0;
          cursor: pointer;
        }

        .slide-button:disabled {
          opacity: 0.2;
          cursor: default;
        }
      `}</style>
    </section>
  )
}

export default ClientQuotes
