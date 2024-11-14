import React, { useEffect, useState } from 'react';
import styles from './superdeal.module.css';

export default function SuperDeal() {
    const [deliciousItems, setDeliciousItems] = useState([]);

    useEffect(() => {
        const fetchDeliciousItems = async () => {
            try {
                const response = await fetch('./src/assets/data/deliciousProductData.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setDeliciousItems(data);
            } catch (error) {
                console.error("Error loading delicious item data:", error);
            }
        };

        fetchDeliciousItems();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Super Delicious Deal</h1>
            <div className={styles.categories}>
                <div className={styles.categoryRow}>
                    {deliciousItems.map((product) => (
                        <div className={styles.item} key={product.id}>
                            <div className={styles.productCard}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h2 className={styles.productTitle}>{product.name}</h2>
                                    <p className={styles.productDescription}>
                                        {product.description}
                                    </p>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.oldPrice}>{product.oldPrice}</span>
                                        <span className={styles.newPrice}>{product.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img
                className={styles.sideImage}
                src="./src/assets/images/rice1-1.png"
                alt="rice"
            />
        </div>
    );
}
