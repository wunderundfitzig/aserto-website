import Motto from 'components/motto'
import { categoryColors } from 'lib/colors'
import { FunctionComponent } from 'react'

const Quotes: FunctionComponent = () => {
  return (
    <section className='quotes'>
      <figure>
        <Motto color={categoryColors.purpose} align='right'>
          {{
            roofline: <figcaption>Daniel Keys Moran:</figcaption>,
            title: (
              <blockquote>
                You can have data without information, but you cannot have
                information without data.
              </blockquote>
            ),
          }}
        </Motto>
      </figure>

      <h2>Was braucht es, um zukunftsweisende Entscheidungen zu treffen?</h2>
      <figure>
        <Motto color={categoryColors.purpose}>
          {{
            roofline: <figcaption>Hans Rosling:</figcaption>,
            title: (
              <blockquote>
                The world cannot be understood without numbers. But the world
                cannot be understood with numbers alone.
              </blockquote>
            ),
          }}
        </Motto>
      </figure>
      <style jsx>{`
        figure,
        blockquote {
          margin: 0;
          padding: 0;
        }

        blockquote::before {
          content: '“';
        }

        blockquote::after {
          content: '”';
        }
      `}</style>
    </section>
  )
}

export default Quotes
