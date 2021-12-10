import { FunctionComponent, useState } from 'react'
import Slider from 'components/slider'
import Quote from 'components/referenzen/quote'
import { ArrowIcon } from 'components/icons'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { ClientQuote } from 'lib/types'

type Props = {
  quotes: ClientQuote[]
}
const ClientQuotes: FunctionComponent<Props> = (props) => {
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
          const length = props.quotes.length
          const wrappedIndex = (length + (index % length)) % length
          const quote = props.quotes[wrappedIndex]

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
