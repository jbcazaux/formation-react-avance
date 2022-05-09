import React from 'react'
import App from './app/App'
import { createRoot } from 'react-dom/client'
import Providers from './providers/Providers'

createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>
)
