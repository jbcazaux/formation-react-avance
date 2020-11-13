import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom'

import LazyGoodbye from './Goodbye' // TODO : faire un import dynamique de la librairie à l'aide de React.lazy

const Button = () => {
  const [display, setDisplay] = useState(false)
  return (
    <>
      <button onClick={() => setDisplay(d => !d)}>click me!</button>
      {display && (
        <Suspense fallback={<div>Loading... !</div>}>
          <LazyGoodbye name="CGG" />
        </Suspense>
      )}
    </>
  )
}

const Hello = ({ name }) => <div> Hello {name}</div>

ReactDOM.render(
  <>
    <Hello name="CGG" />
    <Button />
  </>,
  document.getElementById('root')
)
