import React from 'react'
import { Ville } from 'domain/Ville'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
`

const VilleInfos = ({ ville, isSelectionne, onSelect }) => (
  <Layout data-ville={ville.id} onClick={() => onSelect(ville)} style={isSelectionne ? { backgroundColor: 'red' } : {}}>
    {ville.cp} - {ville.nom}
  </Layout>
)

VilleInfos.propTypes = {
  ville: Ville.propTypes.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelectionne: PropTypes.bool,
}

export default React.memo(VilleInfos)
