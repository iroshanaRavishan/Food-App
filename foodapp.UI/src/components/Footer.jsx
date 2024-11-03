import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.bottomLine}>
                <div className={styles.appDownloadContent}>
                    <h3>Download the app</h3>
                    <div className={styles.downloadOptions}>
                        <img src="./src/assets/images/google-play.png" alt=" play store" />
                        <img src="./src/assets/images/app-store.png" alt=" app store" />
                    </div>
                </div>
                <div className={styles.bottomLineContent}>
                    <div className={styles.bottomLineItem}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconContainer}>
                                <img src="./src/assets/images/clock.png" alt="Delivery Icon" className={styles.icon} />
                            </div>
                            <h3 className={styles.infoTitle}>QUICK DELIVERY</h3>
                            <p className={styles.infoSubtitle}>At a very low cost</p>
                            <p className={styles.infoDescription}>
                                We ensure to bring your orders to your home as early as possible for you to enjoy the freshness.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomLineItem}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconContainer}>
                                <img src="./src/assets/images/customer-support.png" alt="Delivery Icon" className={styles.icon} />
                            </div>
                            <h3 className={styles.infoTitle}>CUSTOMER SUPPORT</h3>
                            <p className={styles.infoSubtitle}>Can us anytime you want</p>
                            <p className={styles.infoDescription}>
                                Customer support is one thing that we value a lot. Can us for any questions/concerns/issues any time.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomLineItem}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconContainer}>
                                <img src="./src/assets/images/cash.png" alt="Delivery Icon" className={styles.icon} />
                            </div>
                            <h3 className={styles.infoTitle}>CASH ON DELIVERY</h3>
                            <p className={styles.infoSubtitle}>No need to pay anything in advance</p>
                            <p className={styles.infoDescription}>
                               You may safely pay the billed amount directly to the delivery person in cash once you receive the order.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.contactInfo}>
                    <h4>CONTACT INFO</h4>
                    <p><span className={styles.topicHilighter}>Address:</span><br /> 148/10, Station Road, Matale, Sri Lanka</p>
                    <p><span className={styles.topicHilighter}>Phone:</span><br /> 0770000000</p>
                    <p><span className={styles.topicHilighter}>Email:</span><br /> info@restaurant.com</p>
                    <p><span className={styles.topicHilighter}>Website:</span><br /> <a href="#">restaurant.com</a></p>
                </div>

                <div className={styles.about}>
                    <h4>ABOUT</h4>
                    <p>Dining at the restaurant at The Valampuri Hotel, Jaffna, is an experience in itself as it comes with a vast array of delicious dishes and delectable treats. The restaurant which is located on the ground floor is a favorite amongst restaurants in Jaffna, with the capacity to accommodate over 60 people.</p>
                    <p>The well-stocked bar which is attached to the restaurant offers you a wide choice of hot and cold beverages as well as signature drinks, cocktails and mocktails. Experience our exceptional bar service while you relax and enjoy the beautiful surroundings of the hotel.</p>
                </div>

                <div className={styles.foodCategories}>
                    <h4>FOOD CATEGORIES</h4>
                    <div className={styles.categoryList}>
                        <a href="#">Biriyanis</a>
                        <a href="#">Naans and Chapathis</a>
                        <a href="#">Appetizers & Salads</a>
                        <a href="#">Burger</a>
                        <a href="#">Chips</a>
                        <a href="#">Waldorf Salad</a>
                        <a href="#">Shawarma</a>
                        <a href="#">Shakes</a>
                        <a href="#">Biriyanies</a>
                        <a href="#">Kottu</a>
                        <a href="#">Bites and Curries</a>
                        <a href="#">Soups</a>
                        <a href="#">Sandwiches</a>
                        <a href="#">Desserts</a>
                        <a href="#">Soft drinks</a>
                        <a href="#">Fried Rice</a>
                        <a href="#">Cakes</a>
                        <a href="#">Rice & Curry</a>
                        <a href="#">Tea & Coffee</a>
                        <a href="#">Snacks</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
