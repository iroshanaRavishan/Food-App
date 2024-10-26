import React, { useEffect } from 'react';
import styles from './hotestitem.module.css';

export default function HotestItem() {
  useEffect(() => {
    const handleScroll = () => {
      const pizzaImage = document.querySelector(`.${styles.pizzaImage}`);
      const parallaxImage1  = document.querySelector(`.${styles.parallaxImage1}`);
      const parallaxImage2  = document.querySelector(`.${styles.parallaxImage2}`);
      const parallaxImage3  = document.querySelector(`.${styles.parallaxImage3}`);
      const parallaxImage4  = document.querySelector(`.${styles.parallaxImage4}`);
      const parallaxImage5  = document.querySelector(`.${styles.parallaxImage5}`);
      const parallaxImage6  = document.querySelector(`.${styles.parallaxImage6}`);
      if (pizzaImage) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * -0.05;
        const rotateDeg = scrollPosition * 0.01; 
        pizzaImage.style.transform = `translateY(${translateY}px) rotate(${rotateDeg}deg)`;
      }
            
      if (parallaxImage1) {
        const scrollPosition = window.scrollY;
        parallaxImage1.style.transform = `translateY(${scrollPosition * -0.6}px)`;
      }
            
      if (parallaxImage2) {
        const scrollPosition = window.scrollY;
        parallaxImage2.style.transform = `translateY(${scrollPosition * -0.25}px)`;
      }
      
      if (parallaxImage3) {
        const scrollPosition = window.scrollY;
        parallaxImage3.style.transform = `translateY(${scrollPosition * -0.3}px)`;
      }
      
      if (parallaxImage4) {
        const scrollPosition = window.scrollY;
        parallaxImage4.style.transform = `translateY(${scrollPosition * -0.35}px)`;
      }
      
      if (parallaxImage5) {
        const scrollPosition = window.scrollY;
        parallaxImage5.style.transform = `translateY(${scrollPosition * -0.2}px)`;
      }
      
      if (parallaxImage6) {
        const scrollPosition = window.scrollY;
        parallaxImage6.style.transform = `translateY(${scrollPosition * -0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1><span>always</span><br /> the hottest <br /> pizza</h1>
        </div>
        <div className={styles.description}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, ducimus quos earum 
            perferendis labore, veritatis expedita cumque.
          </p>
        </div>
        <button className={styles.getButton}>get pizza</button>
      </div>
      <div className={styles.mainImage}>
        <img className={styles.pizzaBox} src="./src/assets/images/pizza-box.png" alt="pizza-box"/>
      </div>
      <div className={styles.pizzaImage}></div>
      <div className={styles.parallaxImage1}></div>
      <div className={styles.parallaxImage2}></div>
      <div className={styles.parallaxImage3}></div>
      <div className={styles.parallaxImage4}></div>
      <div className={styles.parallaxImage5}></div>
      <div className={styles.parallaxImage6}></div>
    </div>
  );
}
