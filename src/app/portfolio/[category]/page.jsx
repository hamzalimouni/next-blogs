import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.catTitle}>{params.category}</h2>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Uchiha Itachi</h2>
                    <p className={styles.desc}>
                        Quel est le secret de Itachi ?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem quia in repellat tenetur praesentium magnam minima, aliquid aspernatur aliquam maxime sapiente iste a similique deleniti nisi impedit. Doloribus, mollitia.
                    </p>
                    <Button title="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/423928/pexels-photo-423928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt='item'
                        className={styles.img}
                        fill={true}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Uchiha Itachi</h2>
                    <p className={styles.desc}>
                        Quel est le secret de Itachi ?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis reprehenderit soluta. Reiciendis ullam quas consequuntur blanditiis sapiente voluptates officia ea possimus illo doloremque temporibus quaerat, perferendis vel dolor a.
                    </p>
                    <Button title="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/423928/pexels-photo-423928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt='item'
                        className={styles.img}
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category