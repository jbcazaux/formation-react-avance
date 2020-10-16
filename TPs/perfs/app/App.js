import React, { useEffect, useState } from 'react'
import villesApi from 'apis/villes'
import VilleInfos from './VilleInfos'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'

const AppTitle = styled.h3`
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  display: flex;
  flex-direction: raw;
`

const App = () => {
  const [villes, setVilles] = useState([])
  const [selectionId, setSelectionId] = useState(null)

  useEffect(() => {
    villesApi.get().then(setVilles)
  }, [selectionId])

  const villeSelectionnee = villes.find(v => v.id === selectionId)

  return (
    <Page>
      <AppTitle>La liste des villes !</AppTitle>
      <Main>
        <Card>
          {villes.map(ville => (
            <VilleInfos
              ville={ville}
              key={ville.id}
              onSelect={v => setSelectionId(v.id)}
              isSelectionne={ville.id === selectionId}
            />
          ))}
        </Card>
        <Card>{villeSelectionnee?.cp}</Card>
      </Main>
    </Page>
  )
}

export default App
