import React, { useState } from 'react'
import style from './Tabs.scss'
import PropTypes from 'prop-types'
import Tab from 'components/tabs/Tab'
import cn from 'classnames'

const Tabs = ({ children }) => {
  // TODO : state onglet sélectionné

  return (
    <div>
      <div className={style.tabs}>
        {/* Affichage des titres des onglets */}
        {React.Children.map(children, child => {
          if (child.type !== Tab) return null
          return (
            // <TabTitle />
            null
          )
        })}
      </div>
      {/* Affichage de l'onglet actif (c'est à dire un des <Tab /> ) */}
      {React.Children.map(children, child => {
        if (child.type !== Tab) return null
        return null // Retourner quoi ?
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
    TITRE {/* TODO : comment récuperer le titre ?*/}
  </div>
)

TabTitle.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}
