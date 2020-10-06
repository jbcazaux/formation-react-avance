import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ handleClick }) => <button onClick={handleClick}>click me !</button>
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
const MButton = React.memo(Button)

const ClickCount = () => {
  const [value, setValue] = useState(0)
  const handleClick = useCallback(() => setValue(v => v + 1), [])

  return (
    <>
      {value}
      <MButton handleClick={handleClick} />
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
