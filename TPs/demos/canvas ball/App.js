import React, { useEffect, useMemo, useRef, useState } from 'react'
import Ball from './Ball'
import random from './random'

const chars = '0123456789ABCDEF'
const randomColor = () => new Array(6).fill('').reduce((acc, c) => acc + chars[random(0, 15)], '#')

const createBall = (ctx, width, height) => {
  const ballSize = random(10, 30)
  return new Ball(
    new Date().getTime(),
    ctx,
    width,
    height,
    ballSize,
    random(ballSize, width - ballSize),
    random(ballSize, height - ballSize),
    random(1, 5),
    random(1, 5),
    randomColor()
  )
}

const App = () => {
  const [balls, setBalls] = useState([])
  const canvas = useRef(null)
  const canvasCtx = useRef(null)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!canvasCtx.current) return
    setBalls(p => p.concat(
      new Array(random(1, 1 + text.length * 2))
        .fill('')
        .map(_ => createBall(canvasCtx.current, canvas.current.width, canvas.current.height))
    ))
    const intervalId = setInterval(animate, 1)
    return () => clearInterval(intervalId)
  }, [text])

  useEffect(() => {
    if (!canvas.current) return
    canvasCtx.current = canvas.current.getContext('2d')
    if (!canvasCtx.current) return
  }, [canvas.current])

  const animate = () => {
    canvasCtx.current.fillStyle = '#000000'
    canvasCtx.current.fillRect(0, 0, canvas.current.width, canvas.current.height)

    console.log(balls.length)
    balls.forEach(b => {
      b.draw()
      b.update()
      b.collisionDetect(balls)
    })
    //requestAnimationFrame(animate)
  }

  return (
    <>
      <canvas width={800} height={600} ref={canvas} />
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </>
  )
}

App.propTypes = {}

export default App
