import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
  }, [])

  const setSelectionVille = useCallback(v => setSelectionId(v.id), [])
  const villeSelectionnee = useMemo(() => villes.find(v => v.id === selectionId), [villes, selectionId])

  return (
    <Page>
      <AppTitle>La liste des villes !</AppTitle>
      <Main>
        <Card>
          {villes.map(v => (
            <VilleInfos ville={v} key={v.id} onSelect={setSelectionVille} isSelectionne={v.id === selectionId} />
          ))}
        </Card>
        <Card>{villeSelectionnee ? villeSelectionnee.cp : null}</Card>
      </Main>
    </Page>
  )
}

export default App
