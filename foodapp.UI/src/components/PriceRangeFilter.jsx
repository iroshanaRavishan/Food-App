import React, { useEffect, useState } from 'react';
import styles from './pricerangefilter.module.css';

export default function PriceRangeFilter({ minMax, setMinMax }) {

  const [range, setRange] = useState({ minRange: minMax.min, maxRange: minMax.max});
  const minPrice = 0;
  const maxPrice = 1000;

  useEffect(() => {
    setMinMax({ min: range.minRange, max: range.maxRange  });
  }, [range]);
  
  function handleMinValue(e) {
    const newMin = Math.min(Number(e.target.value), range.maxRange - 2);
    setRange((prev) => ({ ...prev, minRange: newMin }));
  }
  
  function handleMaxValue(e) {
    const newMax = Math.max(Number(e.target.value), range.minRange + 2);
    setRange((prev) => ({ ...prev, maxRange: newMax }));
  }

  return (
    <div className={styles.priceRangeFilter}>
      <p className={styles.descriptionAtPrice}>Use slider or enter min and max price</p>

      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={range.minRange}
          onChange={handleMinValue}
          className={`${styles.thumb} ${styles.thumbMin}`}
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={range.maxRange}
          onChange={handleMaxValue}
          className={`${styles.thumb} ${styles.thumbMax}`}
        />
        <div
          className={styles.sliderTrack}
          style={{
            left: `${((range.minRange - minPrice) / (maxPrice - minPrice)) * 100}%`,
            width: `${((range.maxRange - range.minRange) / (maxPrice - minPrice)) * 100}%`,
          }}
        ></div>
      </div>
      <div className={styles.rangeValues}>
        <span>Min: Rs.{range.minRange}</span>
        <span>Max: Rs.{range.maxRange}</span>
      </div>
    </div>
  );
}
