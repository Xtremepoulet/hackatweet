import React from "react";
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Tweet_display from './Tweet_display';

const Tweet = () => {

//il faudra que je recupere les tweets ici dans un map ou alors que je les stocks dans un reducer 
    const username = useSelector((state) => state.users.value.username)
    const firstname = useSelector((state) => state.users.value.firstname)

    const [tweet_value, settweet_value] = useState('');
    const [loading_tweet, setloading_tweet] = useState([]);


    useEffect(() => {

        const tweet_array = [];

        fetch('http://localhost:3000/tweet/all_tweet')
            .then(response => response.json())
            .then(data => {
                if(data.result){
                    data.tweet.forEach(tweet => {
                        tweet_array.push({message: tweet.message, username, firstname})
                    })

                    setloading_tweet(tweet_array)
                }
            })
    }, [])


    const displaying_all_tweet = loading_tweet.map((data, i) => {
        return <Tweet_display key={i} {...data} />
    })
    
    console.log(loading_tweet)
    const send_tweet = async (event) => {
        
        const fetching_data = await fetch('http://localhost:3000/tweet/new', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({firstname: firstname, username: username, message: tweet_value}),
          })
          
          const tweet_data = await fetching_data.json();    
          console.log(tweet_data)

          settweet_value('');
    }

    return(
        <div className={styles.tweet_container}>
            <div className={styles.tweet_section_top}>
                <div className={styles.tweet_section}>
                    <p>Home</p>
                </div>
                <div className={styles.tweet_writing}>   
                    <textarea onChange={(e) => settweet_value(e.target.value)} value={tweet_value} name="" id="" cols="40" rows="1"></textarea>
                </div>
                <div className={styles.send_tweet}>
                    <p>{tweet_value.length}/280</p>
                    <button onClick={() => send_tweet()}>Tweet</button>
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
                {displaying_all_tweet}
                
            </div>
        </div>
    )
}

export default Tweet;