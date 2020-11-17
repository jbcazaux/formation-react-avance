import React, { useState } from 'react'
import style from './Tabs.scss'
import PropTypes from 'prop-types'
import Tab from 'components/tabs/Tab'
import cn from 'classnames'

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [sousTitres, setSousTitres] = useState({})

  return (
    <div>
      <div className={style.tabs}>
        {React.Children.map(children, (child, index) => {
          if (child.type !== Tab) return null
          const onclick = setSelectedTab.bind(null, index)
          return (
            <TabTitle selected={selectedTab === index} onClick={onclick} subTitle={sousTitres[index]}>
              {child.props.title}
            </TabTitle>
          )
        })}
      </div>
      {React.Children.map(children, (child, index) => {
        if (index !== selectedTab) return null
        if (child.type !== Tab) return null
        const setSousTitre = st => setSousTitres(prev => ({ ...prev, [index]: st }))
        return React.cloneElement(child.props.children, { setSousTitre })
      })}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  defaultInfos: PropTypes.object,
}

export default Tabs

const TabTitle = ({ selected, children, subTitle, onClick }) => (
  <div className={cn(style.tab, { [style.selectedTab]: selected })} onClick={onClick}>
    {children}
    <div className={style.soustitre}>{subTitle}&#8203;</div>
  </div>
)

TabTitle.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}
