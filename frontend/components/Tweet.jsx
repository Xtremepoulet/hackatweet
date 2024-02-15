import React from "react";
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

const Tweet = () => {

//il faudra que je recupere les tweets ici dans un map ou alors que je les stocks dans un reducer 

    return(
        <div className={styles.tweet_container}>
            <div className={styles.tweet_section_top}>
                <div className={styles.tweet_section}>
                    <p>Home</p>
                </div>
                <div className={styles.tweet_writing}>   
                    <textarea name="" id="" cols="40" rows="1"></textarea>
                </div>
                <div className={styles.send_tweet}>
                    <p>1/280</p>
                    <button>Tweet</button>
                </div>
            </div>

            <div className={styles.tweet_section_bottom}>
                <div className={styles.tweet_display}>
                    <div className={styles.tweet_display_top}>
                        <div>
                            <FontAwesomeIcon className={styles.user_icon} icon={faUser} />
                        </div>
                        <div className={styles.user_infos}>
                            <p>firstname</p>
                            <p className={styles.user_infos_username}>@username</p>
                            <p className={styles.user_infos_date}>date</p>
                        </div>
                    </div>
                    <div className={styles.tweet_display_middle}>
                        <p>Welcome to #hackatweet guys "emoji"</p>
                    </div>
                    <div className={styles.tweet_display_bottom}>
                        <FontAwesomeIcon icon={faHeart} className={styles.heart_icon}/>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;