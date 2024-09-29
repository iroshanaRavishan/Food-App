import React from 'react'
import styles from './hotestitem.module.css'

export default function HotestItem() {
  return (
    <div>
        <div className={styles.pizzaNewarea}>
            <div className={styles.pizzaContent}>
                Content goes here...
            </div>
            <div className={styles.pizzaImages}>
                Image goes here...
            </div>
        </div>
    </div>
  )
}
