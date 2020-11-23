import React from 'react'
import PropTypes from 'prop-types'

// TODO : utiliser setDetail
const Tab = ({ children, setDetail }) => children

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  setDetail: PropTypes.func,
}

export default Tab
