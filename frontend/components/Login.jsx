import React from "react";
import styles from '../styles/Login.module.css';
import Signup from "./Signup";
import { useState } from "react";
import Signin from "./Signin";

// import Link from 'next/link';


const Login = () => {

    const [signup_is_modal, setsignup_is_modal] = useState(false);
    const [signin_is_modal, setsignin_is_modal] = useState(false);

    
    //modal gestion 
    const modal_style = {'display' : 'none'};
   
    const set_signup_modal = (value) => {
        setsignup_is_modal(value);
      };

    const set_signin_modal = (value) => {
        setsignin_is_modal(value)
    }

    let modal;

    if(signup_is_modal){
        modal_style = {};
        modal = <Signup set_signup_modal={set_signup_modal}/>
    }

    if(signin_is_modal){
        modal_style = {};
        modal = <Signin set_signin_modal={set_signin_modal} />
    }


    return(
        <div className={styles.login_container}>
            <div className={styles.left_login_container}>
                <img className={styles.logo} src="logo.png" alt="twitter logo"></img>
            </div>

                <div className={`${styles.modal}`} style={modal_style}>
                    {modal}
                </div>

            <div className={styles.right_login_container}>
                <div className={styles.login_form}>
                    <div className={styles.title_container}>
                        <h1>See what's happening</h1>
                    </div>
                    <div className={styles.options_container}>
                        <p className={styles.join_p}>Join Hackatweet today.</p>
                        <div className={styles.button_container}>
                            <button onClick={() => setsignup_is_modal(true)} className={styles.signup_button}>Sign up</button>
                            <p className={styles.p}>Already have an account?</p>
                            <button onClick={() => setsignin_is_modal(true)} className={styles.signin_button}>Sign in</button>
                           
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default Login; 