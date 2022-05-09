import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PropTypes from 'prop-types'

const queryClient = new QueryClient()

const Providers = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
