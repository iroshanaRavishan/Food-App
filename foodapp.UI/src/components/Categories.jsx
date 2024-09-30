import React from 'react'
import styles from './categories.module.css'

export default function Categories() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Our Categories</h1>
        </div>
        <div className={styles.categories}>
            <div className={styles.categoryRow}>
                <div className={styles.item}>item1</div>
                <div className={styles.item}>item2</div>
                <div className={styles.item}>item3</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
            </div>
        </div>
        <img src="./src/assets/images/burger3-1.png" alt="burger"/>
    </div>
  )
}
