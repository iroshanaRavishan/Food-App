import React, { useState } from 'react';
import styles from './foodfiltermodal.module.css';
import PriceRangeFilter from './PriceRangeFilter';
import DeliveryTimeFilter from './DeliveryTimeFilter';
import CategoryFilter from './CategoryFilter';
import CustomerRatingFilter from './CustomerRatingFilter';

export default function FoodFilterModal({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState();
  const [minMax, setMinMax] = useState({ min: 0, max: 1000 });
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [custoerReviewStars, setCustomerReviewStars] = useState(null);

  function handleDeliveryTimeSelection(selectedValue) {
    setDeliveryTime(selectedValue);
  };

  function handleCustomerReviewSelection(selectedValue) {
    setCustomerReviewStars(selectedValue);
  }

  function handleFilter() {
    console.log("category - ", selectedCategory)
    console.log("price range - ", minMax)
    console.log("delivery Time - ", deliveryTime)
    console.log("review - ", custoerReviewStars)
  }

  return (
    <div className={styles.popupContent}>
      <h3 className={styles.modalHeading}>Filters</h3>

      <div className={styles.container}>
        <div className={styles.subHeader}>
          <span>Category</span>
        </div>
        <div className={styles.filterContainer}>
          <CategoryFilter setSelectedCategory={setSelectedCategory}/>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.subHeader}>
          <span>Price</span>
        </div>
        <div className={styles.filterContainer}>
          <PriceRangeFilter minMax={minMax} setMinMax={setMinMax} />
        </div>
      </div>
        
      <div className={styles.container}>
        <div className={styles.subHeader}>
          <span>Max Delivery Time</span>
        </div>
        <div className={styles.filterContainer}>
          <DeliveryTimeFilter onSelectDeliveryTimeFilter={handleDeliveryTimeSelection} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.subHeader}>
          <span>Ratings</span>
        </div>
        <div className={styles.filterContainer}>
          <CustomerRatingFilter onSelectCustomerRatingFilter={handleCustomerReviewSelection} />
        </div>
      </div>
      
      <button className={styles.resultButton}  onClick={handleFilter}>Show 23 results</button>
    </div>
  );
}
