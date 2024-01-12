import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'

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
        <Image fill src={image} alt='' />
      </div>

      <style jsx>{`
        .was-uns-wichtig-ist {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 0 4rem;
          grid-template-areas:
            'image'
            'text';
          align-items: flex-start;
        }

        .text {
          grid-area: text;
          max-width: 20em;
        }

        .image {
          position: relative;
          grid-area: image;
          width: calc(80% + 2em);
          margin: -4em 0em 3em 20%;
          padding-bottom: 60%;
        }

        .image :global(img) {
          object-fit: cover;
          object-postion: center;
        }

        .line {
          pointer-events: none;
          position: absolute;
          width: 1px;
          height: 200%;
          right: 500px;
          top: -180px;
          z-index: 0;
        }
        @media ${minWidth(breakpoint.xs)} {
          .text {
            margin-top: 1em;
          }
          .line {
            right: 580px;
          }
        }
        @media ${minWidth(breakpoint.s)} {
          .text {
            margin-top: 2em;
          }
          .line {
            top: -200px;
            right: 700px;
          }
        }
        @media ${minWidth(breakpoint.sm)} {
          .was-uns-wichtig-ist {
            grid-template-columns: minmax(50%, 1fr) 1fr;
            grid-gap: 0 3rem;
            grid-template-areas: 'text image';
            justify-content: space-between;
            margin-top: 3em;
          }
          .image {
            width: calc(100% + 2em);
            margin: 0;
            padding-bottom: 150%;
            margin-top: 0;
          }
          .line {
            height: 800px;
            top: -120px;
            left: 23%;
          }
        }
        @media ${minWidth(breakpoint.ml)} {
          .line {
            height: 800px;
            top: -120px;
            left: 30%;
          }
        }
        @media ${minWidth(breakpoint.l)} {
          .was-uns-wichtig-ist {
            grid-template-columns: 55% 1fr;
            grid-gap: 0 4rem;
            grid-template-areas: 'text image';
            justify-content: space-between;
            margin-top: -220px;
          }
          .text {
            margin-top: 320px;
          }
          .image {
            margin-top: 80px;
            width: calc(100% + 100px + 6em);
            padding-bottom: 95%;
          }
          .line {
            height: calc(100% + 6rem);
            left: 18%;
            top: 20px;
            z-index: 1;
          }
        }
        @media ${minWidth(breakpoint.xl)} {
          .was-uns-wichtig-ist {
            grid-template-columns: 50% 45%;
          }
          .image {
            width: calc(100% + 172px);
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
            left: 180px;
            top: -30px;
          }
        }
      `}</style>
    </section>
  )
}

export default WasUnsWichtigIst
