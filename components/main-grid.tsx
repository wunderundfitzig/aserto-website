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
          grid-template-columns: 1fr 80px;
          grid-template-rows: minmax(0, auto) auto 1fr;
          grid-template-areas:
            'navigation logo'
            'main main'
            'main main';
          padding: 2em 3em 0 0;
          grid-gap: 1.5em 2em;
          max-width: 2000px;
        }

        @media ${minWidth(breakpoint.xl)} {
          .main-grid {
            grid-template-columns: 1fr 20vw 100px;
            grid-template-rows: auto 1fr;
            grid-template-areas:
              'main main logo'
              'main main navigation';
            padding: 4em 3em 0 0;
            grid-gap: 2em 3em;
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  )
}

export default MainGrid
