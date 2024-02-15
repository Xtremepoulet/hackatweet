import React from "react";
import styles from '../styles/Signin.module.css';
import { useState } from "react";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { login } from "../reducers/users";


const Signin = (props) => {

    const dispatch = useDispatch();
    
    const [signin_username, setsignin_username] = useState('');
    const [signin_password, setsignin_password] = useState('');
    
    const router = useRouter();
    //remettre les states à vide lorsqu'on les envoie au reducers ou qu'on les submit 
    const remove_signin_modal = () => {
        props.set_signin_modal(false);
    }


    //fake database
    const handleSignin = async (event) => {
        event.preventDefault();
           
        const fetching_data = await fetch(`http://localhost:3000/users/signin`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username: signin_username, password: signin_password}),
          });

        const user_data = await fetching_data.json();

        if(user_data.result){
            dispatch(login({username: user_data.user.username, firstname: user_data.user.firstname, token: user_data.user.token}))
            router.push('/home_main');
        }else {
            console.log('not good at all')
        }
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
                <button onClick={(e) => handleSignin(e)} className={styles.signin_button} >Sign In</button>
            </div>
        </div>
    )
}


export default Signin;