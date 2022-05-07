import React, { useState, useEffect, useRef } from 'react'
import Menu from '../Menu'

const Route1 = () => {
  const [title, setTitle] = useState('Loading Route1...')

  useEffect(() => {
    getTitle()
    return () => {
      console.log('Route1 will unmount')
    }
  }, [])

  const getTitle = () => {
    setTimeout(() => {
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
