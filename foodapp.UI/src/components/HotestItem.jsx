import React from 'react'
import styles from './hotestitem.module.css'

export default function HotestItem() {
  return (
      <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1><span>always</span><br /> the hottest <br /> pizza</h1>
                </div>
                <div className={styles.description}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, ducimus quos earum 
                        perferendis labore, veritatis expedita cumque.
                    </p>
                </div>
                <button className={styles.getButton}>get pizza</button>
            </div>
            <div className={styles.mainImage}>
                <img className={styles.pizzaBox} src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
            </div>
            {/* <img className={styles.imageAfterContainer} src="./src/assets/images/juice1-1.png" alt="juice-glass"/> */}
            <div className={styles.pizzaImage}></div>
      </div>
    )
}
