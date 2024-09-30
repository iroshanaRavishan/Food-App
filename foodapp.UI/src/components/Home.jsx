import React, { useState } from 'react'
import Search from './Search'
import FoodList from "./FoodList"
import Container from "./Container"
import InnerContainer from "./InnerContainer"
import FoodDetails from "./FoodDetails"
import ImageSlider from './ImageSlider'
import Location from './Location'
import styles from './home.module.css'
import Modal from './Modal'; 
import FeaturedSection from './FeaturedSection'
import HotestItem from './HotestItem'
import Categories from './Categories'
import PopularFood from './PopularFood'
import FlavouredMenu from './FlavouredMenu'
import SuperDeal from './SuperDeal'
import Footer from './Footer'

export default function Home({foodData, setFoodData, foodId, setFoodId}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [address, setAddress] = useState("");

  const images = [
    './src/assets/images/background-1.jpg',
    './src/assets/images/background-2.jpg',
    './src/assets/images/background-3.jpg'
  ];

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  

  function handleConfirmDrop(address) {
    setAddress(address); // Set the selected address in the input field
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div className={styles.addressInput}>
        <span className={styles.addressInputLabel}>
          We deliver your <span className="bold-text">Amazing Tastes</span>...
        </span><br /><br /><br />

        <div className={styles.inputWrapper}>
        <img src="./src/assets/images/Location.png" alt="location" className={styles.locationIcon} />
          <input type="text" placeholder="Select your location" value={address} readOnly onClick={handleOpenModal} />
          <button className={styles.findFoodButton}>Explore foods here</button>
        </div>
      </div>

      <ImageSlider images={images} />
      
      <FeaturedSection />
      <HotestItem />
      <Categories />
      <PopularFood />
      <FlavouredMenu />
      <SuperDeal />
      <Footer />

      {/* <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
          <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}/>
          </InnerContainer>
          <InnerContainer>
          <FoodDetails foodId={foodId} />
          </InnerContainer>
      </Container> */}

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Location onConfirm={handleConfirmDrop} /> {/* here, passing the handleConfirmDrop to Location Comp*/}
      </Modal>
    </div>
  )
}
