import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'
import RechargerVilles from 'app/RechargerVilles'
import VillesContext from 'components/VillesContext'
import Villes from 'app/Villes'

const Main = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: row;
  flex: 1;
`

const AppTitle = styled(Card)`
  display: flex;
  flex: 0;
  background-color: #2c79ac;
  color: white;
`

const CardScroll = styled(Card)`
  flex: 1;
  overflow: auto;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
`

const App = () => {
  const [villes, setVilles] = useState([])

  return (
    <VillesContext.Provider value={{ villes, setVilles }}>
      <Page>
        <AppTitle>Liste des villes</AppTitle>
        <Main>
          <CardScroll>
            <Villes />
          </CardScroll>
          <Right>
            <Card>
              <RechargerVilles />
            </Card>
          </Right>
        </Main>
      </Page>
    </VillesContext.Provider>
  )
}

export default App
