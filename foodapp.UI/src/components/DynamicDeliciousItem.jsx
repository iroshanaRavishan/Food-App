import React from 'react';
import styles from './dynamicdeliciousitem.module.css';

export default function DynamicDeliciousItem() {
  return (
    <div className={styles.productCard}>
      <h3 className={styles.heading}>Combo Pack</h3>
        <div className={styles.imageContainer}>
            <img src="./src/assets/images/cryspy-fry-burger.png" alt="Wrangler Burger" className={styles.productImage} />
        </div>
        <div className={styles.cardContent}>
            <h2 className={styles.productTitle}>Wrangler Burger</h2>
            <p className={styles.productDescription}>
              Blackened chicken, sauteed onions and peppers smothered with pepper jack and
            </p>
            <div className={styles.priceContainer}>
              <span className={styles.oldPrice}>£590.00</span>
              <span className={styles.newPrice}>£550.00</span>
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <button>order now</button>
        </div>
    </div>
  )
}
