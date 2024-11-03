import React from 'react';
import styles from './maindisplayfooditem.module.css';
import { useState } from 'react';

const burgers = [
    { name: 'Classic Cheeseburger', price: 180, foodImage: './src/assets/images/biryani.jpg' },
    { name: 'Spicy Jalapeño Burger', price: 220, foodImage: './src/assets/images/shawarma-popular.jpg' },
    { name: 'BBQ Bacon Burger', price: 250, foodImage: './src/assets/images/biryani.jpg' },
    { name: 'Mushroom Swiss Burger', price: 230, foodImage: './src/assets/images/biryani.jpg' },
    { name: 'Avocado Ranch Burger', price: 240, foodImage: './src/assets/images/shawarma-popular.jpg' },
    { name: 'Double Decker Burger', price: 280, foodImage: './src/assets/images/biryani.jpg' },
    { name: 'Texas BBQ Burger', price: 260, foodImage: './src/assets/images/shawarma-popular.jpg' },
    { name: 'Veggie Delight Burger', price: 190, foodImage: './src/assets/images/shawarma-popular.jpg' },
    { name: 'Chipotle Black Bean Burger', price: 200, foodImage: './src/assets/images/biryani.jpg' },
    { name: 'Crispy Chicken Burger', price: 210, foodImage: './src/assets/images/biryani.jpg' }
];

export default function MainDisplayFoodItem() {
    
    const [isExpanded, setIsExpanded] = useState(Array(burgers.length).fill(false));
    const [count, setCount] = useState(Array(burgers.length).fill(1));

    const text = "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a special burger sauce. with red chillie with many more decorated basmathi rice plus yellow rice";
  
    function toggleReadMore(index) {
        setIsExpanded((prevExpanded) => {
            const updatedExpanded = [...prevExpanded];
            updatedExpanded[index] = !updatedExpanded[index];
            return updatedExpanded;
        });
    }

    function handleIncreaseCount(index) {
        setCount((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] += 1;
            return updatedCounts;
        });
    }

    function handleDecreaseCount(index) {
        setCount((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] = Math.max(1, updatedCounts[index] - 1);
            return updatedCounts;
        });
    }

    const shouldTruncate = text.length > 100;

    return (
        <div>
            {burgers.map((burger, index) => (
                <div key={index} className={styles.cardContainer}>
                    <div className={styles.imageContainer}>
                        <img src={burger.foodImage} alt={burger.name} className={styles.productImage} />
                    </div>
                    <div className={styles.productDetail}>
                        <div className={styles.productDescription}>
                            <h3>{burger.name}</h3>
                            <div className={styles.readMore}>
                                {shouldTruncate && !isExpanded[index] ? `${text.substring(0, 65)}` : text}
                                {shouldTruncate && (
                                    <span 
                                        className={styles.toggleButton} 
                                        onClick={() => toggleReadMore(index)}
                                    >
                                        {isExpanded[index] ? " Read less" : " ...Read more"}
                                    </span>
                                )}
                            </div>
                            <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>Rs.{burger.price + 50}</span>
                                <span className={styles.newPrice}>Rs.{burger.price}</span>
                            </div>
                        </div>
                        <div className={styles.actionButtons}>
                            <div className={styles.itemAmout}>
                                <img 
                                    src="./src/assets/images/subtract.png" 
                                    alt="Decrease amount" 
                                    className={styles.amountSelector} 
                                    onClick={() => handleDecreaseCount(index)}
                                />
                                <span>{count[index]}</span>
                                <img 
                                    src="./src/assets/images/plus.png" 
                                    alt="Increase amount" 
                                    className={styles.amountSelector} 
                                    onClick={() => handleIncreaseCount(index)}
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
