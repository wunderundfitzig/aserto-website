'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { breakpoint, minWidth } from 'lib/breakpoints'

import AsertoLogo from 'components/aserto-logo'
import Favicons from 'components/favicons'
import GlobalStyles, { PreloadFont } from 'components/global-styles'
import MainGrid from 'components/main-grid'
import Navigation from 'components/navigation'

type Props = {
  children: ReactNode
}
export default function RootLayout(props: Props) {
  const pathname = usePathname()
  const isIndexPage = pathname === '/'

  return (
    <html lang='de'>
      <head>
        <title>wunder & fitzig</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Favicons />
        <PreloadFont />
        <GlobalStyles />
      </head>
      <body>
        <MainGrid onFrontpage={isIndexPage}>
          <Link legacyBehavior href='/'>
            <a
              className={`logo-link ${
                isIndexPage ? 'on-frontpage' : undefined
              }`}
              title='aserto startpage'
            >
              <AsertoLogo />
            </a>
          </Link>
          <Navigation onFrontpage={isIndexPage} gridArea='navigation' />
          {props.children}
        </MainGrid>
        <style jsx>{`
          .logo-link {
            position: sticky;
            top: 1.5rem;
            grid-area: logo;
            max-width: 100%;
            width: 90px;
            min-width: 80px;
            justify-self: flex-end;
            z-index: 1100;
          }

          .logo-link.on-frontpage {
            position: static;
          }

          @media ${minWidth(breakpoint.l)} {
            .logo-link {
              position: static;
              z-index: 110;
              margin-top: 1em;
            }
          }
        `}</style>
      </body>
    </html>
  )
}
