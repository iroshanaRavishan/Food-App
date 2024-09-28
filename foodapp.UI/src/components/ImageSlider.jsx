import React, { useState, useEffect } from 'react';
import styles from "./imageslider.module.css"

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change time of changing the background image
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.imageSlider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentIndex ? styles.active : ''}
        />
      ))}
    </div>
  );
}
