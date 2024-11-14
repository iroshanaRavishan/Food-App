import React, { useState, useRef } from 'react';
import styles from './sortresult.module.css';

export default function SortResult() {
    const [selectedSort, setSelectedSort] = useState('Our top picks');
    const [openDropdown, setOpenDropdown] = useState(false);
    const modalRef = useRef(null);

    const togglePopup = () => {
      if (!openDropdown) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      setOpenDropdown(!openDropdown);
    };
  
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenDropdown(false);
        document.removeEventListener('mousedown', handleClickOutside); // Cleanup
      }
    };
  
    function handleSelectedOption(e) {
      const option = e.target.id;
      const optionText = e.target.textContent;
      console.log('selected option: ', optionText);
      setSelectedSort(optionText);
      setOpenDropdown(false);
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup
    }

  return (
    <div>
        <div className={styles.sortingContainer} onClick={togglePopup}>
            <div className={styles.imageContainer}>
              <img src="./src/assets/images/sort.png" alt="sort" />
            </div>
            <span className={styles.sortText}><span className={styles.sortBy}>Sort By:</span>{selectedSort} </span>
          </div>
          { openDropdown && (
            <div className={styles.dropdown} ref={modalRef}>
              <ul>
                <li id='0' onClick={handleSelectedOption}>Our top picks</li>
                <li id='1' onClick={handleSelectedOption}>Most popular</li>
                <li id='2' onClick={handleSelectedOption}>Price (lowest first)</li>
                <li id='3' onClick={handleSelectedOption}>Price (highest first)</li>
                <li id='4' onClick={handleSelectedOption}>Delivery time (lowest first)</li>
                <li id='5' onClick={handleSelectedOption}>Delivery time (highest first)</li>
                <li id='6' onClick={handleSelectedOption}>Ratings (lowest first)</li>
                <li id='7' onClick={handleSelectedOption}>Rating (highest first)</li>
              </ul>
            </div>
          )}
    </div>
  )
}
