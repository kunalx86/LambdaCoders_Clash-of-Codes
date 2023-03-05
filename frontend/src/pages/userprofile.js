import React from 'react'
import styles from '../styles/profile.module.css'
function userprofile() {
  return (
    <div className = {styles.container}>
        <div className= {styles.profile_container}>
            <img className={styles.userprofileImage} id = 'userProfileImage' src='/icons/profile-photo.PNG'></img>
            <div className= {styles.userdetails_container}>
                <div className={styles.header} id="name">Yuvraj Thakur</div>
                <div className={styles.subtext} id="complete">50 % Profile complete</div>

            </div>
        </div>
        <div className={styles.bannerContainer}>
            <img className = {styles.banner} src="/icons/banner.PNG"></img>
        </div>
    </div>
  )
}

export default userprofile
