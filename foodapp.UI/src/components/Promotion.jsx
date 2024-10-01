import React from 'react'
import styles from './promotion.module.css'

export default function Promotion() {
  return (
        <div className={styles.container}>
            <h1 className={styles.header}>Promotions</h1>
            <div className={styles.cardContainer}>
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
