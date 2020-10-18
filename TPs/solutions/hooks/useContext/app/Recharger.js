import React, { useContext } from 'react'
import { TriggerContext } from 'components/Trigger'

const Recharger = () => {
  const rafraichirVilles = useContext(TriggerContext)
  return <button onClick={rafraichirVilles}>Recharger les villes</button>
}

Recharger.propTypes = {}

export default Recharger
