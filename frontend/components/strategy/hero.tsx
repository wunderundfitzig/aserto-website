'use client'

import Dots, { DotMode } from 'components/dots'
import Slogan from 'components/slogan'
import * as colors from 'lib/colors'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { FunctionComponent, useRef } from 'react'

const MODES: DotMode[] = ['move', 'attract', 'center']

const StrategyHero: FunctionComponent = () => {
  const sectionRefs = useRef<Array<HTMLElement | null>>([])

  const activeIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })

  const mode = MODES[activeIndex ?? 0]

  return (
    <main>
      <div className='fixed inset-0 -z-10'>
        <Dots mode={mode} />
      </div>

      <section
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
        className='h-screen flex flex-col justify-start'
      >
        <header>
          <h1
            className='bg-white/50'
            style={{ color: colors.categoryColors.leistungen }}
          >
            Media Concepts & Strategy
          </h1>
          <div className='inline-block bg-white/50'>
            <Slogan emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    Wie entseht <em>Orientierung</em>
                    <br /> in einer <em>Medienwelt</em>
                    <br />
                    im <em>permanenten Wandel.</em>
                  </>
                ),
              }}
            </Slogan>
          </div>
        </header>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
        className='h-screen flex flex-col justify-center'
      >
        <p>Attract placeholder</p>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
        className='h-screen flex flex-col justify-center'
      >
        <p>Center placeholder</p>
      </section>
    </main>
  )
}

export default StrategyHero
