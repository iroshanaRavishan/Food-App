import React, { useEffect, useRef, useState } from 'react'
import styles from './profilepicselectormodal.module.css'
import { truncateFileName } from '../utils/shortenFileName'; 

export default function ProfilePicSelectorModal({ onDataSend, setLocallyUploadedProfileImg, locallyUploadedProfileImg, fileName, setFileName }) {

  const [isPicModelVisible, setIsPicModelVisible] = useState(false);
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
            return { id: image.id, url: imageUrl, imageName: image.fileName };
        });
        setImages(imageList);
        setLoadingError("");
    })
    .catch(err => {
        console.error("Error fetching images:", err);
        setLoadingError("Something went wrong in loading avatars!");
    });
  }, []);

  const handleOpen = () => setIsPicModelVisible(true);
  const handleClose = () => setIsPicModelVisible(false);

  function closeModal(e) {
    if(modalRef.current === e.target){
        handleClose();
    }
  }

  function sendDataToParentFromServer(image) {
    const newProfileImg = image.url;
    onDataSend(newProfileImg);
    setLocallyUploadedProfileImg("");
    setFileName(image.imageName)
    handleClose();
  }

  function sendDataToParentFromLocal() {
    if (locallyUploadedProfileImg) {
      onDataSend(locallyUploadedProfileImg);
      handleClose(); 
    }
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (loadEvent) {
        const uploadedImage = loadEvent.target.result;
        setLocallyUploadedProfileImg(uploadedImage);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  }

  function handleCloseSelectedImage () {
    setLocallyUploadedProfileImg("");
    setFileName("");
  }

  return (
      <div>
          <span onClick={handleOpen} className={styles.openBtn}>Profile Picture?</span>
          { isPicModelVisible && (
              <div className={styles.popupOverlay} ref={modalRef} onClick={closeModal}>
                  <div className={styles.popupContent}>
                      <img src='./src/assets/images/cancel.png' onClick={handleClose} className="closeBtn"/>
                      
                      <h3 style={{paddingLeft: "10px"}}>Select your Avatar</h3>
                      { loadingErrr ?
                          <div className={styles.lostConnectionInLoadingAvatars}>
                              <img src="./src/assets/images/disconnected.png" alt="diconnected" className={styles.diconnectedPicture} />
                              <span className='disabled-text'>{loadingErrr}</span> 
                          </div>
                        :
                          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                              {images.map(image => (
                                  <div key={image.id} >
                                      <img src={image.url} alt={`Image ${image.id}`} className='profile-picture' onClick={() => sendDataToParentFromServer(image)} />
                                  </div>
                              ))}
                          </div>
                      }

                      <span className={styles.avatarSeparator}>or</span>

                      <div className={styles.fileUploader}>
                        <label htmlFor="fileUpload" className={styles.chooseBtn}> Choose Image</label>
                        <input type="file" id="fileUpload" accept="image/*" className={styles.fileInput} onChange={handleFileUpload} />

                        { locallyUploadedProfileImg ? 
                          <div>
                              <img src='./src/assets/images/cancel.png' className='cancel-profile-picture' onClick={handleCloseSelectedImage}  />
                              <img className="profile-picture" src={locallyUploadedProfileImg} alt="profile-avatar" />
                          </div> : 
                          <div>
                            <img src='./src/assets/images/disabled-cancel.png' className='cancel-profile-picture' />
                            <img className="profile-picture" src="./src/assets/images/sample-user.png" alt="profile-avatar"/>
                          </div>
                        }
                      </div>
                      <div className={styles.imageUploadingArea}>
                        <div>
                          { (fileName && locallyUploadedProfileImg) && <div>
                            <span style={{fontWeight : "700", fontSize: "14px"}}>Want to upload this <br /> image?</span><br />
                            <span className='disabled-text'>{truncateFileName(fileName, 20)}</span>
                          </div> }
                          
                        </div>
                        { (fileName && locallyUploadedProfileImg) && (
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
