import HeaderBackground from 'components/header-background'
import * as colors from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { CheckmarkLine } from 'components/curves'

type Props = {
  title: string
}
export default function NachhaltigkeitHeader(props: Props) {
  return (
    <header className='nachhaltigkeit-header'>
      <HeaderBackground color={colors.backgroundGrey} opacity={0.5} />
      <div className='line'>
        <CheckmarkLine color={colors.grey} />
      </div>
      <div className='inner'>
        <h1>{props.title}</h1>
      </div>

      <style jsx>{`
        .nachhaltigkeit-header {
          position: relative;
          display: grid;
          grid-template-areas: 'header';
          min-height: 400px;
        }

        .line {
          display: none;
        }

        .inner {
          grid-area: header;
          padding-bottom: 6em;
        }

        @media ${minWidth(breakpoint.m)} {
          .line {
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            z-index: -1;
          }
        }
      `}</style>
    </header>
  )
}
