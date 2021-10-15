import { useRef, useState } from 'react'

export function useDelayed<T>(liveValue: T, initalValue: T): T {
  const wasCalledBefore = useRef(false)
  const timeoutId = useRef<NodeJS.Timer | null>(null)
  const [value, setValue] = useState(initalValue)

  if (wasCalledBefore.current) {
    if (timeoutId.current) clearTimeout(timeoutId.current)
    return liveValue
  }

  wasCalledBefore.current = true
  timeoutId.current = setTimeout(() => {
    setValue(liveValue)
  }, 0)
  return value
}
