import Image from 'next-export-optimize-images/image'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import Slogan from 'components/slogan'
import { TriangleLine } from 'components/curves'
import HeaderBackground from 'components/header-background'
import image from 'public/images/team/team-image.jpg'

type Props = {
  title: string
}
const TeamHeader: FunctionComponent<Props> = (props) => {
  return (
    <header className='team-header'>
      <HeaderBackground
        color={colors.backgroundBlue}
        opacity={0.5}
        gridArea='title / title / image-1 / image-1'
      />
      <h1>{props.title}</h1>
      <div className='sloagen-wrapper'>
        <Slogan emphasisColor={colors.lightBlue}>
          {{
            sloagen: (
              <>
                Wir erarbeiten <em>Ergebnisse mit Relevanz</em> und beraten mit{' '}
                <em>Substanz.</em>
              </>
            ),
          }}
        </Slogan>
      </div>
      <div className='image'>
        <Image priority src={image} alt='' sizes='100vw' />
      </div>
      <div className='key-visual'>
        <TriangleLine animate color='white' preserveAspectRatio='none' />
      </div>
      <style jsx>{`
        .team-header {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          grid-template-areas:
            'title'
            'slogan'
            'image-1'
            'image-2';
        }

        h1 {
          color: ${colors.categoryColors.team};
          grid-area: title;
        }

        .sloagen-wrapper {
          grid-area: slogan;
          max-width: 700px;
          z-index: 1;
        }

        .image {
          grid-area: image-1 / image-1 / image-2 / image-2;
          width: 100%;
          margin-top: 2em;
        }

        .image :global(img) {
          width: 100%;
          height: auto;
        }

        .key-visual {
          grid-area: title / title / slogan / slogan;
          position: absolute;
          transform: translateX(7em) translateY(4em);
          width: calc(100% - 6em);
          height: 100%;
        }

        @media ${minWidth(breakpoint.xs)} {
          .key-visual {
            height: 140%;
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .sloagen-wrapper {
            width: 80%;
          }

          .image {
            width: 80%;
          }
          .key-visual {
            grid-area: title / title / image-2 / image-2;
            height: 100%;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .image {
            margin-top: 4em;
          }
        }
      `}</style>
    </header>
  )
}

export default TeamHeader
