import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DiceRoll from './app/DiceRoll'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Page = ({ children, setSousTitre }) => {
  const [text, setText] = useState('')
  const onChange = e => {
    const value = e.target.value
    setSousTitre(value)
    setText(value)
  }
  return (
    <div>
      {children}
      <input value={text} onChange={onChange} />
    </div>
  )
}
Page.propTypes = {
  children: PropTypes.node.isRequired,
  setSousTitre: PropTypes.func,
}

const App = () => (
  <AppContainer>
    Bienvenue sur l&apos;application DiceRoll !
    <DiceRoll />
  </AppContainer>
)

export default App
