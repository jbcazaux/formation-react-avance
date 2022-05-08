import React from 'react'
import PropTypes from 'prop-types'

// TODO 2: utiliser setDetail pour le passer au children (qui est une <Page/>, cf App.js)
const Tab = ({ children, setDetail }) => children

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  setDetail: PropTypes.func,
}

export default Tab
