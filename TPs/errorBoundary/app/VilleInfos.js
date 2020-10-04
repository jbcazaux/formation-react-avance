import React from 'react'
import { Ville } from 'domain/Ville'
import PropTypes from 'prop-types'

const ComponentWithError = () => {
  throw new Error('Méchante erreur')
}

const VilleInfos = ({ ville, isSelectionne, onClick }) => (
  <div data-ville={ville.id} onClick={() => onClick(ville)}>
    <ComponentWithError />
    {ville.cp} - {ville.nom}
    {isSelectionne ? (
        <div style={{ backgroundColor: 'red', width: '10px', height: '10px', display: 'inline-block' }}></div>
    ) : null}
  </div>
)

VilleInfos.propTypes = {
  ville: Ville.propTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelectionne: PropTypes.bool,
}
export default VilleInfos
// export default React.memo(VilleInfos)
