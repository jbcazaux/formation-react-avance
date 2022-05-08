import React, { useState } from 'react'
import style from './Tabs.scss'
import PropTypes from 'prop-types'
import Tab from 'components/tabs/Tab'
import cn from 'classnames'

const Tabs = ({ children }) => {
  // TODO 1: Créer un state pour sauvegarder l'index de l'onglet sélectionné

  return (
    <div>
      <div className={style.tabs}>
        {/* Affichage des titres des onglets */}
        {React.Children.map(children, (child, index) => {
          if (child.type !== Tab) return null
          return (
            // TODO 2: <TabTitle onClick={mettre à jour l index sélectionné} selected={?}>TITRE</TabTitle>
            null
          )
        })}
      </div>
      {/* Affichage de l'onglet actif (c'est à dire un des <Tab /> ) */}
      {React.Children.map(children, child => {
        if (child.type !== Tab) return null
        // TODO 3 : Ne pas afficher les onglets non actifs (ceux qui n'ont pas le bon index)
        return null // TODO 4 : Retourner l'onglet, c'est à dire l'élément sur lequel on itère
      })}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs

const TabTitle = ({ selected, onClick }) => (
  <div className={cn(style.tab, { [style.selectedTab]: selected })} onClick={onClick}>
    TITRE {/* TODO 5: comment récuperer le titre de la props title du composant <Tab />? */}
  </div>
)

TabTitle.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}
