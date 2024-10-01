import React from 'react'
import styles from './todaysspecialcard.module.css'

export default function TodaysSpecialCard() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.todaysSpecial}>
                    <p>todays's special <span>menu</span></p>
                    <img src="./src/assets/images/todays-special-menu.png" alt="todays-special-menu"/>
                    <button>buy now</button>
                </div>
            </div>
        </div>
    )
}
