import styles from  '../styles/profile.module.css'

import {ImLocation} from 'react-icons/im'

export default function ProfilPage() {
    return(
        <div className = {styles.container}>
            {/* <h1>
                om ganeshaya namaha
            </h1> */}

            <div className="profile-photo-container">
                <img className = {styles.profile_image} src="https://edge.99images.com/photos/wallpapers/music/shirley-setia%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-hr1ju.jpg" alt="React Image" />
            </div>

            <div className={styles.sub_container}>
            <div className = {styles.element_container}>
                <div className={styles.name} id="name"> Shirley Setia</div>
                <div className={styles.job} id="profession">Singer Actor</div>    
            </div>

            <div className={styles.element_container}>
                <div className= {styles.header}>About</div>
                <div className= {styles.subtext} id="about">My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..</div>    
            </div>

            <div className= {styles.element_container}>
                <div className={styles.location_flex}>
                    <div className= {styles.header}>Location</div>
                    <div className={styles.pin_container} align = "right">
                        <ImLocation className= {styles.locationPin}/>
                        <div className={styles.distance} id="location_radius">1 KM</div>

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