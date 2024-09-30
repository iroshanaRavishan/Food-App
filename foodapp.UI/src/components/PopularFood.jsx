import React from 'react'
import styles from './popularfood.module.css'

export default function PopularFood() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Popular at our restarent</h1>
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
            <img src="./src/assets/images/chip-slice1-1.png" alt="chips"/>
        </div>
    )
}
