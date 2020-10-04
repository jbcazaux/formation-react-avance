import React from 'react'
import styled from 'styled-components'
import Tabs from 'components/tabs/Tabs'
import Tab from 'components/tabs/Tab'

const AppContainer = styled.div`
  display: flex;
`

const Info = ({children}) => <div>{children}</div>

const App = () => (
  <AppContainer>
    <Tabs>
      <Tab title="Titre 1"><Info>Ecran 1</Info></Tab>
      <Tab title="Titre 2"><Info>Ecran 2</Info></Tab>
    </Tabs>
  </AppContainer>
)

export default App
