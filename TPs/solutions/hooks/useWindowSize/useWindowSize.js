import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerHeight, height: window.innerWidth })

  useEffect(() => {
    const onResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return [size.width, size.height]
}

export default useWindowSize
