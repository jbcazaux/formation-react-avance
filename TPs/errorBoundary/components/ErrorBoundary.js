import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // TODO : mettre à jour le state pour indiquer qu'il y a une erreur
  }

  componentDidCatch(error, errorInfo) {
    console.log('catch :', error, errorInfo)
  }

  render() {
    // TODO : Si il y a une erreur, afficher un message
    // sinon afficher l'application
    return null
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary
