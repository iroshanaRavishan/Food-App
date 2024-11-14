import React from 'react'
import styles from './featuredsection.module.css';
import TodaysSpecialCard from './TodaysSpecialCard';
import Promotion from './Promotion';

export default function FeaturedSection() {
  return (
        <div className={styles.container}>
            <div className={styles.backDropImage}></div>
            <div className={styles.innerContaner}>
                <TodaysSpecialCard />
                <Promotion />
            </div>
        </div>
    )
}
