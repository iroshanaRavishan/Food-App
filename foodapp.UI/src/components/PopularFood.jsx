import React from 'react'
import styles from './popularfood.module.css'

export default function PopularFood() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>At Glance</h1>
            <div className={styles.categories}>
                <div className={styles.subHeaderContainer}>
                    <div className={styles.subHeader}>
                        <h2>Top 10 this week</h2>                        
                    </div> 
                    <div className={styles.pagination}>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={styles.paginationArrow}/>
                        <span className={styles.seeAll}>see all</span>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="next arrow" className={styles.paginationArrow}/>
                    </div>
                </div>
                <div className={styles.categoryRow}>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                </div>

                <div className={styles.subHeaderContainer}>
                    <div className={styles.subHeader}>
                        <h2>More for great price</h2>                        
                    </div> 
                    <div className={styles.pagination}>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={styles.paginationArrow}/>
                        <span className={styles.seeAll}>see all</span>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="next arrow" className={styles.paginationArrow}/>
                    </div>
                </div>
                <div className={styles.categoryRow}>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                </div>

                <div className={styles.subHeaderContainer}>
                    <div className={styles.subHeader}>
                        <h2>today's offers</h2>                        
                    </div> 
                    <div className={styles.pagination}>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={styles.paginationArrow}/>
                        <span className={styles.seeAll}>see all</span>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="next arrow" className={styles.paginationArrow}/>
                    </div>
                </div>
                <div className={styles.categoryRow}>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                        <img src="./src/assets/images/shawarma-popular.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                        <img src="./src/assets/images/shawarma-popular.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                </div>

                <div className={styles.subHeaderContainer}>
                    <div className={styles.subHeader}>
                        <h2>populat at restaurant</h2>                        
                    </div> 
                    <div className={styles.pagination}>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={styles.paginationArrow}/>
                        <span className={styles.seeAll}>see all</span>
                        <img src="./src/assets/images/right-arrow-dark.png" alt="next arrow" className={styles.paginationArrow}/>
                    </div>
                </div>
                <div className={styles.categoryRow}>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                        <img src="./src/assets/images/shawarma-popular.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                        <img src="./src/assets/images/shawarma-popular.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={styles.badge}>FEATURED</div>
                        <div className={styles.availabilityTime}>AVAILABLE TIME<br/>06:21 PM - 10:30 PM</div>
                        <div className={styles.imageContainer}>
                            <img src="./src/assets/images/biryani.jpg" alt="Shawarma Regular" className={styles.productImage}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.productTitle}>Shawarma Regular</h2>
                            <p className={styles.productPrice}>Rs. 950.00</p>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.seeMorecontainer}>
                    <div className={styles.more}>
                        <span>See more</span>
                    </div>
                </div> */}
            </div>
            <img className={styles.sideImage} src="./src/assets/images/chip-slice1-1.png" alt="chips"/>
        </div>
    )
}
