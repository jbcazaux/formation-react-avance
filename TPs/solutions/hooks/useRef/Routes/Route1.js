import React, { useState, useEffect, useRef } from 'react'
import Menu from '../Menu'

const Route1 = () => {
  const [title, setTitle] = useState('Loading Route1...')
  const timeout = useRef(null)

  useEffect(() => {
    getTitle()
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const getTitle = () => {
    timeout.current = setTimeout(() => {
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
