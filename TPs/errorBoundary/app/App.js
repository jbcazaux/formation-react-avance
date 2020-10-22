import React, { useCallback, useEffect, useMemo, useState } from 'react'
import villesApi from 'apis/villes'
import VilleInfos from './VilleInfos'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'
import VilleDetails from 'app/VilleDetails'
import ErrorBoundary from 'components/ErrorBoundary'

const Main = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: raw;
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

const CardInfo = styled(Card)`
  height: fit-content;
`

const App = () => {
  const [villes, setVilles] = useState([])
  const [selectionId, setSelectionId] = useState(null)

  useEffect(() => {
    villesApi.get().then(setVilles)
  }, [])

  const setSelectionVille = useCallback(v => setSelectionId(v.id), [])
  const villeSelectionnee = useMemo(() => villes.find(v => v.id === selectionId), [villes, selectionId])

  return (
    <Page>
      <AppTitle>Liste des villes</AppTitle>
      <Main>
        <CardScroll>
          {villes.map(ville => (
            <VilleInfos
              ville={ville}
              key={ville.id}
              onSelect={setSelectionVille}
              isSelectionne={ville.id === selectionId}
            />
          ))}
        </CardScroll>
        <CardInfo>
          <ErrorBoundary>
            {villeSelectionnee ? <VilleDetails ville={villeSelectionnee} /> : null}
          </ErrorBoundary>
        </CardInfo>
      </Main>
    </Page>
  )
}

export default App
