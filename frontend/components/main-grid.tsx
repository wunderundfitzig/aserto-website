import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  onFrontpage?: boolean
  children: ReactNode
}
const MainGrid: FunctionComponent<Props> = (props) => {
  return (
    <div className='main-grid'>
      {props.children}
      <style jsx>{`
        .main-grid {
          display: grid;
          min-height: ${props.onFrontpage ? '600px' : '100vh'};
          grid-template-columns: 0 1fr 80px 0;
          grid-template-rows: minmax(0, auto) auto 1fr auto;
          grid-template-areas:
            '. navigation logo   .'
            '. main       main   .'
            '. main       main   .'
            '. footer     footer .';
          padding: 2em 0 0;
          grid-gap: 1.5em 2em;
        }

        @media ${minWidth(breakpoint.xs)} {
          .main-grid {
            grid-template-columns: 0 1fr 10vw 0;
            height: ${props.onFrontpage ? '100vh' : 'auto'};
          }
        }

        @media ${minWidth(breakpoint.s)} {
          .main-grid {
            grid-template-columns: 0 1fr 20vw 0;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .main-grid {
            grid-template-columns: 0 1fr 25vw 0;
          }
        }

        @media ${minWidth(breakpoint.l)} {
          .main-grid {
            grid-template-columns:
              minmax(0, 1fr) minmax(0, 780px) minmax(17vw, 17vw)
              100px minmax(0, 1fr);
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
              '. .      .      logo         .'
              '. main   main   navigation   .'
              '. footer footer bottom-right .';
            padding: 4em 0 0;
            grid-gap: 2em 3em;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .main-grid {
            grid-template-columns:
              minmax(0, 1fr) minmax(0, 780px) minmax(204px, 204px)
              100px minmax(0, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default MainGrid
