import React, { useState } from 'react'
import styled from 'styled-components'
import Tabs from 'components/tabs/Tabs'
import Tab from 'components/tabs/Tab'
import PropTypes from 'prop-types'

const AppContainer = styled.div`
  display: flex;
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
    <Tabs>
      <Tab title="Titre 1">
        <Page>Ecran 1</Page>
      </Tab>
      <Tab title="Titre 2">
        <Page>Ecran 2</Page>
      </Tab>
    </Tabs>
  </AppContainer>
)

export default App
