import React from 'react';
import styles from './about.module.css';



export default class extends React.Component {


  render() {


    return (
      <div className="container">
        <h1>About</h1>

        <div className={styles.content}>
          <p>This is a my first react application.</p>
          <p>Author: <span>Vladislav Pshenichniy</span>.</p>
          <p>Current version: <span>1.0</span>.</p>
        </div>
      </div>
    )

  }










}