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
