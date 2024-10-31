import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import ContactImg from '/public/contact.png'
import Button from '@/components/button/Button'

export const metadata = {
    title: "Contact page",
    description: "This is the contact page of Hamza Dev",
};

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src={ContactImg} alt='Hamzamia contact image' fill={true} className={styles.img} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea placeholder="message" cols="30" rows="10" className={styles.textArea}></textarea>
                    <Button title="Send" url="#" />
                </form>
            </div>
        </div>
    )
}

export default Contact