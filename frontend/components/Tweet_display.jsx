import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Tweet_display.module.css';
import moment from 'moment';




const Tweet_display = (props) => {

    const deleting_tweet = () => {
        props.delete_tweet(props.username, props.firstname, props.message);
    }


    return(
        <div className={styles.tweet_display}>
            <div className={styles.tweet_display_top}>
                <div>
                    <FontAwesomeIcon className={styles.user_icon} icon={faUser} />
                </div>
                <div className={styles.user_infos}>
                    <p>{props.firstname}</p>
                    <p className={styles.user_infos_username}>@{props.username}</p>
                    <p className={styles.user_infos_date}>{moment().startOf(props.date).fromNow()}</p>
                </div>
            </div>
        <div className={styles.tweet_display_middle}>
            <p>{props.message}</p>
        </div>
        <div className={styles.tweet_display_bottom}>
            <FontAwesomeIcon icon={faHeart} className={styles.heart_icon}/>
            <p>0</p>
            <FontAwesomeIcon onClick={() => deleting_tweet()} className={styles.trash_icon} icon={faTrash} />
        </div>
    </div>
    );
}


export default Tweet_display;