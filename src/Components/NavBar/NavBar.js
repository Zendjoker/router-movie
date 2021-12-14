import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div classname="navbar-container">
  <input type="checkbox" id="ham-menu" />
  <label htmlFor="ham-menu">
    <div className="hide-des">
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
    </div>
  </label>
  <div className="full-page-green" />
  <div className="ham-menu">
    <ul className="centre-text bold-text">
    <Link to='/'>Home</Link>
     <Link to='/contact'>Description</Link>
    </ul>
  </div>
</div>
    )
}

export default NavBar
