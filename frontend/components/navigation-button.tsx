import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'
import { CloseIcon, HamburgerIcon } from './icons'

type Props = {
  navigationIsOpen: boolean
  onClick: () => void
}

const NavigationButton: FunctionComponent<Props> = (props) => {
  return (
    <button className='navigation-button' onClick={props.onClick}>
      {props.navigationIsOpen ? <CloseIcon /> : <HamburgerIcon />}
      <svg className='background' viewBox='0 0 100 100'>
        <rect x={-1000} y={-100} width={100000} height={280} fill='white' />
      </svg>

      <style jsx>{`
        .navigation-button {
          position: relative;
          background: none;
          border: none;
          width: 20px;
          padding: 0;
          cursor: pointer;
          z-index: 1;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 1.5rem;
          height: 1.5rem;
          z-index: -1;
          overflow: visible;
          pointer-events: none;
        }

        @media ${minWidth(breakpoint.l)} {
          .navigation-button {
            display: none;
          }
        }
      `}</style>
    </button>
  )
}

export default NavigationButton
