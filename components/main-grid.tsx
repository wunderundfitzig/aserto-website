import { breakpoint, minWidth } from 'lib/breakpoints'
import { FunctionComponent } from 'react'

const MainGrid: FunctionComponent = (props) => {
  return (
    <div className='main-grid'>
      {props.children}
      <style jsx>{`
        .main-grid {
          display: grid;
          min-height: 100vh;
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

        @media ${minWidth(breakpoint.l)} {
          .main-grid {
            grid-template-columns:
              minmax(0, 1fr) minmax(0, 700px) minmax(20vw, 20vw)
              100px minmax(0, 1fr);
            grid-template-rows: auto 1fr minmax(0, auto);
            grid-template-areas:
              '. .      .      logo       .'
              '. main   main   navigation .'
              '. footer footer .          .';
            padding: 4em 0 0;
            grid-gap: 2em 3em;
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  )
}

export default MainGrid
