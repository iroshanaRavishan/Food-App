import React from 'react';
import styles from './foodsectionrightarea.module.css';
import DynamicDeliciousItem from './DynamicDeliciousItem';

export default function FoodSectionRightArea() {
  return (
    <div className={styles.container}>
        <DynamicDeliciousItem />
        <DynamicDeliciousItem />
    </div>
  )
}
