import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" />
      </Router>
    </React.StrictMode>
  )
}

export default App
