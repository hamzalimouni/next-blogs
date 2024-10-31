"use client"
import React, {useState} from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        signIn("credentials", {email, password});
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="email" placeholder='Email' className={styles.input} required />
                <input type="password" placeholder='Password' className={styles.input} required />
                <button className={styles.button}>Login</button>
            </form>
            {err && <span className={styles.error}>Something went wront!</span>}
            <button onClick={() => signIn("google")}>Login with google</button>
        </div>
    )
}

export default Login