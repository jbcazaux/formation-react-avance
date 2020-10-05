import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Loader = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  useEffect(() => {
    Promise.resolve()
      .then(() => setLoading(true))
      .then(children)
      .then(setData)
      .finally(() => setLoading(false))
  }, [children])
  return isLoading ? <div>Loading...</div> : <div>{data}</div>
}

Loader.propTypes = {
  children: PropTypes.func.isRequired,
}


const AppContainer = styled.div`
  display: flex;
`

/*
 * Retourne une promesse d'une tache exécutée après un temps donné
 * exemple : delay(1000).then(() => console.log('Hello après 1 seconde !'))
 */
const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

const App = () => (
  <AppContainer>
    <Loader>{() => delay(2000).then(() => 42)}</Loader>
  </AppContainer>
)

export default App
