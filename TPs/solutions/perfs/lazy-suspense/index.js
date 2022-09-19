import React, { Suspense, useState } from 'react'
import { createRoot } from 'react-dom/client'

const LazyGoodbye = React.lazy(() => import(/* webpackChunkName: "LazyGoodbye" */ './Goodbye'))

const Button = () => {
  const [display, setDisplay] = useState(false)
  return (
    <>
      <button onClick={() => setDisplay(d => !d)}>click me!</button>
      {display && (
        <Suspense fallback={<div>Loading... !</div>}>
          <LazyGoodbye name="oxiane" />
        </Suspense>
      )}
    </>
  )
}

const Hello = ({ name }) => <div> Hello {name}</div>

createRoot(document.getElementById('root')).render(
  <>
    <Hello name="oxiane" />
    <Button />
  </>
)
