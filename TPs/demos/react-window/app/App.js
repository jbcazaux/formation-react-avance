import React, { useCallback, useEffect, useMemo, useState } from 'react'
import villesApi from 'apis/villes'
import VilleInfos from './VilleInfos'
import styled from 'styled-components'
import Page from 'components/Page'
import Card from 'components/Card'
import VilleDetails from 'app/VilleDetails'
import { FixedSizeList as List } from 'react-window'
import PropTypes from 'prop-types'
import { Ville } from '../domain/Ville'

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

const CardInfo = styled(Card)`
  height: fit-content;
`

const Row = ({ index, style, data: { villes, setSelectionVille, currentSelectionId } }) => {
  const ville = villes[index]
  return (
    <div style={style}>
      <VilleInfos
        ville={ville}
        key={ville.id}
        isSelectionne={ville.id === currentSelectionId}
        onSelect={setSelectionVille}
      />
    </div>
  )
}
Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.shape({
    villes: PropTypes.arrayOf(Ville.propTypes()).isRequired,
    setSelectionVille: PropTypes.func.isRequired,
    currentSelectionId: PropTypes.number.isRequired,
  }),
}

const App = () => {
  const [villes, setVilles] = useState([])
  const [selectionId, setSelectionId] = useState(null)

  useEffect(() => {
    villesApi.get().then(setVilles)
  }, [])

  const setSelectionVille = useCallback(v => setSelectionId(v.id), [])
  const villeSelectionnee = useMemo(() => villes.find(v => v.id === selectionId), [villes, selectionId])
  const itemData = {
    villes,
    setSelectionVille,
    currentSelectionId: selectionId,
  }

  return (
    <Page>
      <AppTitle>Liste des villes</AppTitle>
      <Main>
        {villes.length ? (
          <List height={600} width={400} itemCount={villes.length} itemSize={35} itemData={itemData}>
            {Row}
          </List>
        ) : null}
        <CardInfo>{villeSelectionnee ? <VilleDetails ville={villeSelectionnee} /> : null}</CardInfo>
      </Main>
    </Page>
  )
}

export default App
