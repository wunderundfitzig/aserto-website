import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { throttle } from 'lodash'

export function useScrolledPixels(
  ref: MutableRefObject<HTMLElement | null>
): number {
  const animationFrame = useRef<number | null>(null)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const updatePercentage = () => {
      if (ref.current === null) return
      const boundingClientRect = ref.current.getBoundingClientRect()
      const scrolledPixels = Math.trunc(boundingClientRect.top) * -1
      setPercentage(scrolledPixels)
    }

    const scrollHandler = () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current)
      }
      animationFrame.current = requestAnimationFrame(updatePercentage)
    }

    updatePercentage()
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [ref])

  return percentage
}
