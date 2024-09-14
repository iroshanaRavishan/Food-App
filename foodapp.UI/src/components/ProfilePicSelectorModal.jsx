import React, { useRef, useState } from 'react'
import styles from './profilepicselectormodal.module.css'

export default function ProfilePicSelectorModal({ onDataSend }) {

  const [isVisible, setIsVisible] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const modalRef = useRef();

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  function closeModal(e) {
    if(modalRef.current === e.target){
        handleClose();
    }
  }

  function sendDataToParent() {
    const newProfileImg = './src/assets/images/profile.jpg';
    setProfileImg(newProfileImg);
    onDataSend(newProfileImg);
    handleClose();
  }

  return (
      <div>
          <span onClick={handleOpen} className={styles.openBtn}>Profile Picture?</span>
          { isVisible && (
              <div className={styles.popupOverlay} ref={modalRef} onClick={closeModal}>
                  <div className={styles.popupContent}>
                      <h2>Pop-Up Window</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta 
                        inventore molestias voluptate accusantium error quae culpa, omnis
                        provident ratione recusandae similique quis harum voluptatem veniam 
                        deserunt non quam aut! Ad.
                        </p>
                        <img style={{width: "90px", height:"60px", cursor: "pointer"}} src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <a onClick={handleClose} className={styles.closeBtn}>X</a>
                  </div>
              </div>
          )}
      </div>
  );
}
