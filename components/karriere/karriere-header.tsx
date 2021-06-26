import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { EndlessLine } from 'components/curves'

const KarriereHeader: FunctionComponent = () => {
  return (
    <header className='karriere-header'>
      <h1>Karriere</h1>
      <div className='slogan'>
        <Sloagan emphasisColor={colors.categoryColors.karriere}>
          {{
            sloagen: (
              <>
                Wir sind <em>menschlich, verbindlich und relevant.</em>
              </>
            ),
          }}
        </Sloagan>
      </div>
      <div className='image'>
        <Image src='/karriere-placeholder-image.jpg' width={746} height={979} />
      </div>
      <div className='line line-1'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={10} />
      </div>
      <style jsx>{`
        .karriere-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            'title title'
            'slogan slogan'
            'image lines';
        }

        h1 {
          grid-area: title;
          color: ${colors.categoryColors.karriere};
        }

        .slogan {
          grid-area: slogan;
          max-width: 30em;
          margin-bottom: 4em;
        }

        .image {
          grid-area: image;
          width: calc(100% + 2em);
          margin-left: -2em;
        }

        .line {
          height: 100%;
        }

        .line-1 {
          grid-area: lines;
          z-index: 1;
        }
      `}</style>
    </header>
  )
}
export default KarriereHeader
