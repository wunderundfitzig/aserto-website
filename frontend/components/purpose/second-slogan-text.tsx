import { FunctionComponent } from 'react'
import { categoryColors } from 'lib/colors'
import Slogan from 'components/slogan'

const SecondSloganText: FunctionComponent = () => {
  return (
    <section className='slogan'>
      <Slogan emphasisColor={categoryColors.purpose}>
        {{
          sloagen: (
            <>
              aserto bringt <em>Menschen und Daten</em> zusammen, damit Fakten
              greifbar und Diskussionen zielführend werden. Denn evidenzbasierte
              Entscheidungen <em>sind die besseren Entscheidungen.</em>
            </>
          ),
        }}
      </Slogan>
      <style jsx>{`
        section {
          margin: 10rem 0;
          max-width: 55em;
        }
      `}</style>
    </section>
  )
}

export default SecondSloganText
