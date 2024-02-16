import React from "react";
import styles from '../styles/Trends.module.css';



const Trends = () => {
    return(
        <div className={styles.trends_container}>
            <div>
                <p className={styles.trends_title}>Trends</p>
            </div>
            
            <div className={styles.trends_display_container}>
                <div className={styles.trending}>
                    {/* il faudra la remplacer par un map pour display les hashtag du moment */}
                    <div className={styles.hashtag}>
                        <p className={styles.hashtag_p}>Hashtag</p>
                        <p className={styles.tweet_number}>2 tweets</p>
                    </div>
                    <div className={styles.hashtag}>
                        <p className={styles.hashtag_p}>Hashtag</p>
                        <p className={styles.tweet_number}>1 tweet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Trends; 