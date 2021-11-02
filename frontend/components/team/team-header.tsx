import Image from 'next/image'
import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Slogan from 'components/slogan'
import { TriangleLine } from 'components/curves'
import { breakpoint, minWidth } from 'lib/breakpoints'
import HeaderBackground from 'components/header-background'
import { imageLoader } from 'lib/image-loader'

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
                <em>Substanz</em>.
              </>
            ),
          }}
        </Slogan>
      </div>
      <div className='image'>
        <Image
          layout='responsive'
          loader={imageLoader}
          priority
          src='/images/team/team-image.jpg'
          width='1200'
          height='857'
          alt=''
        />
      </div>
      <div className='key-visual'>
        <TriangleLine color='white' preserveAspectRatio='none' />
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

        .key-visual {
          grid-area: title / title / slogan / slogan;
          position: absolute;
          transform: translateX(6em) translateY(3em);
          width: calc(100% - 4em);
          height: 120%;
        }

        @media ${minWidth(breakpoint.xs)} {
          .key-visual {
            height: 145%;
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
