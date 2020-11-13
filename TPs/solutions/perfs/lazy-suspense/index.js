import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom'

const LazyGoodbye = React.lazy(() => import(/* webpackChunkName: "LazyGoodbye" */ './Goodbye'))

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
