import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home_main.module.css';
import Tweet from "./Tweet";


const Home_main = () => {
    return(
        <div className={styles.main_container}>
            {/* left section  */}
            <div className={styles.left_section}>
                <div className={styles.left_section_head}>
                    <img className={styles.logo} src="logo.png" alt="twitter logo"></img>
                </div>
                <div className={styles.left_section_middle}>
                    <div>
                        <FontAwesomeIcon className={styles.user_icon} icon={faUser} />
                    </div>
                    <div className={styles.left_section_user_infos}>
                        <p className={styles.user_infos_p}>FirstName</p>
                        <p className={styles.user_infos_username}>@username</p>
                    </div>
                </div>
                <div className={styles.left_section_bottom}>
                    <button className={styles.logout_button}>LOGOUT</button>
                </div>
            </div>

            {/* mid section  */}
            <div className={styles.mid_section}>
                <Tweet />
            </div>

            {/* right section */}
            <div className={styles.right_section}>

            </div>


        </div>
    );
}



export default Home_main;