import React, { useState } from 'react';
import styles from './categoryfilter.module.css';

export default function CategoryFilter({ setSelectedCategory }) {

    const categories = [
        { id: 1, label: 'Burgers' },
        { id: 2, label: 'Noodles' },
        { id: 3, label: 'Rice' },
        { id: 4, label: 'Pizza' },
        { id: 5, label: 'Sawan' },
        { id: 6, label: 'Sandwiches' },
        { id: 7, label: 'Kottu' },
        { id: 8, label: 'Biriyani' },
        { id: 9, label: 'Pasta' },
        { id: 10, label: 'Gee-Rice' },
        { id: 11, label: 'Sawan' },    
      ];

    const [selectedId, setSelectedId] = useState(categories[0].id);

    const handleSelect = (id) => {
        setSelectedId(id);
        setSelectedCategory(id)
    };
  return (
        <div className={styles.popupContent}>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    {categories.map((category, index) => (
                        <React.Fragment key={category.id}>
                        <input
                            type="radio"
                            className={styles.hidden}
                            id={category.id}
                            name="inputs"
                            checked={selectedId === category.id}
                            onChange={() => handleSelect(category.id)}
                        />
                        <label className={styles.entry} htmlFor={category.id}>
                            <div className={styles.circle}></div>
                            <div className={styles.entryLabel}>{category.label}</div>
                        </label>
                        </React.Fragment>
                    ))}
                    <div
                        className={styles.highlight}
                        style={{
                        transform: `translate(${categories.findIndex((cat) => cat.id === selectedId) % 2 === 0 ? '0' : '1470%'}, ${
                            Math.floor(categories.findIndex((cat) => cat.id === selectedId) / 2) * 30
                        }px)`,
                        }}
                    ></div>
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </div>
    )
}




