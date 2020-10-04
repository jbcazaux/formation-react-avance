import React from 'react'
import PropTypes from 'prop-types'

// TODO : utiliser setSousTitre
const Tab = ({ children, setSousTitre }) => children

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Tab
