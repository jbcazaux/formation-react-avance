import React, { Suspense, useState } from 'react'
import { createRoot } from 'react-dom/client'
// TODO : faire un import dynamique de LazyGoodbye à l'aide de React.lazy
import LazyGoodbye from './Goodbye'

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
