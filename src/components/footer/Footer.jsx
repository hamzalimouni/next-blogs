import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className=''>&copy; 2024 Hamzamia. Inc. All rights reserved.</div>
            <div className={styles.socialmedia}>
                <Image src="/1.png" alt='Hamzamia facbook account' width={20} height={20} className={styles.icon} />
                <Image src="/2.png" alt='Hamzamia instagram account' width={20} height={20} className={styles.icon} />
                <Image src="/3.png" alt='Hamzamia x account' width={20} height={20} className={styles.icon} />
                <Image src="/4.png" alt='Hamzamia youtube account' width={20} height={20} className={styles.icon} />
            </div>
        </div>
    )
}

export default Footer