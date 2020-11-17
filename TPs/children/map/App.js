import React from 'react'
import styled from 'styled-components'
import Tabs from 'components/tabs/Tabs'
import Tab from 'components/tabs/Tab'

const AppContainer = styled.div`
  display: flex;
`

const App = () => (
  <AppContainer>
    Mes onglets :
    <Tabs>
      <Tab title="Titre 1">Ecran 1</Tab>
      <Tab title="Titre 2">Ecran 2</Tab>
    </Tabs>
  </AppContainer>
)

export default App
