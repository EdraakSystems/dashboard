import React from 'react'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import Leftnav from './components/Leftnav/Leftnav'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <div className='dash_container container'>
      <div className="topNavbar"> <Navbar /></div>
      <div className="content">
        <div className="sideNavbar"> <Leftnav /></div>
        <div className="dashBoard"> <Dashboard /></div>
      </div>
    </div>
  )
}

export default App