import React from 'react'
import './Nav.css'
import logo from '../assets/ADlogo.png'

function Nav() {
  return (
    <div className='nav'>
       <div className="nav-logo"><img src={logo} alt="logo" style={{width:80}} className='nav-logos'/></div>
       <div className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
       </div>
    </div>
  )
}

export default Nav