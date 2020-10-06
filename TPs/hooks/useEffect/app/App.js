import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    villesApi.get_small().then(setVilles)
  }, [])

  const supprimeVille = ville => {
    setVilles(prev => prev.filter(v => v.id !== ville.id))
    villesApi.supprime(ville)
    // TODO : recharger la liste des villes
  }

  return (
    <AppContainer>
      <AppTitle>La liste des villes !</AppTitle>
      <Main>
        <Left>
          {villes.map(v => (
            <VilleInfos ville={v} key={v.id} onClick={supprimeVille} />
          ))}
        </Left>
        <Right>
          <button>Recharger (TODO)</button>
        </Right>
      </Main>
    </AppContainer>
  )
}

export default App
