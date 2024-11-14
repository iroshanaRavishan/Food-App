import React, { useRef, useState } from 'react';
import styles from './categoryscroller.module.css';

    export default function CategoryScroller({ selectedCategory, setSelectedCategory }) {
    const scrollContainerRef = useRef(null);
    const [expandStatus, setExapndStatus] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(1);

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
        setSelectedCategory(name);
        setSelectedIndex(index)
    }

    function handleExpandCategories() {
        setExapndStatus(!expandStatus);
        
        if (!expandStatus) {
            if (selectedIndex > 4 )
            gradualScroll();
        }
    }
    
    function gradualScroll() {
        if (scrollContainerRef.current) {
            for (let index = 0; index < selectedIndex-4; index++) {
                setTimeout(() => {
                    scrollContainerRef.current.scrollBy({
                        left: 140 * (selectedIndex - 4),
                        behavior: 'smooth',
                    });
                }, index * 10);
            }
        }
    }
    
    const category = [
        { name: 'burgers', keyPosition: 1},
        { name: 'noodles', keyPosition: 2},
        { name: 'rice', keyPosition: 3},
        { name: 'pizza', keyPosition: 4},
        { name: 'sawan', keyPosition: 5},
        { name: 'sandwiches', keyPosition: 6},
        { name: 'kottu', keyPosition: 7},
        { name: 'biriyani', keyPosition: 8},
        { name: 'pasta', keyPosition: 9},
        { name: 'gee-rice', keyPosition: 10},
    ]

  return (
    <div className={styles.container}>
        <span className={styles.expandBtn} onClick={handleExpandCategories}>{ expandStatus==true? 'Expand?': 'Collapse?'}</span>
        <div className={styles.wrapper}>
            <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={`${styles.itemScroller} ${expandStatus ? '' : styles.itemVisibity}`} onClick={scrollLeft}/>
            <div className={`${styles.horizontalItems} ${expandStatus ? '' : styles.wrapItems}`}  ref={scrollContainerRef}>
                { category.map((item, index)=>(
                    <li key={index} className={`${styles.item} ${selectedCategory == item.name?styles.activeItem: ''}`} onClick={()=>handleSelectedCategory(item.name, item.keyPosition)}>{item.name}</li>
                ))}
            </div>
            <img src="./src/assets/images/right-arrow-dark.png" alt="prev arrow" className={`${styles.itemScroller} ${expandStatus ? '' : styles.itemVisibity}`} onClick={scrollRight}/>
        </div>
    </div>
  )
}
