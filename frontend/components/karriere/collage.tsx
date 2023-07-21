import { FunctionComponent } from 'react'
import Image from 'next/image'
import { imageLoader } from 'lib/image-loader'
import { StraightLine } from 'components/curves'

import image1 from 'public/images/karriere/karriere-image-6.jpg'
import image2 from 'public/images/karriere/karriere-image-7.jpg'
import { categoryColors } from 'lib/colors'

const Collage: FunctionComponent = () => {
  return (
    <section className='collage'>
      <div className='left-image'>
        <Image loader={imageLoader} src={image1} alt='' />
      </div>
      <div className='right-image'>
        <Image loader={imageLoader} src={image2} alt='' />
      </div>
      <div className='line'>
        <StraightLine
          color={categoryColors.karriere}
          preserveAspectRatio={{ alignX: 'Min', alignY: 'Min', fit: 'slice' }}
          rotate={64}
        />
      </div>
      <style jsx>{`
        .collage {
          position: relative;
          display: grid;
          grid-template-columns: calc(50% + 4rem) 1fr;
          grid-gap: 4rem;
          grid-template-areas: 'left right';
          margin-top: 5rem;
        }

        .left-image {
          grid-area: left;
          z-index: 1;
        }

        .right-image {
          grid-area: right;
          margin-top: 10rem;
        }

        .line {
          position: absolute;
          top: -150px;
          left: -30px;
          height: calc(100% + 800px);
          width: 1px;
        }
      `}</style>
    </section>
  )
}

export default Collage
