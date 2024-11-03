import React, { useState } from 'react';
import styles from './selectioncontrolpanel.module.css';

export default function SelectionControlPanel() {
  const [activeItem, setActiveItem] = useState('Menu');

  function handleItemClick(item) {
    setActiveItem(item);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Your Choice</h3>
      <ul className={styles.items}>
        <li className={`${styles.item} ${activeItem === 'Menu' ? styles.active : ''}`} onClick={() => handleItemClick('Menu')}>
          <img src="./src/assets/images/menu.png" alt="menu-list" /> Menu
        </li>
        <li className={`${styles.item} ${activeItem === 'Filter' ? styles.active : ''}`} onClick={() => handleItemClick('Filter')}>
          <img src="./src/assets/images/filter.png" alt="filter" />Filter
        </li>
        <li className={`${styles.item} ${activeItem === 'Sort' ? styles.active : ''}`} onClick={() => handleItemClick('Sort')} >
          <img src="./src/assets/images/sort.png" alt="sort" />Sort
        </li>
      </ul>
    </div>
  );
}
