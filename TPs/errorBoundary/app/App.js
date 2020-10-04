import React, {useCallback, useEffect, useMemo, useState} from 'react'
import villesApi from 'apis/villes'
import VilleInfos from './VilleInfos'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AppTitle = styled.h3`
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  display: flex;
  flex-direction: raw;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`

const App = () => {
    const [villes, setVilles] = useState([])
    const [selectionId, setSelectionId] = useState(null)

    useEffect(() => {
        villesApi.get_small().then(setVilles)
    }, [])

    const setSelectionVille = useCallback(v => setSelectionId(v.id), []) // perf 1
    const villeSelectionnee = useMemo(() => villes.find(v => v.id === selectionId), [villes, selectionId])

    return (
        <AppContainer>
            <AppTitle>La liste des villes !</AppTitle>
            <Main>
                <Left>
                    {villes.map(v => (
                        <VilleInfos ville={v} key={v.id} onClick={setSelectionVille} isSelectionne={v.id === selectionId} />
                    ))}
                </Left>
                <Right>{villeSelectionnee ? villeSelectionnee.cp : null}</Right>
            </Main>
        </AppContainer>

    )
}

export default App
