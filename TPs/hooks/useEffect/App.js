import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: block;
`

const Chrono = () => {
  const [raz, setRaz] = useState(0)
  const [timer, setTimer] = useState(0)
  const [it, setIt] = useState(null)

  useEffect(() => {
    console.log('debut useeffect it', it)
    if (it) {
      console.log('delete ', it)
      clearInterval(it)
      setIt(null)
    }
    const newIt = setInterval(() => {
      console.log('+1')
      setTimer(t => t + 1)
    }, 1000)
    console.log('create ', newIt)
    setIt(newIt)
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
