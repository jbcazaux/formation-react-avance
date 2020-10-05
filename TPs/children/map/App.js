import React from 'react'
import styled from 'styled-components'
import Tabs from 'TPs/children/map/components/tabs/Tabs'
import Tab from 'TPs/children/map/components/tabs/Tab'
import PropTypes from 'prop-types'

const AppContainer = styled.div`
  display: flex;
`

const Page = ({children}) => <div>{children}</div>
Page.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = () => (
  <AppContainer>
    Mes onglets :
    <Tabs>
      <Tab title="Titre 1"><Page>Ecran 1</Page></Tab>
      <Tab title="Titre 2"><Page>Ecran 2</Page></Tab>
    </Tabs>
  </AppContainer>
)


export default App
