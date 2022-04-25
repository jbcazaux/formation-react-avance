import React, { startTransition, useDeferredValue, useEffect, useRef, useState } from 'react'
import random from './random'
import styled from 'styled-components'

const chars = '0123456789ABCDEF'
const randomColor = () => new Array(6).fill('').reduce((acc, c) => acc + chars[random(0, 15)], '#')

const Cells = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const Cell = styled.div.attrs(({ color }) => ({
  style: {
    background: color,
  },
}))`
  height: 10px;
  width: 10px;
`

const Label = styled.label`
  display: block;
`

const Clock = () => {
  const canvas = useRef(null)
  const context = useRef(null)
  const lastDraw = useRef(new Date().getTime())
  const color = useRef(randomColor())
  const duration = 5000

  useEffect(() => {
    if (!canvas.current) return
    context.current = canvas.current.getContext('2d')

    drawCircle()
    drawTime()
  }, [canvas.current])

  const drawCircle = () => {
    const { current: ctx } = context
    ctx.beginPath()
    ctx.fillStyle = '#66AA88'
    ctx.arc(100, 100, 100, 0, 2 * Math.PI)
    ctx.fill()
  }

  const drawNeedle = () => {
    const time = new Date().getTime() / duration
    const needleLength = 100
    const angle = Math.PI * 2 * time
    const { current: ctx } = context

    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(100 + Math.cos(angle) * needleLength, 100 + Math.sin(angle) * needleLength)
    ctx.strokeStyle = color.current
    ctx.stroke()
  }

  const drawTime = () => {
    const now = new Date().getTime()

    if (now - lastDraw.current > 100) {
      const startAngle = Math.PI * 2 * ((lastDraw.current / duration) % 2)
      const endAngle = Math.PI * 2 * ((now / duration) % 2)
      const { current: ctx } = context
      ctx.beginPath()
      ctx.fillStyle = '#FF0000'
      ctx.arc(100, 100, 100, startAngle, endAngle)
      ctx.lineTo(100, 100)
      ctx.fill()
      color.current = randomColor()
    }
    lastDraw.current = now

    drawNeedle()

    requestAnimationFrame(drawTime)
  }

  return <canvas width={200} height={200} ref={canvas} />
}

const App = () => {
  const [cells, setCells] = useState([])
  const [text, setText] = useState('')
  const [useTransition, setUseTransition] = useState(false)
  const [useClock, setUseClock] = useState(true)
  const textLength = useDeferredValue(text.length)

  const handleTextChange = value => {
    setText(value)
    if (useTransition) {
      startTransition(() => {
        setCells(new Array(value.length).fill('').map(_ => randomColor()))
      })
    } else {
      setCells(new Array(value.length).fill('').map(_ => randomColor()))
    }
  }
  return (
    <>
      <Label>
        Use startTransition :
        <input type="checkbox" checked={useTransition} onChange={e => setUseTransition(e.target.checked)} />
      </Label>
      <Label>
        Clock :
        <input type="checkbox" checked={useClock} onChange={e => setUseClock(e.target.checked)} />{' '}
      </Label>
      <Label>
        Some text : <input type="text" onChange={e => handleTextChange(e.target.value)} value={text} />
      </Label>
      <div>Text length: {textLength}</div>
      {useClock && <Clock />}
      <Cells>
        {cells.map((c, i) => (
          <Cell key={i} color={c} />
        ))}
      </Cells>
    </>
  )
}

App.propTypes = {}

export default App
