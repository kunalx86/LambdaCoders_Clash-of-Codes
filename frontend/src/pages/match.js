import React from 'react'
import styles from '../styles/profile.module.css'
function match() {
  return (
    <div className={styles.container}>
        <img className={styles.background} src= "/icons/match.PNG"/>
        <img className={styles.person1} id="person1" src='/icons/profile-photo.PNG'></img>
        <img className={styles.person2} id="person2" src='/icons/IMG.PNG'></img>
        <button className={styles.get_started} id='start_conversation'>Start a conversation</button>
        
    </div>
  )
}

export default match
