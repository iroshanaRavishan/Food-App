import React from 'react'
import styles from './foodsectionleftarea.module.css';
import SelectionControlPanel from './SelectionControlPanel'
import DynamicPromotion from './DynamicPromotion'

export default function FoodSectionLeftArea() {
  return (
    <div className={styles.container}>
        <SelectionControlPanel />
        <DynamicPromotion />
    </div>
  )
}
