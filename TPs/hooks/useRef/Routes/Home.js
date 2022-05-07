import React, { useEffect, useState, useRef } from 'react'
import Menu from '../Menu'

const Home = () => {
  const [title, setTitle] = useState('Loading ...')

  useEffect(() => {
    getTitle()
    return () => {
      console.log('Home will unmount')
    }
  }, [])

  const getTitle = () => {
    setTimeout(() => {
      console.log('homepage - set title')
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
