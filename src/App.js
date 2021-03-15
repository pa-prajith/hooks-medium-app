import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/topbar'

const App = () => {
  return (
    <div className="container">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
