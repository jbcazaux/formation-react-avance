import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Route1 from './Routes/Route1'
import Route2 from './Routes/Route2'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/route-1" element={<Route1 />} />
      <Route path="/route-2" element={<Route2 />} />
    </Routes>
  </Router>
)

export default App
