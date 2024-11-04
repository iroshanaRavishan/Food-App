import React, { useState } from 'react';
import styles from './foodsectionmaindisplay.module.css';
import CategoryScroller from './CategoryScroller';
import MainDisplayFoodItem from './MainDisplayFoodItem';

export default function FoodSectionMainDisplay({ sectionName }) {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className={styles.container}>
        <h3 className={styles.heading}>Categories</h3>
        <CategoryScroller setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <h3 className={styles.subHeading}>{selectedItem}</h3>
        <MainDisplayFoodItem />
    </div>
  )
}
