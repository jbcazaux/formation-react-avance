import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ handleClick }) => <button onClick={handleClick}>click me !</button>
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

const ClickCount = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => setValue(v => v + 1)

  return (
    <>
      {value}
      <Button handleClick={handleClick} />
    </>
  )
}

const AppContainer = styled.div`
  display: flex;
`

const App = () => (
  <AppContainer>
    <ClickCount />
  </AppContainer>
)

export default App
