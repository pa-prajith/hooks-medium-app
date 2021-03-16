import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/topbar'
import {CurrentUserProvider} from 'contexts/currentUser'

const App = () => {
  return (
    <div className="container">
      <CurrentUserProvider>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserProvider>
    </div>
  )
}

export default App
