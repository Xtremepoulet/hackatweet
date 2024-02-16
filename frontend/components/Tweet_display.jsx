import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Tweet_display.module.css';
import moment from 'moment';
import { useState } from "react";
import { useSelector } from "react-redux";


const Tweet_display = (props) => {

    const token = useSelector((state) => state.users.value.token);
    const username = useSelector((state) => state.users.value.username)

    const [like, setlike] = useState(0)


    const deleting_tweet = async () => {

        const fetching_data = await fetch(`http://localhost:3000/users/isConnected/${token}`);
        const user_data = await fetching_data.json();

        if(user_data.result){
            props.delete_tweet(props.username, props.firstname, props.message, token);
        }
    }


    const like_tweet = () => {
        if(like > 0){
            setlike(like - 1);
        }else {
            setlike(like + 1);
        }
    }


    console.log(like)
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
            <FontAwesomeIcon onClick={() => like_tweet()} icon={faHeart} className={styles.heart_icon}/>
            <p>0</p>
            <FontAwesomeIcon onClick={() => deleting_tweet()} className={styles.trash_icon} icon={faTrash} />
        </div>
    </div>
    );
}


export default Tweet_display;