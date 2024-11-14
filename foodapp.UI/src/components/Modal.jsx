import React from 'react';
import styles from './modal.module.css';

export default function Modal({ children, show, onClose }) {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img src='./src/assets/images/cancel.png' onClick={onClose} className={`closeBtn ${styles.modalCloseBtn}`}/> 
        {React.Children.map(children, child => 
          React.isValidElement(child) ? React.cloneElement(child, { onClose }) : child
        )}
      </div>
    </div>
  );
};
