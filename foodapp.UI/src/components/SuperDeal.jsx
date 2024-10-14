import React from 'react'
import styles from './superdeal.module.css'

export default function SuperDeal() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Super Delicious Deal</h1>
            <div className={styles.categories}>
                <div className={styles.categoryRow}>
                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/cryspy-fry-burger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/fandango-burger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/wrangler-burger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/double-cheese-burger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/cheddar-cheese-burger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productCard}>
                            <div className={styles.imageContainer}>
                                <img src="./src/assets/images/howdy-hamburger.png" alt="Wrangler Burger" className={styles.productImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.productTitle}>Wrangler Burger</h2>
                                <p className={styles.productDescription}>
                                Blackened chicken, sauteed onions and peppers smothered with pepper jack and
                                </p>
                                <div className={styles.priceContainer}>
                                <span className={styles.oldPrice}>£590.00</span>
                                <span className={styles.newPrice}>£550.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.sideImage} src="./src/assets/images/rice1-1.png" alt="rice"/>
        </div>
    )
}
