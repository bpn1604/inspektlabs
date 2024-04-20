import React from 'react'
import { Camera } from "react-camera-pro";
const CameraComponent = ({camera ,aspectRatio,handleAspectRatioChange , takePhoto ,image }) => {
  return (
        <div>
      {/* Render the camera component */}
      <div style={{marginTop:"20px"}}><Camera ref={camera} aspectRatio={aspectRatio} /></div>
      

      <div>
  {/* Input radio buttons for aspect ratio selection */}
  <input type="radio" id="ratio16x9" name="aspectRatio" value={16/9} checked={aspectRatio === 16/9} onChange={() => handleAspectRatioChange(16/9)} />
  <label htmlFor="ratio16x9">16:9</label>

  <input type="radio" id="ratio4x3" name="aspectRatio" value={4/3} checked={aspectRatio === 4/3} onChange={() => handleAspectRatioChange(4/3)} />
  <label htmlFor="ratio4x3">4:3</label>

  <input type="radio" id="ratio1x1" name="aspectRatio" value={1/1} checked={aspectRatio === 1/1} onChange={() => handleAspectRatioChange(1/1)} />
  <label htmlFor="ratio1x1">1:1</label>
</div>


      {/* Button to take photo */}
      <button onClick={takePhoto} >Take photo</button>

      {/* Render the captured image */}
      {image && <img src={image} alt='Taken photo' />}
    </div>
  )
}

export default CameraComponent
