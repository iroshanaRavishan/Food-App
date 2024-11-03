import React, { useEffect, useState } from 'react';
import styles from './dynamicpromotion.module.css';

export default function DynamicPromotion() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        // Load promotion data from JSON file
        const fetchPromotions = async () => {
            try {
                const response = await fetch('./src/assets/data/promotionData.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setPromotions(data);
            } catch (error) {
                console.error("Error loading promotion data:", error);
            }
        };

        fetchPromotions();
    }, []);

    useEffect(() => {
        if (!isHovered && promotions.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % promotions.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, promotions.length]);

    return (
        <div className={styles.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={styles.slide} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {promotions.map((item, index) => (
                <div key={index} className={styles.promotionItem}>
                    <div className={styles.leftSection}>
                        <img src={item.imageUrl} alt="dynamic promotion image"/>
                    </div>
                    <div className={styles.rightSection}>
                        <h1>{item.description}</h1>
                        <div className={styles.offer}>
                            <h2>{item.discountType}</h2>
                            <div className={styles.discount}>{item.discount}% OFF</div>
                        </div>
                        <div className={styles.orderSection}>
                            <p className={styles.ctaText}>It could be Your</p>
                            <button className={styles.orderBtn}>Order Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
