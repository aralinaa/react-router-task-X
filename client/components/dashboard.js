import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="font-sans p-2 font-bold text-yellow-300">
        Dashboard
      </div>
      <div className="font-sans p-2 underline">
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">Go To Profile</Link>
      </div>
      <div className="font-sans p-2 underline">
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
