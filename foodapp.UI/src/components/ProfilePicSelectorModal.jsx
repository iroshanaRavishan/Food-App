import React, { useRef, useState } from 'react'
import styles from './profilepicselectormodal.module.css'

export default function ProfilePicSelectorModal({ onDataSend }) {

  const [isVisible, setIsVisible] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [fileName, setFileName] = useState("");
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

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (loadEvent) {
        setProfileImg(loadEvent.target.result);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };

  function handleCloseSelectedImage () {
    setProfileImg("");
    setFileName("");
  }

  return (
      <div>
          <span onClick={handleOpen} className={styles.openBtn}>Profile Picture?</span>
          { isVisible && (
              <div className={styles.popupOverlay} ref={modalRef} onClick={closeModal}>
                  <div className={styles.popupContent}>
                      <img src='./src/assets/images/cancel.png' onClick={handleClose} className={styles.closeBtn}/>

                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>
                      <img className="profile-picture" src="./src/assets/images/profile.jpg" alt="profile-avatar" onClick={sendDataToParent}/>


                      <span className={styles.avatarSeparator}>or</span>

                      <div className={styles.fileUploader}>
                        <label htmlFor="fileUpload" className={styles.chooseBtn}> Choose File</label>
                        <input type="file" id="fileUpload" accept="image/*" className={styles.fileInput} onChange={handleFileUpload} />

                        { profileImg ? 
                          <div>
                              <img src='./src/assets/images/cancel.png' className='cancel-profile-picture' onClick={handleCloseSelectedImage}  />
                              <img className="profile-picture" src={profileImg} alt="profile-avatar" />
                          </div> : 
                          <div>
                            <img src='./src/assets/images/disabled-cancel.png' className='cancel-profile-picture' />
                            <img className="profile-picture" src="./src/assets/images/sample-user.png" alt="profile-avatar"/>
                          </div>
                        }
                      </div>
                      <div className={styles.imageUploadingArea}>
                        <div>
                          { fileName && <span style={{fontWeight : "700", fontSize: "14px"}}>Want to upload this <br /> image?</span> }<br />
                          <span className={styles.imageName}>{fileName}</span> 
                        </div>
                        { fileName && <div className={styles.uploadBtn} onClick={sendDataToParent}>
                          <img src="./src/assets/images/active-upload.png" className={styles.blinkingImage} alt="active-upload"/>
                          <span>Click to save</span>
                        </div>
                        }
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}
