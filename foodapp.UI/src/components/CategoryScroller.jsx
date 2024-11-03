import React, { useRef, useState } from 'react';
import styles from './categoryscroller.module.css';

    export default function CategoryScroller({ selectedItem, setSelectedItem }) {
    const scrollContainerRef = useRef(null);
    const [expandStatus, setExapndStatus] = useState(true)

    function scrollLeft() {
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -140,
                behavior: 'smooth',
            });
        }
    }

    function scrollRight() {
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 140,
                behavior: 'smooth',
            });
        }
    }

    function handleSelectedCategory(name, index) {
        setSelectedItem(name);
    }

    function handleExpandCategories() {
        setExapndStatus(!expandStatus)

        if(scrollContainerRef.current) {
            scrollContainerRef.current.show({
                display: 'inline-block'
            });
        }
    }

    const category = [
        { name: 'burgers'},
        { name: 'noodles'},
        { name: 'rice'},
        { name: 'pizza'},
        { name: 'sawan'},
        { name: 'sandwiches'},
        { name: 'kottu'},
        { name: 'biriyani'},
        { name: 'pasta'},
    ]

  return (
    <div className={styles.container}>
        <span className={styles.expandBtn} onClick={handleExpandCategories}>{ expandStatus==true? 'Expand?': 'Collapse?'}</span>
        <div className={styles.wrapper}>
            <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={`${styles.itemScroller} ${expandStatus ? '' : styles.itemVisibity}`} onClick={scrollLeft}/>
            <div className={`${styles.horizontalItems} ${expandStatus ? '' : styles.wrapItems}`}  ref={scrollContainerRef}>
                { category.map((item, index)=>(
                    <li key={index} className={`${styles.item} ${selectedItem == item.name?styles.activeItem: ''}`} onClick={()=>handleSelectedCategory(item.name, index)}>{item.name}</li>
                ))}
            </div>
            <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={`${styles.itemScroller} ${expandStatus ? '' : styles.itemVisibity}`} onClick={scrollRight}/>
        </div>
    </div>
  )
}
