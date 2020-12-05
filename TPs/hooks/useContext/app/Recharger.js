import React, { useContext } from 'react'

const Recharger = () => {
  const rafraichirVilles = () => {} // TODO : récupérer dans le contexte la fonction de modification du sel
  return <button onClick={rafraichirVilles}>Recharger les villes</button>
}

Recharger.propTypes = {}

export default Recharger
