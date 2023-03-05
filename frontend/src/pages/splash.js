import React from 'react'
import styles from '../styles/profile.module.css'
function splash() {
  return (
    <div className = {styles.container}>
        <img className={styles.background} src="/icons/splash.PNG" alt="" />
        <button className={styles.get_started }>Get Started</button>
    </div>
  )
}

export default splash
