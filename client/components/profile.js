import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="font-sans p-2 text-yellow-300">
        {' '}
        Profile{' '}
      </div>
      <div id="username" className="border-solid border-4 border-yellow-300">
        <h1 className="font-sans text-lg  text-center">{user}</h1>
      </div>
      <div className="font-sans p-2 underline">
        <Link to="/dashboard">Go To Root</Link>
      </div>
      <div className="font-sans p-2 underline">
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
