import React, { useState, useEffect, useRef } from 'react'
import Menu from '../Menu'

const Route2 = () => {
  const [title, setTitle] = useState('Loading Route 2...')
  const timeout = useRef(null)

  useEffect(() => {
    getTitle()
    return () => {
      clearTimeout(timeout.current)
      console.log('Route2 will unmount')
    }
  }, [])

  const getTitle = () => {
    timeout.current = setTimeout(() => {
      console.log('route2 - set title')
      setTitle('Route2')
    }, 2000)
  }
  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Route2
