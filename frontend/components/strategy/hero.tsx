'use client'

import Dots, { DotMode } from 'components/dots'
import Slogan from 'components/slogan'
import * as colors from 'lib/colors'
import { useIntersectionObserver } from 'lib/use-intersection-observer'
import { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'

const MODES: DotMode[] = ['move', 'move', 'filter', 'attract', 'center']

const StrategyHero: FunctionComponent = () => {
  const sectionRefs = useRef<Array<HTMLElement | null>>([])
  const titleRef = useRef<HTMLDivElement>(null)
  const sloganRef0 = useRef<HTMLDivElement>(null)
  const sloganRef1 = useRef<HTMLDivElement>(null)
  const sloganRef2 = useRef<HTMLDivElement>(null)
  const sloganRef3 = useRef<HTMLDivElement>(null)
  const sloganRefs = useMemo(
    () => [titleRef, sloganRef0, sloganRef1, sloganRef2, sloganRef3],
    [],
  )
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(true)
    window.addEventListener('scroll', onScroll, { once: true, passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeIndex = useIntersectionObserver(sectionRefs.current, {
    topOffset: (height) => height * 0.5,
  })

  const mode = MODES[activeIndex ?? 0]

  const handleSloganClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.4, behavior: 'smooth' })
    setHasScrolled(true)
  }

  return (
    <main>
      <div className='fixed inset-x-0 top-0 h-lvh -z-10'>
        <Dots mode={mode} exclusionRefs={sloganRefs} />
      </div>

      <div>
        <div
          ref={(el) => {
            sectionRefs.current[0] = el
          }}
          className='flex flex-col justify-start items-start min-h-[calc(100lvh-50rem)] l:min-h-[calc(100lvh-40rem)]'
        >
          <header>
            <h1
              ref={titleRef}
              className='max-sm:bg-white/80'
              style={{ color: colors.categoryColors.leistungen }}
            >
              Media Concepts & Strategy
            </h1>
            <div ref={sloganRef0} className='max-sm:bg-white/80'>
              <Slogan emphasisColor={colors.green}>
                {{
                  sloagen: (
                    <>
                      Wie entseht <em>Orientierung</em>
                      <br /> in einer <em>Medienwelt</em>
                      <br />
                      im <em>permanenten Wandel?</em>
                    </>
                  ),
                }}
              </Slogan>
            </div>
          </header>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[1] = el
          }}
          className='h-[50vh] flex flex-col justify-center items-end'
        >
          <div
            ref={sloganRef1}
            className={`slogan-hint ${
              hasScrolled ? 'scrolled' : ''
            } max-sm:bg-white/80`}
            onClick={handleSloganClick}
          >
            <Slogan small rightAligned emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    In einer hochfrequenten
                    <br />
                    <em>Nachrichtenwelt…</em>
                  </>
                ),
              }}
            </Slogan>
            <style jsx>{`
              .slogan-hint {
                cursor: pointer;
                animation: nudge 3s ease-in-out infinite;
              }

              .slogan-hint.scrolled {
                animation: none;
              }

              @keyframes nudge {
                0%,
                50%,
                100% {
                  transform: translateY(0);
                }
                90% {
                  transform: translateY(-30px);
                }
              }
            `}</style>
          </div>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[2] = el
          }}
          className='h-[50vh] flex flex-col justify-center items-end'
        >
          <div ref={sloganRef2} className='max-sm:bg-white/80'>
            <Slogan small rightAligned emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    <em>identifizieren</em>
                    <br /> wir prägende Stimmen,
                  </>
                ),
              }}
            </Slogan>
          </div>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[3] = el
          }}
          className='h-[50vh] flex flex-col justify-center items-end'
        >
          <div ref={sloganRef3} className='max-sm:bg-white/80'>
            <Slogan small rightAligned emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    arbeiten wir <br />
                    <em>relevante Muster</em> heraus
                  </>
                ),
              }}
            </Slogan>
          </div>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[4] = el
          }}
          className='h-screen flex flex-col justify-center items-start'
        >
          <div>
            <Slogan small emphasisColor={colors.green}>
              {{
                sloagen: (
                  <>
                    und schaffen dadurch <br />
                    Handlungs
                  </>
                ),
              }}
            </Slogan>
          </div>
        </div>
      </div>
    </main>
  )
}

export default StrategyHero
