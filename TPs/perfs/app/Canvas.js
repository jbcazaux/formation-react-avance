import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const randomInt = max => Math.floor(Math.random() * Math.floor(max))
const colors = ['#FFFF99', '#6699CC', '#FF0066', '#003399']
const randomColor = () => colors[randomInt(4)]
const arr = new Array(10).fill(0).map((_, i) => ({ id: i, x: randomInt(640), y: randomInt(480), color: randomColor() }))

const Canvas = ({ width, height }) => {
  const [phrase, setPhrase] = useState('longue phrase')
  return (
    <>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ background: 'black', width: `${width}px`, height: `${height}px` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {phrase.replaceAll(' ', '').length % 2 === 0 && <rect x="0" y="0" width="10" height="10" fill="red"/>}
        {arr
          //.filter(p => p.id < phrase.replaceAll(' ', '').length)
          .map(({ id, x, y, color }, i) => (
            <Circle key={phrase + i} id={id} x={x} y={y} r={5} color={color} />
          ))}
      </svg>
      <input value={phrase} onChange={e => setPhrase(e.target.value)} />
    </>
  )
}

Canvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Canvas

const Circle = ({ id, x, y, color, r }) => {
  useEffect(() => {
    console.log(`Circle ${id} did mount`)
    return () => console.log(`Circle ${id} will unmount`)
  }, [])
  return <circle cx={x} cy={y} r={randomInt(10)} fill={color} />
}

const Circle2 = React.memo(Circle, (prevProps, nextProps) => true)
