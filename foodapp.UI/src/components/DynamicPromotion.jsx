import React from 'react';
import styles from './dynamicpromotion.module.css';

export default function DynamicPromotion() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <img src="./src/assets/images/double-cheese-burger.png" alt="dynamic promotion image"/>
            </div>
            <div className={styles.rightSection}>
                <h1>The Best Burger in City in Best Price</h1>
                <div className={styles.offer}>
                    <h2>Special <br /> Offer</h2>
                    <div className={styles.discount}>50% OFF</div>
                </div>
                <div className={styles.orderSection}>
                    <p className={styles.ctaText}>It could be Your</p>
                    <button className={styles.orderBtn}>Order Now</button>
                </div>
            </div>
        </div>
    )
}
