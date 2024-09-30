import React from 'react'
import styles from './superdeal.module.css'

export default function SuperDeal() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Super Delicious Deal</h1>
            </div>
            <div className={styles.categories}>
                <div className={styles.categoryRow}>
                    <div className={styles.item}>
                        item1
                    </div>
                    <div className={styles.item}>
                        item1
                    </div>
                    <div className={styles.item}>
                        item1
                    </div>


                    <div className={styles.item}>
                        item1
                    </div>
                    <div className={styles.item}>
                        item1
                    </div>
                    <div className={styles.item}>
                        item1
                    </div>
                </div>
            </div>
            <img src="./src/assets/images/rice1-1.png" alt="rice"/>
        </div>
    )
}
