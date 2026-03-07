import Dots from 'components/dots'
import Metadata from 'components/metadata'
import Slogan from 'components/slogan'
import * as colors from 'lib/colors'

export default function Leistungen() {
  return (
    <>
      <article style={{ gridArea: 'main' }}>
        <Metadata
          pageMeta={{
            title: 'Media Concept & Strategy',
            seotitle: '',
            seodescription: '',
          }}
          slug='/strategy'
        />
        <main className='relative'>
          <div className='fixed inset-0 -z-10'>
            <Dots />
          </div>
          <header>
            <h1 style={{ color: colors.categoryColors.leistungen }}>
              Media Concepts & Strategy
            </h1>
            <Slogan emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    Wie entseht <em>Orientierung</em>
                    <br /> in einer <em>Medienwelt</em>
                    <br />
                    im <em>permanenten Wandel.</em>
                  </>
                ),
              }}
            </Slogan>
          </header>
        </main>
      </article>
    </>
  )
}
