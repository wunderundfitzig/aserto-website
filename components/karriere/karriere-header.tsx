import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import Sloagan from 'components/sloagan'
import { EndlessLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

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
        <Image
          priority
          src='/karriere-placeholder-image.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center right'
        />
      </div>
      <div className='line line-1'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={28} />
      </div>
      <div className='line line-2'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={-20} />
      </div>
      <div className='line line-3'>
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
          padding-bottom: 160%;
          position: relative;
          margin-left: -2em;
        }

        .line {
          height: 100%;
          grid-area: lines;
          z-index: -1;
          transform: translate(10%, -8%);
        }

        .line-1 {
          z-index: 1;
        }

        @media (${minWidth(breakpoint.xs)}) {
          .line {
            transform: translate(0, -10%);
          }
        }

        @media (${minWidth(breakpoint.s)}) {
          .line {
            transform: translate(0, -5%);
          }
        }

        @media (${minWidth(breakpoint.sm)}) {
          .karriere-header {
            grid-template-columns: minmax(200px, 20%) 1fr;
            grid-template-rows: auto auto 200px;
            grid-gap: 0 2em;
            grid-template-areas:
              'image title'
              'image slogan'
              'image lines';
          }

          .image {
            height: 100%;
            padding-bottom: 0;
          }

          .line {
            transform: translate(0, 50px);
          }

          .line-1 {
            z-index: -1;
          }

          .line-3 {
            z-index: 1;
          }
        }

        @media (${minWidth(breakpoint.l)}) {
          .karriere-header {
            grid-template-columns: minmax(200px, 30%) 1fr;
          }
          .image {
            margin-top: -5em;
            height: calc(100% + 5em);
            width: calc(100% + 3em);
            margin-left: -3em;
          }
          .line {
            transform: translate(0, 70px);
          }
        }

        @media (${minWidth(breakpoint.xxl)}) {
          .image {
            width: 100%;
            margin-left: 0;
          }
        }
      `}</style>
    </header>
  )
}
export default KarriereHeader
