import React from 'react'
import PropTypes from 'prop-types'

export const TriggerContext = React.createContext()

const Trigger = ({ f, children }) => {
  // TODO 1 : créer un state pour enregistrer un sel
  // TODO 2 : créer un use effect pour lancer la fonction passée en paramètre, en utilisant le sel
  // TODO 3 : créer une fonction pour modifier le sel, et donc relancer la fonction passée en paramètre
  // TODO 4 : Mettre à disposition des composants enfants un contexte contenant la fonction qui modifie le sel

  return <>{children}</>
}

Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  f: PropTypes.func.isRequired,
}

export default Trigger