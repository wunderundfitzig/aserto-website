import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import Slogan from 'components/slogan'
import { EndlessLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'

const KarriereHeader: FunctionComponent = () => {
  return (
    <header className='karriere-header'>
      <h1>Karriere</h1>
      <div className='slogan'>
        <Slogan emphasisColor={colors.categoryColors.karriere}>
          {{
            sloagen: (
              <>
                Wir sind <em>menschlich, verbindlich</em> und <em>relevant.</em>
              </>
            ),
          }}
        </Slogan>
      </div>
      <div className='image'>
        <Image
          priority
          src='/karriere-placeholder-image.jpg'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt=''
        />
      </div>
      <div className='line line-1'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={20} />
      </div>
      <div className='line line-2'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={-25} />
      </div>
      <div className='line line-3'>
        <EndlessLine color={colors.categoryColors.karriere} rotate={5} />
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
          transform: translate(10%, -5%) rotate(7deg);
        }

        .line-1 {
          z-index: 1;
        }

        @media ${minWidth(breakpoint.xs)} {
          .line {
            transform: translate(0, -5%) rotate(5deg);
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .line {
            transform: translate(0, 0) rotate(5deg);
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .karriere-header {
            grid-template-columns: minmax(250px, 20%) 1fr;
            grid-template-rows: auto auto 200px;
            grid-gap: 0 2rem;
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
            transform: translate(0, -20px);
          }

          .line-1 {
            z-index: -1;
          }

          .line-3 {
            z-index: 1;
          }
        }

        @media ${minWidth(breakpoint.ml)} {
          .line {
            transform: translate(0, 10px);
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .karriere-header {
            grid-template-columns: minmax(250px, 40%) 1fr;
          }
          .image {
            margin-top: -5em;
            height: calc(100% + 5em);
            width: calc(100% + 3em);
            margin-left: -3em;
          }
          .line {
            transform: translate(150px, 30px);
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .karriere-header {
            grid-template-columns: minmax(250px, 35%) 1fr;
            grid-gap: 0 4rem;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .image {
            width: 100%;
            margin-left: 0;
          }

          .line {
            transform: translate(150px, 70px);
          }
        }
      `}</style>
    </header>
  )
}
export default KarriereHeader
