import React from "react";
import styles from '../styles/Signup.module.css';
import { useState } from "react";


const Signup = (props) => {

    const [signup_firstname, setsignup_firstname] = useState('');
    const [signup_username, setsignup_username] = useState('');
    const [signup_password, setsignup_password] = useState('');
 

    //remettre les states à vide lorsqu'on les envoie au reducers ou qu'on les submit 
    const remove_signup_modal = () => {
        props.set_signup_modal(false);
    }

    return(
        <div className={styles.signup_container}>
            <div onClick={() => remove_signup_modal()} className={styles.delete_button_container}>
                <p className={styles.p}>X</p>
            </div>
            
            <div className={styles.form_container}>
                <img className={styles.logo} src="logo.png" alt="twitter logo"></img>
                <p className={styles.create_account_p}>Create your hackatweet account</p>
                <div className={styles.input_container}>
                    <input onChange={(e) => setsignup_firstname(e.target.value)} className={styles.input} placeholder="Firstname"></input>
                    <input onChange={(e) => setsignup_username(e.target.value)} className={styles.input} placeholder="Username"></input>
                    <input onChange={(e) => setsignup_password(e.target.value)} className={styles.input} placeholder="Password"></input>
                </div>
                <button className={styles.signup_button} >Sign Up</button>
            </div>
        </div>
    )
}


export default Signup;