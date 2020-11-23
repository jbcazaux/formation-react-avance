import React from 'react'
import PropTypes from 'prop-types'

const Tab = () => null

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  setDetail: PropTypes.func,
}

export default Tab
