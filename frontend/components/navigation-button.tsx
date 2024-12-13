'use client'

import { breakpoint, minWidth } from 'lib/breakpoints'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { FunctionComponent, useRef } from 'react'
import { CloseIcon, HamburgerIcon } from './icons'

type Props = {
  navigationIsOpen: boolean
  onClick: () => void
}

const refs: (HTMLButtonElement | null)[] = []
const SCROLLED_NAV_OFFSET = 25

const NavigationButton: FunctionComponent<Props> = (props) => {
  const sectionRef = useRef<HTMLButtonElement>(null)
  refs[0] = sectionRef.current
  const sectionIndex = useIntersectionObserver(refs, {
    topOffset: () => SCROLLED_NAV_OFFSET,
  })

  return (
    <button
      ref={sectionRef}
      className='navigation-button'
      onClick={props.onClick}
    >
      {props.navigationIsOpen ? <CloseIcon /> : <HamburgerIcon />}
      <svg
        className={`background ${sectionIndex === null ? '' : 'scrolled'}`}
        viewBox='0 0 100 100'
      >
        <rect x={-1000} y={-200} width={100000} height={380} fill='white' />
      </svg>

      <style jsx>{`
        @keyframes move-fade {
          from {
            transform: scaleY(2);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

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
          opacity: 0;
          transition: opacity ease-in 0.25s;
          overflow: visible;
          pointer-events: none;
        }

        .background.scrolled {
          animation: move-fade ease-in 0.25s;
          opacity: 1;
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
