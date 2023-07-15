import { FunctionComponent } from 'react'
import Image from 'next/image'
import * as colors from 'lib/colors'
import Slogan from 'components/slogan'
import { StraightLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'
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
        <Image
          loader={imageLoader}
          priority
          src={headerImage}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt=''
        />
      </div>
      <div className='line'>
        <StraightLine
          color={colors.categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={65}
        />
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
          padding-bottom: 150%;
          position: relative;
          margin-left: -2em;
        }

        .line {
          pointer-events: none;

          position: absolute;
          width: 1px;
          height: 100%;
          transform: translate(-130px, -230px);
          z-index: -1;
        }

        @media ${minWidth(breakpoint.sm)} {
          .karriere-header {
            grid-template-columns: minmax(250px, 20%) 1fr;
            grid-template-rows: auto auto 220px;
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
        }

        @media ${minWidth(breakpoint.l)} {
          .karriere-header {
            grid-template-columns: minmax(250px, 35%) 1fr;
          }
          .image {
            margin-top: -5em;
            height: calc(100% + 5em);
            width: calc(100%);
          }
        }

        @media ${minWidth(breakpoint.xl)} {
          .karriere-header {
            grid-gap: 0 4rem;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
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
