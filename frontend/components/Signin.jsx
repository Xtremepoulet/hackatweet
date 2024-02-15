import React from "react";
import styles from '../styles/Signin.module.css';
import { useState } from "react";


const Signin = (props) => {

    const [signin_username, setsignin_username] = useState('');
    const [signin_password, setsignin_password] = useState('');
 

    //remettre les states à vide lorsqu'on les envoie au reducers ou qu'on les submit 
    const remove_signin_modal = () => {
        props.set_signin_modal(false);
    }

    return(
        <div className={styles.signin_container}>
            <div onClick={() => remove_signin_modal()} className={styles.delete_button_container}>
                <p className={styles.p}>X</p>
            </div>

            <div className={styles.form_container}>
                <img className={styles.logo} src="logo.png" alt="twitter logo"></img>
                <p className={styles.create_account_p}>Connect to hackatweet</p>
                <div className={styles.input_container}>
                    <input onChange={(e) => setsignin_username(e.target.value)} className={styles.input} placeholder="Username"></input>
                    <input onChange={(e) => setsignin_password(e.target.value)} className={styles.input} placeholder="Password"></input>
                </div>
                <button className={styles.signin_button} >Sign In</button>
            </div>
        </div>
    )
}


export default Signin;