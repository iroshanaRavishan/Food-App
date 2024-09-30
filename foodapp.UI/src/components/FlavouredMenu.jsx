import React from 'react'
import styles from './flavouredmenu.module.css'

export default function FlavouredMenu() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Flavoured Menus</h1>
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
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item4</div>
            </div>
        </div>
        <img src="./src/assets/images/burger2-1.png" alt="burger"/>
    </div>
  )
}
