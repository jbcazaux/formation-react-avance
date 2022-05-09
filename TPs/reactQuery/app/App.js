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
  // const { data: villes = [] } = useQuery(...)
  const villes = [] // TODO 1 : utiliser useQuery pour récupérer la liste des villes
  // TODO 4 : utiliser isLoading pour afficher un loader de chargement

  // const { mutateAsync: supprimeVille } = useMutation(...)
  const supprimeVille = id => null // TODO 2 : utiliser useMutation pour supprimer une ville
  // TODO : 3 : usiliser refetch pour recharger la liste des villes apres la suppression
  // TODO : 5 : usiliser le isLoading de la mutation pour afficher un loader lors de la suppression

  return (
    <Page>
      <AppTitle>Liste des villes</AppTitle>
      <Main>
        <CardScroll>
          {villes.map(ville => (
            <VilleInfos ville={ville} key={ville.id} onSelect={() => supprimeVille(ville.id)} />
          ))}
        </CardScroll>
      </Main>
    </Page>
  )
}

export default App
