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
                        Il a été révélé qu'Itachi avait en fait reçu l'ordre de tuer tous les Uchiha par les anciens de Konoha. Ils craignaient qu'un nouveau soulèvement des Uchiha ne se produise s'ils n'agissaient pas, et ont donc ordonné à Itachi de tous les tuer. C'est une chose qu'Itachi ne voulait pas faire, mais il n'avait pas le choix.
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
                        Il a été révélé qu'Itachi avait en fait reçu l'ordre de tuer tous les Uchiha par les anciens de Konoha. Ils craignaient qu'un nouveau soulèvement des Uchiha ne se produise s'ils n'agissaient pas, et ont donc ordonné à Itachi de tous les tuer. C'est une chose qu'Itachi ne voulait pas faire, mais il n'avait pas le choix.
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