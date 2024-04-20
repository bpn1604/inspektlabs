import React, { useState } from 'react';

const Gallery = ({ photos, onDelete }) => {
  console.log(photos)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDelete = (index) => {
    console.log(index)
    photos.splice(index,1)
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-container">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img
              src={photo}
              alt={`Photo ${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease', height:"100px"
              }}
            />
            { (
              <button onClick={() => handleDelete(index)} className="delete-button">
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
