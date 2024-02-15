import React from "react";
import styles from '../styles/Login.module.css';


const Login = () => {
    return(
        <div className={styles.login_container}>
            <div className={styles.left_login_container}>
                <img className={styles.logo} src="logo.png" alt="twitter logo"></img>
            </div>
            
            <div className={styles.right_login_container}>
                <div className={styles.login_form}>
                    <div className={styles.title_container}>
                        <h1>See what's happening</h1>
                    </div>
                    <div className={styles.options_container}>
                        <p className={styles.join_p}>Join Hackatweet today.</p>
                        <div className={styles.button_container}>
                            <button className={styles.signup_button}>Sign up</button>
                            <p className={styles.p}>Already have an account?</p>
                            <button className={styles.signin_button}>Sign in</button>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    );
}


export default Login; 