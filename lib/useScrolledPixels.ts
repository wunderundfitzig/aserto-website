import { useState, useEffect, MutableRefObject } from 'react'
import { throttle } from 'lodash'

export function useScrolledPixels(
  ref: MutableRefObject<HTMLElement | null>
): number {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const scrollHandler = throttle(() => {
      if (ref.current === null) return
      const boundingClientRect = ref.current.getBoundingClientRect()
      const scrolledPixels =
        Math.trunc(boundingClientRect.top - window.innerHeight / 2) * -1
      setPercentage(scrolledPixels)
    }, 10)

    scrollHandler()

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [ref])

  return percentage
}
