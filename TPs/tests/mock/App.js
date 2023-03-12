import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DiceRoll from './app/DiceRoll'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const App = () => (
  <AppContainer>
    Bienvenue sur l&apos;application DiceRoll !
    <DiceRoll />
  </AppContainer>
)

export default App
