import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import styles from './location.module.css'

// Google Maps library options
const mapContainerStyle = {
  width: "70vw",
  height: "70vh",
};
const center = {
  lat: 6.9271, // location of Sri lanka, colombo
  lng: 79.8612,
};
const libraries = ["places"];

const mapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#6bbbbf" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#dff0e5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#252625" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fff" }, { lightness: 29 }, { weight: 0.2 }],
    }
  ];

export default function Location({ onConfirm, onClose }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB1OrX16pynSTnDUHzBr2GgbkQlV0BS-Rg",
    libraries,
  });

  const [markerPosition, setMarkerPosition] = useState(center);
  const [selectedAddress, setSelectedAddress] = useState("");
  const mapRef = React.useRef();

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Check if the speech bubble was already shown
    const bubbleShown = localStorage.getItem('bubbleShown');

    if (!bubbleShown) {
      setShowBubble(true);

      localStorage.setItem('bubbleShown', 'true');

      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }
  }, []);

  // Geocode to get the address from coordinates
  async function fetchAddressFromCoordinates(latLng) {
    try {
      const geocoder = new window.google.maps.Geocoder();
      let finalAddress = "";

      const result = await geocoder.geocode({ location: latLng });

      if (result && result.results && result.results.length > 0) {
        finalAddress = result.results[0].formatted_address; 
        setSelectedAddress(finalAddress);
      } else {
        finalAddress = "Address not found"; 
        setSelectedAddress(finalAddress);
        console.warn("No address found for the given location");
      }
      onConfirm(finalAddress);

    } catch (error) {
      console.error("Geocode error:", error);
      const errorAddress = "Failed to fetch address";
      setSelectedAddress(errorAddress);
      onConfirm(errorAddress);
    }
  }

  // Called when dragging stops (map idle)
  const onMapIdle = useCallback(() => {
    if (mapRef.current) {
      const mapCenter = mapRef.current.getCenter();
      if (mapCenter) {
        setMarkerPosition({
          lat: mapCenter.lat(),
          lng: mapCenter.lng(),
        });
      }
    }
  }, []);

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={markerPosition}
        options={{
            styles: mapStyles,
            disableDefaultUI: true, // Disable default controls (optional)
            zoomControl: true,
            mapTypeControl: false, 
            fullscreenControl: true, 
            streetViewControl: false, 
            gestureHandling: "greedy", // Allow zooming with mouse scroll
          }}
        onLoad={(map) => (mapRef.current = map)}
        onIdle={onMapIdle} // Called when the map stops moving
      />

      {/* Static Marker in the Center of the Map */}
      <div className={styles.markerWrapper}>
        {showBubble && (
          <div className={styles.pointingMessageWrapper}>
            <div className={`${styles.bubble} ${styles.right}`}> Point me to the location</div>
            <div className={styles.pointingLine}></div>
          </div>
        )}
        <img src="./src/assets/images/marker.png" alt="Marker" />
      </div>

      <div className={styles.buttonWrapper}>
        <button className={`${styles.inputButton} ${styles.closeBtn}`} onClick={onClose}>
          Close
        </button>
        <button className={`${styles.inputButton} ${styles.confirmBtn}`} onClick={() => fetchAddressFromCoordinates(markerPosition)}>
          Confirm Location
        </button>
      </div>
      {selectedAddress && <p>Selected Address: {selectedAddress}</p>}
    </div>
  );
};
