import React, { useCallback, useState, useEffect } from 'react'
import villesApi from 'apis/villes'
import VilleInfos from './VilleInfos'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'

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
  // TODO : créer un state pour enregistrer un sel
  // TODO : créer une fonction pour modifier le sel
  const rechargerVille = () => {}
  // TODO : créer un 'effect' qui met à jour la liste des villes, chaque fois que le sel change

  const supprimeVille = useCallback(selection => setVilles(prev => prev.filter(v => v.id !== selection.id)), [])

  return (
    <Page>
      <AppTitle>Liste des villes</AppTitle>
      <Main>
        <CardScroll>
          {villes.map(ville => (
            <VilleInfos ville={ville} key={ville.id} onSelect={supprimeVille} />
          ))}
        </CardScroll>
        <Right>
          <Card>
            <button onClick={rechargerVille}>Recharger les villes</button>
          </Card>
        </Right>
      </Main>
    </Page>
  )
}

export default App
