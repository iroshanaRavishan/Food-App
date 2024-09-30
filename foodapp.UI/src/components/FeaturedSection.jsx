import React from 'react'
import styles from './featuredsection.module.css';

export default function FeaturedSection() {
  return (
        <div className={styles.greenGradient}>
            <div className={styles.backDropImage}></div>
            <h1>promotions</h1>
            <div className={styles.contentContainer}>
                <div className={styles.todaysSpecial}>
                    <p>TODAYS SPECIAL <span>MENU</span></p>
                </div>
                <div className={styles.promotions}>
                    <div className={styles.item}>Promotion goes here...</div>
                    <div className={styles.item}>Promotion goes here...</div>
                    <div className={styles.item}>Promotion goes here...</div>
                    <div className={styles.item}>Promotion goes here...</div>
                </div>
            </div>
        </div>
    )
}
