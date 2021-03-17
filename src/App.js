import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/topbar'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/CurrentUserChecker'

const App = () => {
  return (
    <div className="container">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  )
}

export default App
