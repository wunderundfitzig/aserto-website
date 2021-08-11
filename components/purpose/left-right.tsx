import { FunctionComponent, useRef } from 'react'
import * as colors from 'lib/colors'
import { useScrolledPixels } from 'lib/use-scrolled-pixels'
import { TriangleLine } from 'components/curves'

const DatenUndMenschen: FunctionComponent = () => {
  const wrapperRef = useRef(null)
  const scrolledPixels = useScrolledPixels(wrapperRef)

  return (
    <section ref={wrapperRef} className='daten-und-menschen'>
      <div className='inner'>
        <div className='daten'></div>
        <div className='menschen'></div>
        <div className='line'>
          <TriangleLine color='blue' preserveAspectRatio='none' />
        </div>
      </div>

      <style jsx>{`
        .daten-und-menschen {
          overflow: hidden;
        }

        .inner {
          width: 200%;
          height: 3000px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 'daten menschen';
          transition: transform 1s;
          transform: translateX(${scrolledPixels > 1000 ? '-50%' : '0'});
        }

        .menschen {
          background-color: ${colors.beige};
          grid-area: menschen;
        }

        .daten {
          grid-area: daten;
        }

        .line {
          grid-area: 1 / 1 / 2 / 2;
          width: 200%;
        }
      `}</style>
    </section>
  )
}

export default DatenUndMenschen
