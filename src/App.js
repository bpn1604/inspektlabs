import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { Camera } from "react-camera-pro";

function App() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState("16:9");

  const takePhoto = () => {
    setImage(camera.current.takePhoto());
  };

  const handleAspectRatioChange = (ratio) => {
    setAspectRatio(ratio);
  };

  return (
    <div>
      <Camera ref={camera} aspectRatio={aspectRatio} />
      <div style={{ marginTop: "10px" }}>
        <input type="radio" id="ratio16x9" name="aspectRatio" value="16:9" checked={aspectRatio === "16:9"} onChange={() => handleAspectRatioChange("16:9")} />
        <label htmlFor="ratio16x9">16:9</label>

        <input type="radio" id="ratio4x3" name="aspectRatio" value="4:3" checked={aspectRatio === "4:3"} onChange={() => handleAspectRatioChange("4:3")} />
        <label htmlFor="ratio4x3">4:3</label>

        <input type="radio" id="ratio1x1" name="aspectRatio" value="1:1" checked={aspectRatio === "1:1"} onChange={() => handleAspectRatioChange("1:1")} />
        <label htmlFor="ratio1x1">1:1</label>
      </div>
      <button onClick={takePhoto} style={{ marginTop: "10px" }}>Take photo</button>
      {image && <img src={image} alt='Taken photo' />}
    </div>
  );
}

export default App;
