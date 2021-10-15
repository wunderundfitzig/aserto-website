import { useRef, useLayoutEffect, useEffect, FunctionComponent } from 'react'

// hack to silence warnig that I can't use layout effect for server rendering
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Props = {
  index: number
  children: (index: number) => React.ReactElement | null
  /** called after user did navigate forward or backward */
  onNavigation: (newIndex: number) => void
}

/**
 * Provides functions for navigating
 * backward and forward throgh content (on mobile with swipe gesture).
 */
const Slider: FunctionComponent<Props> = (props) => {
  const internalIndex = useRef<number>(props.index)
  const slideTrack = useRef<HTMLDivElement>(null)
  const touchStartPosition = useRef(null as React.Touch | null)
  const getSlide = props.children
  const previousSlide = getSlide(props.index - 1)
  const currentSlide = getSlide(props.index)
  const nextSlide = getSlide(props.index + 1)

  const setOffset = (offset: string | number, { animated = false } = {}) => {
    if (slideTrack.current === null) return
    if (typeof offset === 'number') offset = `${offset}px`

    slideTrack.current.style.transition = animated ? 'transform 0.5s' : ''
    slideTrack.current.style.transform = `translateX(${offset})`
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartPosition.current = e.changedTouches[0]
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartPosition.current) return

    const diffX =
      (touchStartPosition.current.clientX - e.changedTouches[0].clientX) * -1
    const diffY =
      touchStartPosition.current.clientY - e.changedTouches[0].clientY

    if (Math.abs(diffX) < 20 || Math.abs(diffY) > Math.abs(diffX)) return

    setOffset(diffX)
    // e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartPosition.current || !slideTrack.current) return

    const diff =
      touchStartPosition.current.clientX - e.changedTouches[0].clientX
    const isForwardNavigation = diff > 0
    touchStartPosition.current = null

    if (Math.abs(diff) < 100) return setOffset(0, { animated: true })

    // cancel transition when there is no slide to go to
    if (
      (!previousSlide && !isForwardNavigation) ||
      (!nextSlide && isForwardNavigation)
    ) {
      return setOffset(0, { animated: true })
    }

    const { width } = slideTrack.current.getBoundingClientRect()
    const offset = isForwardNavigation ? width * -1 : width
    setOffset(offset, { animated: true })

    setTimeout(() => {
      if (isForwardNavigation) {
        internalIndex.current = props.index + 1
        props.onNavigation(props.index + 1)
      } else {
        internalIndex.current = props.index - 1
        props.onNavigation(props.index - 1)
      }
    }, 500)
  }

  const handleTouchCancel = () => {
    touchStartPosition.current = null
    setOffset(0)
  }

  useIsomorphicLayoutEffect(() => {
    if (props.index === internalIndex.current) return setOffset(0)

    const offset = props.index > internalIndex.current ? '100%' : '-100%'
    setOffset(offset)
    setTimeout(() => {
      setOffset(0, { animated: true })
      internalIndex.current = props.index
    }, 50)
  }, [props.index])

  return (
    <div
      className='slider'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className='slider-track' ref={slideTrack}>
        <div className='slide' aria-hidden='true'>
          {previousSlide}
        </div>
        <div className='slide'>{currentSlide}</div>
        <div className='slide' aria-hidden='true'>
          {nextSlide}
        </div>
      </div>
      <style jsx>{`
        .slider {
          display: grid;
          overflow: hidden;
          width: 100%;
        }

        .slider-track {
          position: relative;
          left: -100%;
          display: flex;
          width: 100%;
          min-width: 100%;
        }

        .slide {
          width: 100%;
          max-width: 100%;
          min-width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Slider
