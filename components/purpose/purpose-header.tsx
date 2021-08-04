import { FunctionComponent } from 'react'
import Image from 'next/image'
import { breakpoint } from 'lib/breakpoints'
import { categoryColors } from 'lib/colors'
import { LeftRightTurnCurve } from 'components/curves'

import purposeHeaderImage from 'public/images/purpose-header.jpg'

const PurposeHeader: FunctionComponent = () => {
  return (
    <header className='purpose-header'>
      <h1>Purpose</h1>
      <div className='header-image'>
        <Image
          src={purposeHeaderImage}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className='mobile-curve'>
          <LeftRightTurnCurve
            color={categoryColors.purpose}
            preserveAspectRatio='none'
          />
        </div>
      </div>

      <style jsx>{`
        header {
          position: relative;
        }

        .header-image {
          position: absolute;
          top: -2rem;
          left: -2rem;
          width: calc(100% + 4rem);
          padding-bottom: 100%;
          z-index: -1;
        }

        .mobile-curve {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }

        @media ${breakpoint.l} {
          .header-image {
            width: 100%;
            height: 600px;
            top: -9rem;
          }
        }
      `}</style>
    </header>
  )
}

export default PurposeHeader
