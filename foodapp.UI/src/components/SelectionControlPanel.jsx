import React, { useState } from 'react';
import styles from './selectioncontrolpanel.module.css';
import FoodFilterModal from './FoodFilterModal';
import Modal from './Modal';

export default function SelectionControlPanel() {
  const [activeItem, setActiveItem] = useState('Menu');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 

  function handleItemClick(item) {
    setActiveItem(item);
  };

  function handleOpenModal() {
    setIsFilterModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Your Choice</h3>
      <ul className={styles.items}>
        <li className={`${styles.item} ${activeItem === 'Menu' ? styles.active : ''}`} onClick={() => handleItemClick('Menu')}>
          <img src="./src/assets/images/menu.png" alt="menu-list" /> Menu
        </li>
        <li className={`${styles.item} ${activeItem === 'Filter' ? styles.active : ''}`} onClick={() => { handleItemClick('Filter'); handleOpenModal() }}>
          <img src="./src/assets/images/filter.png" alt="filter" />Filter
        </li>
        <li className={`${styles.item} ${activeItem === 'Sort' ? styles.active : ''}`} onClick={() => handleItemClick('Sort')} >
          <img src="./src/assets/images/sort.png" alt="sort" />Other
        </li>
      </ul>
      <Modal show={isFilterModalOpen} onClose={() => {setIsFilterModalOpen(false); setActiveItem('Menu');}}>
        <FoodFilterModal /> 
      </Modal>
    </div>
  );
}
