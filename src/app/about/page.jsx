import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/14856606/pexels-photo-14856606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Hamzamia about image"
                    fill={true}
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storyletters</h1>
                    <h2 className={styles.desc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h2>Who Are We?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br />
                        Numquam neque veritatis debitis adipisci recusandae,
                        doloremque maiores inventore incidunt optio sunt ipsa
                        eum voluptatem. Illum veritatis adipisci officia ea corporis facere?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam neque veritatis debitis adipisci recusandae,
                        doloremque maiores inventore incidunt optio sunt ipsa
                        eum voluptatem. Illum veritatis adipisci officia ea corporis facere?
                    </p>
                </div>
                <div className={styles.item}>
                    <h2>Who We Do?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam neque veritatis debitis adipisci recusandae,
                        doloremque maiores inventore incidunt optio sunt ipsa
                        eum voluptatem. Illum veritatis adipisci officia ea corporis facere?
                        <br />
                        <br />
                        <br /> - Dynamic Website <br />
                        <br /> - Fast and Handy <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button title="Contact" url="/contact" />
                </div>
            </div>
        </div>
    )
}

export default About