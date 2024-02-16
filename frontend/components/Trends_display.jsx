import React from "react";
import styles from '../styles/Trends_display.module.css';


const Trends_display = (props) => {

    return(
        <div className={styles.hashtag}>
            <p className={styles.hashtag_p}>{props.hashtag}</p>
            <p className={styles.tweet_number}>1 tweet</p>
        </div>
    );
}


export default Trends_display;