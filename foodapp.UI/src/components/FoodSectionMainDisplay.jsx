import React, { useState } from 'react';
import styles from './foodsectionmaindisplay.module.css';
import CategoryScroller from './CategoryScroller';
import MainDisplayFoodItem from './MainDisplayFoodItem';
import SortResult from './SortResult';

export default function FoodSectionMainDisplay({ sectionName }) {
  const [selectedCategory, setSelectedCategory] = useState('burgers');

  return (
    <div className={styles.container}>
        <h3 className={styles.heading}>Categories</h3>
        <CategoryScroller setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

        <div className={styles.foodHeadingArea}>
          <div className={styles.subHeaderContainer}>
            <h3 className={styles.subHeading}>{selectedCategory}</h3>
          </div>
          <SortResult />
        </div>

        <MainDisplayFoodItem />
    </div>
  )
}
