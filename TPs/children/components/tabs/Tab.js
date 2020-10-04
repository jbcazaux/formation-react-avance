import PropTypes from 'prop-types'

const Tab = ({ children }) => children

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Tab
