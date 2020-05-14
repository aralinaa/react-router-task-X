import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div className="bg-pink-300">
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-pink-600 text-white font-bold rounded-lg border shadow-lg p-10 transition-all">
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
