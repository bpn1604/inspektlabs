// CameraComponent.js

import React, { useState } from 'react';
import { Camera } from "react-camera-pro";
import './CameraComponent.css'; // Import CSS file

const CameraComponent = ({ camera, aspectRatio, handleAspectRatioChange, takePhoto, image, setNumberOfCameras, numberOfCameras }) => {
  const [zoomLevel, setZoomLevel] = useState(1000);

  const zoomIn = () => {
    console.log("zoomIn clicked")
    // Increase the zoom level
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 2)); // Limit zoom level to 2x
  };

  const zoomOut = () => {
    // Decrease the zoom level
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 1)); // Limit zoom level to 1x
  };

  const cameraStyle = {
    width: `calc(100% * ${zoomLevel})`,
    height: `calc(100% * ${zoomLevel})`,
    overflow: "hidden",
  };

  return (
    <div className="container">
      <div className="camera-wrapper" style={cameraStyle}>
        <Camera ref={camera} aspectRatio={aspectRatio} numberOfCamerasCallback={setNumberOfCameras} className="camera" />
      </div>

      <div className="aspect-ratio-options">
        <input type="radio" id="ratio16x9" name="aspectRatio" value={16 / 9} checked={aspectRatio === 16 / 9} onChange={() => handleAspectRatioChange(16 / 9)} className="aspect-ratio-option" />
        <label htmlFor="ratio16x9">16:9</label>
        <input type="radio" id="ratio4x3" name="aspectRatio" value={4 / 3} checked={aspectRatio === 4 / 3} onChange={() => handleAspectRatioChange(4 / 3)} className="aspect-ratio-option" />
        <label htmlFor="ratio4x3">4:3</label>
        <input type="radio" id="ratio1x1" name="aspectRatio" value={1 / 1} checked={aspectRatio === 1 / 1} onChange={() => handleAspectRatioChange(1 / 1)} className="aspect-ratio-option" />
        <label htmlFor="ratio1x1">1:1</label>
      </div>

      <button onClick={takePhoto} className="take-photo-button">Take photo</button>
      <button hidden={numberOfCameras <= 1} onClick={() => { camera.current.switchCamera(); }} className="toggle-camera-button">Toggle Camera</button>

      <div className="zoom-buttons">
        <button onClick={zoomIn} className="zoom-button">+</button>
        <button onClick={zoomOut} className="zoom-button">-</button>
      </div>

      {image && <img src={image} alt='Taken photo' className="taken-photo" />}
    </div>
  );
}

export default CameraComponent;
