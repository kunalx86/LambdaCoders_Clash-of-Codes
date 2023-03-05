import styles from  '../styles/profile.module.css'

import {ImLocation} from 'react-icons/im'

export default function ProfilPage() {
    return(
        <div className = {styles.container}>
            {/* <h1>
                om ganeshaya namaha
            </h1> */}

            <div className="profile-photo-container">
                <img className = {styles.profile_image} id="userProfileImage" src="/icons/profile-photo.PNG" alt="React Image" />
            </div>

            

            <div className={styles.sub_container}>
            <div className = {styles.element_container}>
                <div className={styles.name} id="name"> Jessica Parker</div>
                <div className={styles.job} id="profession">Model, Actor</div>    
            </div>

            <div className={styles.element_container}>
                <div className= {styles.header}>About</div>
                <div className= {styles.subtext} id="about">My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..</div>    
            </div>

            <div className= {styles.element_container}>
                <div className={styles.location_flex}>
                    <div className= {styles.header}>Location</div>
                    <div className={styles.pin_container} align = "right">    
                    </div>
                </div> 
                <div className= {styles.subtext} id = 'location' > Mumbai, Maharashtra India </div>
            </div>
            <div className= {styles.element_container}>
                <div className = {styles.header}>Interest</div>
                <div className={styles.interests} id="interests">
                    interests components 
                </div>

            </div>
            </div>


           
        </div>
    )
}