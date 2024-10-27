import React from 'react'
import { useLocation } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import styles from './foodsection.module.css'
import { formatSectionTitle } from '../utils/titleConverion'; 


export default function FoodSection() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    // const rawString = "top-10-this-week";
    const formattedString = formatSectionTitle(params.get('section'));

    const images = [
        './src/assets/images/background-1.jpg',
        './src/assets/images/background-2.jpg',
        './src/assets/images/background-3.jpg'
      ];

    return (
        <div className={styles.mainContainer}>
            <ImageSlider images={images} className={styles.imageSlider} />
            <div className={styles.mainTopicArea}>
                <h1>{formattedString}</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, ducimus </span>
            </div>
            <div className={styles.container}>
              <div className={styles.leftSubContainer}></div>
              <div className={styles.middleSubContainer}></div>
              <div className={styles.rightSubContainer}></div>
            </div>
        </div>
    );
}
