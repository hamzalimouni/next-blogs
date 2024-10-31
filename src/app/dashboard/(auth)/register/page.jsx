"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [err, setErr] = useState(false);
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErr(false);
        const name  = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch(`/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password})
            });
            res.status === 201 && router.push('/dashboard/login?success=Account has been created!');
        } catch (error) {
            setErr(true);
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder='Username' className={styles.input} required />
                <input type="email" placeholder='Email' className={styles.input} required />
                <input type="password" placeholder='Password' className={styles.input} required />
                <button className={styles.button}>Register</button>
            </form>
            {err && <span className={styles.error}>Something went wront!</span>}
            <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
    )
}

export default Register