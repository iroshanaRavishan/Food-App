import React from 'react'
import styles from './promotion.module.css'

export default function Promotion() {
  return (
        <div className={styles.container}>
            <h1 className={styles.header}>Promotions</h1>
            <div className={styles.cardContainer}>
                <div className={styles.promotions}>
                    <div className={styles.card}>
                        <div className={styles.leftSection}>
                            <img src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
                        </div>
                        <div className={styles.zigzag}></div> 
                        <div className={styles.dashedLine}></div> 
                        <div className={styles.rightSection}>
                            <h1>The Best Burger in City in Best Price</h1>
                            <div className={styles.offer}>
                                <h2>Special <br /> Offer</h2>
                                <div className={styles.discount}>50% OFF</div>
                            </div>
                            <div className={styles.orderSection}>
                                <p className={styles.ctaText}>It could be Your</p>
                                <button className={styles.orderBtn}>Order Now</button>
                            </div>
                            <div className={styles.contactInfo}>
                                <p>012-3456-789</p>
                                <p>www.yourwebsite.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.leftSection}>
                            <img src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
                        </div>
                        <div className={styles.zigzag}></div> 
                        <div className={styles.dashedLine}></div> 
                        <div className={styles.rightSection}>
                            <h1>The Best Burger in City in Best Price</h1>
                            <div className={styles.offer}>
                                <h2>Special <br /> Offer</h2>
                                <div className={styles.discount}>50% OFF</div>
                            </div>
                            <div className={styles.orderSection}>
                                <p className={styles.ctaText}>It could be Your</p>
                                <button className={styles.orderBtn}>Order Now</button>
                            </div>
                            <div className={styles.contactInfo}>
                                <p>012-3456-789</p>
                                <p>www.yourwebsite.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.leftSection}>
                            <img src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
                        </div>
                        <div className={styles.zigzag}></div> 
                        <div className={styles.dashedLine}></div> 
                        <div className={styles.rightSection}>
                            <h1>The Best Burger in City in Best Price</h1>
                            <div className={styles.offer}>
                                <h2>Special <br /> Offer</h2>
                                <div className={styles.discount}>50% OFF</div>
                            </div>
                            <div className={styles.orderSection}>
                                <p className={styles.ctaText}>It could be Your</p>
                                <button className={styles.orderBtn}>Order Now</button>
                            </div>
                            <div className={styles.contactInfo}>
                                <p>012-3456-789</p>
                                <p>www.yourwebsite.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.leftSection}>
                            <img src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
                        </div>
                        <div className={styles.zigzag}></div> 
                        <div className={styles.dashedLine}></div> 
                        <div className={styles.rightSection}>
                            <h1>The Best Burger in City in Best Price</h1>
                            <div className={styles.offer}>
                                <h2>Special <br /> Offer</h2>
                                <div className={styles.discount}>50% OFF</div>
                            </div>
                            <div className={styles.orderSection}>
                                <p className={styles.ctaText}>It could be Your</p>
                                <button className={styles.orderBtn}>Order Now</button>
                            </div>
                            <div className={styles.contactInfo}>
                                <p>012-3456-789</p>
                                <p>www.yourwebsite.com</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
