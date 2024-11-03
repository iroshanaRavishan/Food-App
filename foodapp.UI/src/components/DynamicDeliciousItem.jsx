import React, {useState, useEffect} from 'react';
import styles from './dynamicdeliciousitem.module.css';

export default function DynamicDeliciousItem() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [deliciousItem, setDeliciousItem] = useState([]);

  useEffect(() => {
    const fetchDeliciousItems = async () => {
      try {
        const response = await fetch('./src/assets/data/deliciousProductData.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setDeliciousItem(data);
      } catch (error) {
        console.error("Error loading deliciousItem data:", error);
      }
    };

    fetchDeliciousItems();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % deliciousItem.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, deliciousItem.length]);

  return (
    <div className={styles.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.slide} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        { deliciousItem.map((item, index) => (
          <div key={index} className={styles.productCard}>
            <h3 className={styles.heading}>Combo Pack</h3>
              <div className={styles.imageContainer}>
                  <img src={item.image} className={styles.productImage} />
              </div>
              <div className={styles.cardContent}>
                  <h2 className={styles.productTitle}>{item.name}</h2>
                  <p className={styles.productDescription}>
                    {item.description}
                  </p>
                  <div className={styles.priceContainer}>
                    <span className={styles.oldPrice}>Rs.{item.oldPrice}</span>
                    <span className={styles.newPrice}>Rs.{item.newPrice}</span>
                  </div>
              </div>
              <div className={styles.buttonContainer}>
                <button>order now</button>
              </div>
          </div>
          ))}
        </div>
      </div>
  )
}
