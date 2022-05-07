import React, { useState, useEffect, useRef } from 'react'
import Menu from '../Menu'

const Route1 = () => {
  const [title, setTitle] = useState('Loading Route1...')
  const timeout = useRef(null)

  useEffect(() => {
    getTitle()
    return () => {
      clearTimeout(timeout.current)
      console.log('Route1 will unmount')
    }
  }, [])

  const getTitle = () => {
    timeout.current = setTimeout(() => {
      console.log('route1 - set title')
      setTitle('Route1')
    }, 2000)
  }

  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Route1
