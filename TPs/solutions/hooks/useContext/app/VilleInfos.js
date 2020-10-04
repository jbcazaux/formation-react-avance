import React from 'react'
import { Ville } from 'domain/Ville'
import PropTypes from 'prop-types'
import styled from "styled-components";

const Layout = styled.div`
  width: fit-content;
  cursor: pointer;
`

const VilleInfos = ({ ville, isSelectionne, onClick }) => (
  <Layout data-ville={ville.id} onClick={() => onClick(ville)} style={isSelectionne ? { backgroundColor: 'red' } : {}}>
    {ville.cp} - {ville.nom}
  </Layout>
)

VilleInfos.propTypes = {
  ville: Ville.propTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelectionne: PropTypes.bool,
}
export default VilleInfos
// export default React.memo(VilleInfos)
