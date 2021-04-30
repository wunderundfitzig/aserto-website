import { useState, useEffect, MutableRefObject } from 'react'
import { throttle } from 'lodash'

export function useScrollPercentage(
  ref: MutableRefObject<HTMLElement | null>
): number {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const scrollHandler = throttle(() => {
      if (ref.current === null) return
      const boundingClientRect = ref.current.getBoundingClientRect()
      const top = boundingClientRect.top - window.innerHeight
      const percentage = top > 0 ? 0 : (top * -1) / boundingClientRect.height
      setPercentage(percentage)
    }, 10)

    scrollHandler()

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [ref])

  return percentage
}
