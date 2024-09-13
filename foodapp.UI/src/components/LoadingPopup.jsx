import React from 'react';
import styles from "./loadingpopup.module.css"


export default function LoadingPopup() {
    return (
        <div className={styles.overlayContainer}>
            <div className={styles.popupWindow}>
                <p>Logging off! Please wait...</p>
                <div className={styles.loadingSpinner}></div>
            </div>
        </div>
    );
}