import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
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

const RefreshVillesContext = React.createContext()

const useSalt = f => {
  const [salt, setSalt] = useState(0)
  useEffect(f, [f, salt])
  return useCallback(() => setSalt(s => s + 1), [])
}

const TriggerVilles = ({ f, children }) => {
  const update = useSalt(f)
  return <RefreshVillesContext.Provider value={update}>{children}</RefreshVillesContext.Provider>
}
TriggerVilles.propTypes = {
  children: PropTypes.node.isRequired,
  f: PropTypes.func.isRequired,
}

const ReloadVilles = () => {
  const update = useContext(RefreshVillesContext)
  return <button onClick={update}>refresh</button>
}

const App = () => {
  const [villes, setVilles] = useState([])

  const f = useCallback(() => {
    villesApi.get_small().then(setVilles)
  }, [])

  const sayHello = () => console.log('hello')
  const helloSalt = useSalt(sayHello)

  const deleteVille = () => undefined // TODO !

  return (
    <TriggerVilles f={f}>
      <AppContainer>
        <AppTitle>La liste des villes !</AppTitle>
        <Main>
          <Left>
            <button onClick={helloSalt}>Hello !</button>
            {villes.map(v => (
              <VilleInfos ville={v} key={v.id} onClick={deleteVille} />
            ))}
          </Left>
          <Right>
            <ReloadVilles />
          </Right>
        </Main>
      </AppContainer>
    </TriggerVilles>
  )
}

export default App
