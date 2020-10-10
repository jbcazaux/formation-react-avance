import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ children, setSousTitre }) => React.cloneElement(children, { setSousTitre })

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Tab
