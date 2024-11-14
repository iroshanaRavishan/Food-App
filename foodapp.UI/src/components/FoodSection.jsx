import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import styles from './foodsection.module.css'
import { formatSectionTitle } from '../utils/titleConverion'; 
import FoodSectionLeftArea from './FoodSectionLeftArea';
import FoodSectionRightArea from './FoodSectionRightArea';
import FoodSectionMainDisplay from './FoodSectionMainDisplay';


export default function FoodSection() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    const formattedString = formatSectionTitle(params.get('section'));

    const images = [
        './src/assets/images/background-1.jpg',
        './src/assets/images/background-2.jpg',
        './src/assets/images/background-3.jpg'
    ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.mainContainer}>
            <ImageSlider images={images} className={styles.imageSlider} />
            <div className={styles.mainTopicArea}>
                <h1>{formattedString}</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, ducimus </span>
            </div>
            <div className={styles.container}>
              <div className={styles.leftSubContainer}>
                <FoodSectionLeftArea />
              </div>
              <div className={styles.middleSubContainer}>
                <FoodSectionMainDisplay sectionName={formattedString}/>
              </div>
              <div className={styles.rightSubContainer}>
                <FoodSectionRightArea />
              </div>
            </div>
        </div>
    );
}
