import styles from '../styles/Trends.module.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Trends_display from '../components/Trends_display';
import { useDispatch, useSelector } from 'react-redux';




const Trends = () => {

    const update_hashtags = useSelector((state) => state.hashtag.value)

    const [load_hashtag, setload_hashtag] = useState([]);
           

    useEffect(() => {
        
        const hashtag_array = [];

        fetch('http://localhost:3000/hashtag/hashtags')
            .then(response => response.json())
            .then(hashtag => {
                if(hashtag.result){
                    hashtag.hashtags.forEach(hashtag => {
                        hashtag_array.push({hashtag: hashtag});
                    })
                    setload_hashtag(hashtag_array)
                }
            })
    }, [update_hashtags])


    const display_hashtag = load_hashtag.map((data, i) => {
        return <Trends_display key={i} {...data} />
    })
       
    return(
        <div className={styles.trends_container}>
            <div>
                <p className={styles.trends_title}>Trends</p>
            </div>
            
            <div className={styles.trends_display_container}>
                <div className={styles.trending}>
                    {/* il faudra la remplacer par un map pour display les hashtag du moment */}
                    <div className={styles.hashtag}>
                         <p className={styles.hashtag_p}>#Hashtag</p>
                        <p className={styles.tweet_number}>2 tweets</p>
                    </div>
                    {display_hashtag}
                </div>
            </div>
        </div>
    );
}



export default Trends; 