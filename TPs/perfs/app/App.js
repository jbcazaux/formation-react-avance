import React, { useState } from 'react'
import styled from 'styled-components'
import Canvas from './Canvas'

// unperf 1 : mettre redux sur chaque composant VilleInfo

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const Right = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`

const App = () => {
  return (
    <Main>
      <h2>Mon application</h2>
      <Graph1 />
    </Main>
  )
}

export default App

const Graph1 = () => {

  return <>
    <Canvas width={640} height={480} >
    </Canvas>

  </>
}
