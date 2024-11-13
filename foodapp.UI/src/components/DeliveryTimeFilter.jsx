import React, { useState, useEffect } from 'react';
import styles from './deliverytimefilter.module.css';

export default function DeliveryTimeFilter({ onSelectDeliveryTimeFilter }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const deliveryTimes = [
    { id: 1, label: "<20 mins" },
    { id: 2, label: "~30 mins" },
    { id: 3, label: "~40 mins" },
    { id: 4, label: "~50 mins" },
    { id: 5, label: "~60 mins" },
    { id: 6, label: "90 mins+" },
  ];

  function handleSelection(event) {
    const value = event.target.value;
    setSelectedValue(value);
  }

  useEffect(() => {
    if (selectedValue !== null) {
      onSelectDeliveryTimeFilter(selectedValue); 
    }
  }, [selectedValue, onSelectDeliveryTimeFilter]);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.deliveryTimeSlider}>
        {deliveryTimes.map((time) => (
          <React.Fragment key={time.id}>
            <input
              type="radio"
              name="time-option"
              className={styles.debtOption}
              id={`time-option-${time.id}`}
              value={time.id}
              onChange={handleSelection}
            />
            <label
              className={styles.abcc}
              htmlFor={`time-option-${time.id}`}
              data-time-option={time.label}
            ></label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
