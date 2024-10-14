import React from 'react'
import styles from './categories.module.css'

export default function Categories() {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Our Categories</h1>
        <div className={styles.categories}>
            <div className={styles.categoryRow}>
                {/* <div className={styles.item}>item2</div> */}

                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/pizza-cate.png" alt="Pizza Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Pizza</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/rice-cate.png" alt="Rice Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Rice</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/burger-cate.png" alt="Burger Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Burgers</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/shakes-cate.png" alt="Shakes Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Shakes</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/sandwich-cate.png" alt="Sandwich Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Sandwiches</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/pasta-cate.png" alt="Pasta Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Pasta</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/desserts-cate.png" alt="Dessert Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Desserts</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/noodles-cate.png" alt="Noodles Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Noodles</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/koththu-cate.jpg" alt="Koththu Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Koththu</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.card}>
                      <img src="./src/assets/images/soup-cate.png" alt="Soup Image" className={styles.cardImage}/>
                      <div className={styles.cardContent}>
                          <h2 className={styles.cardTitle}>Soups</h2>
                          <p className={styles.cardSubtitle}>15 Restaurants Products</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <img className={styles.sideImage} src="./src/assets/images/burger3-1.png" alt="burger"/>
    </div>
  )
}
