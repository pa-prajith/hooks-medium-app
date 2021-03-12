import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'

const App = () => {
  return (
    <div>
      <h1>This is the React Application!</h1>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
