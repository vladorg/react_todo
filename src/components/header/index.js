import React from 'react';
import {NavLink} from 'react-router-dom';
import {routesMap} from '~/router';



export default function() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Site.com</div>
        <nav className="nav">
          <NavLink 
            to={routesMap.home}
            activeClassName="activeLink" 
            exact
          >
            Home
          </NavLink>
          <NavLink 
            to={routesMap.about}
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