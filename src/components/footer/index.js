import React from 'react';
import styles from './footer.module.css';



export default function() {

  return (
    <div className={styles.footer+' container'}>
      <div className={styles.copy}>(c) Copyright 2021</div>
    </div>
  )
}