import React from 'react'
import styles from './hotestitem.module.css'

export default function HotestItem() {
  return (
      <div className={styles.container}>
          <div className={styles.content}>
              Content goes here...
          </div>
          <div className={styles.mainImage}>
              Image goes here...
          </div>
          <img src="./src/assets/images/juice1-1.png" alt="juice-glass"/>
          <div className={styles.burgerImage}></div>
      </div>
  )
}
