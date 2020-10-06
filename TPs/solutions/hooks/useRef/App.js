import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: block;
`

const Chrono = () => {
  const [raz, setRaz] = useState(0)
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef(-1)

  useEffect(() => {
    console.log('execute useeffect')
    const newIt = setInterval(() => {
      console.log('+1')
      setTimer(t => t + 1)
    }, 1000)
    console.log('create interval', newIt)
    intervalRef.current = newIt

    return () => {
      console.log('clean interval', intervalRef.current)
      clearInterval(intervalRef.current)
    }
  }, [raz])

  return (
    <AppContainer>
      Temps écoulé {timer}s
      <button
        onClick={() => {
          setRaz(Math.random())
          setTimer(0)
        }}
      >
        <span>RAZ</span>
      </button>
    </AppContainer>
  )
}

const App = () => {
  const [chrono, setChrono] = useState(false)
  return (
    <div>
      {chrono && <Chrono />}
      <button onClick={() => setChrono(c => !c)}>Affiche Chrono</button>
    </div>
  )
}

export default App
