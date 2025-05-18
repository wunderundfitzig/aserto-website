import { FunctionComponent } from 'react'
import Image from 'next-export-optimize-images/image'
import * as colors from 'lib/colors'
import Slogan from 'components/slogan'
import { StraightLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import headerImage from 'public/images/karriere/karriere-image-1.jpg'

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
        <Image priority fill src={headerImage} alt='' />
      </div>
      <div className='line'>
        <StraightLine
          color={colors.categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <style jsx>{`
        .karriere-header {
          position: relative;
          display: grid;
          grid-template-columns: 80% 1fr;
          grid-template-areas:
            'title  title'
            'slogan slogan'
            'image  .';
        }

        h1 {
          grid-area: title;
          color: ${colors.categoryColors.karriere};
        }

        .slogan {
          grid-area: slogan;
          max-width: 18em;
          margin-bottom: 4em;
        }

        .image {
          position: relative;
          padding-bottom: 120%;
          grid-area: image;
          width: 100%;
        }

        .image :global(img) {
          object-fit: cover;
          object-position: center;
        }

        .line {
          pointer-events: none;
          position: absolute;
          width: 1px;
          height: 600px;
          left: 90px;
          top: -10px;
          z-index: -1;
        }

        @media ${minWidth(breakpoint.s)} {
          .line {
            left: 40px;
            top: 220px;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          h1 {
            padding-top: 1em;
          }

          .karriere-header {
            grid-template-columns: 40% 1fr;
            grid-template-rows: auto auto;
            grid-gap: 0 3rem;
            align-items: flex-start;
            grid-template-areas:
              'image title'
              'image slogan';
          }

          .image {
            padding-bottom: 150%;
          }

          .line {
            pointer-events: none;
            position: absolute;
            width: 1px;
            height: calc(100% + 280px);
            left: -150px;
            top: -170px;
            z-index: -1;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          h1 {
            padding-top: inherit;
          }
          .karriere-header {
            grid-template-rows: auto auto 220px;
            grid-template-columns: minmax(35%, 300px) 1fr;
            grid-template-areas:
              'image title'
              'image slogan'
              'image .';
            grid-gap: 0 4rem;
          }
          .slogan {
            max-width: 30em;
          }
          .image {
            margin-top: -5em;
            width: 100%;
            margin-left: 0;
          }
          .line {
            height: 780px;
            top: -150px;
            left: -300px;
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .image {
            width: 100%;
          }
          .line {
            top: -200px;
            left: -300px;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .image {
            width: 100%;
          }
          .line {
            left: -110px;
          }
        }
      `}</style>
    </header>
  )
}
export default KarriereHeader
