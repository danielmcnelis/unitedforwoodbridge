
import React from 'react'
import {Link} from 'react-router-dom'

//NavBar
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div id="logo">
          <img src="/favicon.ico" alt="U4W-logo"/>
        </div>
      </Link>
      <div id="nav-menu">
        <Link to="/">
          <h2 className="nav-item">Home</h2>
        </Link>
        <Link to="/about/">
          <h2 className="nav-item">About</h2>
        </Link>
        <Link to="/history/">
          <h2 className="nav-item">History</h2>
        </Link>
        <Link to="/issues/">
          <h2 className="nav-item">Issues</h2>
        </Link>
        <Link to="/contact/">
          <h2 className="nav-item">Contact</h2>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
