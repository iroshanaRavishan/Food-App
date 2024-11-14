import React, { useState, useEffect } from 'react';
import styles from './customerratingfilter.module.css';

export default function CustomerRatingFilter({ onSelectCustomerRatingFilter }) {
  const [selectedStar, setSelectedStar] = useState(3);
  const starRatings = [1, 2, 3, 4, 5];

  function handleSelectedCustomerRating(e) {
    const selectedValue = Number(e.target.value);
    setSelectedStar(selectedValue);
  }

  useEffect(() => {
    if (selectedStar !== null) {
        onSelectCustomerRatingFilter(selectedStar); 
    }
  }, [selectedStar, onSelectCustomerRatingFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.containerItems}>
        {starRatings.map((star) => (
          <React.Fragment key={star}>
            <input 
              type="radio" 
              name="stars" 
              id={`st${star}`} 
              value={star} 
              checked={selectedStar === star}
              onChange={handleSelectedCustomerRating} 
            />
            <label htmlFor={`st${star}`}>
              <div className={styles.starStroke}>
                <div className={styles.starFill}></div>
              </div>
              {/* <div className={styles.labelDescription} data-content={`${star}/5`}></div> */}
            </label>
          </React.Fragment>
        ))}
      </div>
      <span className={styles.starCount}>{selectedStar !== 5 ? `${selectedStar} & up` : '5/5'}</span>
    </div>
  );
}
