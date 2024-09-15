import React, { useEffect, useRef, useState } from 'react'
import styles from './profilepicselectormodal.module.css'

export default function ProfilePicSelectorModal({ onDataSend, setLocalProfileImg, localProfileImg, fileName, setFileName }) {

  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
  const [images, setImages] = useState([]);
  const [loadingErrr, setLoadingError] = useState("");

  useEffect(() => {
    fetch(`https://localhost:7181/api/defaultProfilePicture/all-with-data`, {
        method: "GET",
        credentials: "include"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to retrieve images');
        }
        return response.json();
    })
    .then(data => {
        const imageList = data.map(image => {
            const imageUrl = `data:${image.contentType};base64,${image.data}`;
            return { id: image.id, url: imageUrl };
        });
        setImages(imageList);
        setLoadingError("");
    })
    .catch(err => {
        console.error("Error fetching images:", err);
        setLoadingError("Something went wrong in loading avatars!");
    });
  }, []);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  function closeModal(e) {
    if(modalRef.current === e.target){
        handleClose();
    }
  }

  function sendDataToParentFromServer(imageUrl) {
    const newProfileImg = imageUrl;
    onDataSend(newProfileImg);
    setLocalProfileImg("");
    setFileName("")
    handleClose();
  }

  function sendDataToParentFromLocal() {
    if (localProfileImg) {
      onDataSend(localProfileImg);
      handleClose(); 
    }
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (loadEvent) {
        const uploadedImage = loadEvent.target.result;
        setLocalProfileImg(uploadedImage);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  }

  function handleCloseSelectedImage () {
    setLocalProfileImg("");
    setFileName("");
  }

  return (
      <div>
          <span onClick={handleOpen} className={styles.openBtn}>Profile Picture?</span>
          { isVisible && (
              <div className={styles.popupOverlay} ref={modalRef} onClick={closeModal}>
                  <div className={styles.popupContent}>
                      <img src='./src/assets/images/cancel.png' onClick={handleClose} className={styles.closeBtn}/>
                      
                      <h3 style={{paddingLeft: "10px"}}>Select your Avatar</h3>
                      { loadingErrr ?
                          <div className={styles.lostConnectionInLoadingAvatars}>
                              <img src="./src/assets/images/disconnected.png" alt="diconnected" className={styles.diconnectedPicture} />
                              <span className='disabled-text'>{loadingErrr}</span> 
                          </div>
                        :
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {images.map(image => (
                                  <div key={image.id} >
                                      <img src={image.url} alt={`Image ${image.id}`} className='profile-picture' onClick={() => sendDataToParentFromServer(image.url)} />
                                  </div>
                              ))}
                          </div>
                      }

                      <span className={styles.avatarSeparator}>or</span>

                      <div className={styles.fileUploader}>
                        <label htmlFor="fileUpload" className={styles.chooseBtn}> Choose Image</label>
                        <input type="file" id="fileUpload" accept="image/*" className={styles.fileInput} onChange={handleFileUpload} />

                        { localProfileImg ? 
                          <div>
                              <img src='./src/assets/images/disabled-cancel.png' className='cancel-profile-picture' onClick={handleCloseSelectedImage}  />
                              <img className="profile-picture" src={localProfileImg} alt="profile-avatar" />
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
                          <span className='disabled-text'>{fileName}</span> 
                        </div>
                        { fileName && (
                          <div className={styles.uploadBtn} onClick={sendDataToParentFromLocal}>
                            <img src="./src/assets/images/active-upload.png" className={styles.blinkingImage} alt="active-upload" />
                            <span>Click to save</span>
                          </div>
                        ) }
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}
