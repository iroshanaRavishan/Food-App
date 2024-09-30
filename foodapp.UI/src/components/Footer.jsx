import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.bottomLine}>
                <div className={styles.appDownloadContent}>
                    <h3>image goes here</h3>
                </div>
                <div className={styles.bottomLineContent}>
                    <div className={styles.bottomLineItem}>
                        <p>Content goes here...</p>
                    </div>
                    <div className={styles.bottomLineItem}>
                        <p>Content goes here...</p>
                    </div>
                    <div className={styles.bottomLineItem}>
                        <p>Content goes here...</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.contactInfo}>
                    <p>Content goes here...</p>
                </div>
                <div className={styles.about}>
                    <p>Content goes here...</p>
                </div>
                <div className={styles.foodCategories}>
                    <p>Content goes here...</p>
                </div>
            </div>
        </div>
    )
}
