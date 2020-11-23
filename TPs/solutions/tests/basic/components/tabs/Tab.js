import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ children, setDetail }) => React.cloneElement(children, { setDetail })

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Tab
