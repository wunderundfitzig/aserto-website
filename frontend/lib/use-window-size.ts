import { useState, useEffect } from 'react'

type Size = {
  width: number | undefined
  height: number | undefined
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function onResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // set inital value delayed so inital render matches server
    setTimeout(onResize, 0)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return windowSize
}
