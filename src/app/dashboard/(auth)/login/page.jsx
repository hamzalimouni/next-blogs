"use client"
import React, {useEffect, useState} from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [err, setErr] = useState(false);
    const session = useSession();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        signIn("credentials", {email, password});
    }

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [session.status, router]);

    if(session.status === 'loading'){
        return <div>Loading...</div>
    }

    if(session.status === "unauthenticated"){
        return (
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="email" placeholder='Email' className={styles.input} required />
                    <input type="password" placeholder='Password' className={styles.input} required />
                    <button  type="submit" className={styles.button}>Login</button>

                </form>
                {err && <span className={styles.error}>Something went wront!</span>}
                <button onClick={() => signIn("google")}>Login with google</button>
            </div>
        )
    }
}

export default Login