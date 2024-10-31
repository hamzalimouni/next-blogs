import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

const Button = ({title, url}) => {
    return (
        <Link href={url}>
            <button className={styles.container}>{title}</button>
        </Link>
    )
}

export default Button