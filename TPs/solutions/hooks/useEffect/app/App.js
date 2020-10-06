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
  const [rechargeVilles, setRechargeVilles] = useState(0)

  const rechargerVille = () => setRechargeVilles(prev => prev + 1)

  useEffect(() => {
    villesApi.get_small().then(setVilles)
  }, [rechargeVilles])

  const supprimeVille = ville => {
    setVilles(prev => prev.filter(v => v.id !== ville.id))
    villesApi.supprime(ville).then(rechargerVille)
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
          <button onClick={rechargerVille}>Recharger</button>
        </Right>
      </Main>
    </AppContainer>
  )
}

export default App
