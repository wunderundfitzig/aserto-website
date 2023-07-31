import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import { imageLoader } from 'lib/image-loader'

import image from 'public/images/karriere/karriere-image-2.jpg'
import { StraightLine } from 'components/curves'
import Statement from 'components/statement'
import { breakpoint, minWidth } from 'lib/breakpoints'

const WasUnsWichtigIst: FunctionComponent = () => {
  return (
    <section className='was-uns-wichtig-ist'>
      <div className='text'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Was uns wichtig ist</h3>,
            content: (
              <>
                <p>
                  Wir denken und handeln evidenzbasiert, weil daraus die besten
                  richtungsweisenden Entscheidungen entstehen.
                </p>
                <p>
                  Wir arbeiten auf Augenhöhe zusammen, haben ein offenes Ohr
                  füreinander und finden gemeinsam Lösungen.
                </p>
                <p>
                  Wir agieren nachhaltig, schonen ökologische Ressourcen,
                  pflegen einen fairen Umgang und denken stets langfristig.
                </p>
                <p>
                  Wir entwickeln uns ständig weiter – unsere Kompetenzen, unsere
                  Persönlichkeiten, unser Urteilsvermögen.
                </p>
              </>
            ),
          }}
        </Statement>
      </div>
      <div className='line'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <div className='image'>
        <Image loader={imageLoader} src={image} alt='' />
      </div>

      <style jsx>{`
        .was-uns-wichtig-ist {
          position: relative;
          display: grid;
          grid-template-columns: 55% 1fr;
          grid-gap: 0 4rem;
          grid-template-areas: 'text image';
          justify-content: space-between;
          margin-top: -220px;
        }

        .text {
          grid-area: text;
          margin-top: 320px;
          max-width: 25em;
        }

        .image {
          grid-area: image;
          margin-top: 80px;
          width: calc(100% + 195px);
        }

        .line {
          pointer-events: none;
          position: absolute;
          width: 1px;
          height: calc(100% + 6rem);
          left: 16%;
          top: 30px;
          z-index: 1;
        }
        @media ${minWidth(breakpoint.l)} {
          .image {
            width: calc(100% + 100px + 6em);
          }
          .line {
            left: 18%;
            top: 20px;
          }
        }
        @media ${minWidth(breakpoint.xl)} {
          .was-uns-wichtig-ist {
            grid-template-columns: 50% 45%;
          }
          .image {
            width: calc(100% + 195px);
          }
          .line {
            left: 16%;
            top: -30px;
          }
        }
        @media ${minWidth(breakpoint.xxl)} {
          .was-uns-wichtig-ist {
            grid-template-columns: 40% 45%;
          }
          .image {
            width: calc(100% + 195px);
          }
          .line {
            left: 220px;
            top: -30px;
          }
        }
      `}</style>
    </section>
  )
}

export default WasUnsWichtigIst
