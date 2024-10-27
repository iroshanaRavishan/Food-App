import React from 'react';
import styles from './selectioncontrolpanel.module.css';

export default function SelectionControlPanel() {
  return (
    <div className={styles.container}>
        <h3 className={styles.heading}>Your Choice</h3>
        <div className={styles.items}>
            <li className={styles.item}><img src="./src/assets/images/menu.png" alt="menu-list" />Menu</li> 
            <li className={styles.item}><img src="./src/assets/images/filter.png" alt="filter" />Filter</li>
            <li className={styles.item}><img src="./src/assets/images/sort.png" alt="sort" />Sort</li>
        </div>
    </div>
  )
}
