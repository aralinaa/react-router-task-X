import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div className="bg-teal-100">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-teal-500 text-white font-bold rounded-lg border shadow-lg p-10 shadow-2xl duration-75">
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/main" component={() => <Main />} />
          <Route exact path="/dashboard/profile/:user">
            <Profile />
          </Route>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
