import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  useEffect(() => {
    console.log('app did mount')
  }, [])
  return <Child />
}

const Child = () => {
  useEffect(() => {
    console.log('Child did mount, call API.log() !')
    return () => {
      console.log('Child will unmount')
    }
  }, [])

  return <>Child component</>
}

const Child2 = () => {
  const hasLogged = useRef(false)

  useEffect(() => {
    console.log('Child did mount')
    if (hasLogged.current === false) {
      hasLogged.current = true
      console.log('Call API.log() !')
    }
    return () => {
      console.log('Child will unmount')
    }
  }, [])

  console.log({ hasLogged: hasLogged.current })
  return <>Child component </>
}

export default App
