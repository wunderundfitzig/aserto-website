import { useState, useEffect, MutableRefObject } from 'react'

export function useScrolledPixels(
  ref: MutableRefObject<HTMLElement | null>
): number {
  const [scrolledPixels, setScrolledPixels] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      if (ref.current === null) return
      const boundingClientRect = ref.current.getBoundingClientRect()
      const _scrolledPixels = boundingClientRect.top * -1
      setScrolledPixels(_scrolledPixels)
    }

    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [ref])

  return scrolledPixels
}
