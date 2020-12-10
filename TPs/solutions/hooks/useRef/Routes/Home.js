import React, { useEffect, useState, useRef } from 'react'
import Menu from '../Menu'

const Home = () => {
  const [title, setTitle] = useState('Loading ...')
  const timeout = useRef(null)

  useEffect(() => {
    getTitle()
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const getTitle = () => {
    timeout.current = setTimeout(() => {
      setTitle('HOMEPAGE')
    }, 2000)
  }

  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Home
