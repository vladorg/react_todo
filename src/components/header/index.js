import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './header.module.css';



export default function() {

  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.logo}>Site.com</div>
        <nav className={styles.nav}>
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