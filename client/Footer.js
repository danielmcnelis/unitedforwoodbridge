import React from 'react'
import {Link} from 'react-router-dom'

//Footer
const Footer = () => {
  return (
  <div className="footer">
    <div>
        <div id="footer-menu">
          <Link to="/about/">
            <p className="footer-item">About Us</p>
          </Link>
          <Link to="/history/">
            <p className="footer-item">Town History</p>
          </Link>
          <Link to="/issues/">
            <p className="footer-item">The Issues</p>
          </Link>
          <Link to="/contact/">
            <p className="footer-item">Contact & Contribute</p>
          </Link>
        </div>
        <p className="disclaimer">United For Woodbridge is a Political Action Committee registered in the State of Connecticut.</p>
    </div>
    <Link to="/">
      <div className="footer-logo"/>
    </Link>
  </div>
  )
}

export default Footer
