import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import { imageLoader } from 'lib/image-loader'

import image from 'public/images/karriere/karriere-image-2.jpg'
import { StraightLine } from 'components/curves'
import Statement from 'components/statement'

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
                  Wir entwickeln uns ständig weiter unsere Kompetenzen, unsere
                  Persönlichkeit, unser Urteilsvermögen.
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
          grid-template-columns: 40% 45%;
          grid-gap: 0 4rem;
          grid-template-areas: 'text image';
          justify-content: space-between;
          margin-top: -220px;
        }

        .text {
          grid-area: text;
          margin-top: 320px;
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
          transform: translate(220px, -30px);
          z-index: 1;
        }
      `}</style>
    </section>
  )
}

export default WasUnsWichtigIst
