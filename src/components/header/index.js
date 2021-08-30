import React from 'react';
import {NavLink} from 'react-router-dom';



export default function() {

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Site.com</div>
        <nav className="nav">
          <NavLink 
            to='/'
            activeClassName="activeLink" 
            exact
          >
            Home
          </NavLink>
          <NavLink 
            to='/about'
            activeClassName="activeLink" 
            exact
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  )
}