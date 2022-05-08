import React, { useState } from 'react'
import style from './Tabs.scss'
import PropTypes from 'prop-types'
import Tab from './Tab'
import cn from 'classnames'

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [details, setDetails] = useState({})

  return (
    <div role="tabs">
      <div className={style.tabs} role="tablist">
        {React.Children.map(children, (child, index) => {
          if (child.type !== Tab) return null
          const onclick = setSelectedTab.bind(null, index)
          return (
            <TabTitle selected={selectedTab === index} onClick={onclick} detail={details[index]}>
              {child.props.title}
            </TabTitle>
          )
        })}
      </div>
      {React.Children.map(children, (child, index) => {
        if (index !== selectedTab) return null
        if (child.type !== Tab) return null
        const setDetail = d => setDetails(prev => ({ ...prev, [index]: d }))
        // TODO 1: passer setDetail au 'child' (child est un Tab, cf App.js)
        return child
      })}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs

const TabTitle = ({ selected, children, detail, onClick }) => (
  <div className={cn(style.tab, { [style.selectedTab]: selected })} onClick={onClick} role="tab">
    {children}
    <div className={style.detail} role="note">
      {detail}&#8203;
    </div>
  </div>
)

TabTitle.propTypes = {
  detail: PropTypes.string,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}
