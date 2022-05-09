import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'
import { useMutation, useQuery } from 'react-query'
import villesApi from '../apis/villes'
import VilleInfos from './VilleInfos'

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
  const { data: villes = [], isLoading, refetch } = useQuery('villes', villesApi.get)
  const { mutateAsync: supprimeVille, isLoading: isLoadingDel } = useMutation(villesApi.delete, {
    onSuccess: refetch,
  })

  return (
    <Page>
      <AppTitle>Liste des villes</AppTitle>
      <Main>
        <CardScroll>
          {isLoading ? (
            <>Loading...</>
          ) : (
            villes.map(ville => <VilleInfos ville={ville} key={ville.id} onSelect={() => supprimeVille(ville.id)} />)
          )}
          {isLoadingDel && <>Deleting...</>}
        </CardScroll>
      </Main>
    </Page>
  )
}

export default App
