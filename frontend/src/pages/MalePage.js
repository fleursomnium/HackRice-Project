import React from 'react';
import './BodyPage.css'; 

const MalePage = () => {
  const handleBodyPartClick = (bodyPart) => {
    console.log(`Selected body part: ${bodyPart}`);
  };

  return (
    <div className="svg-container">
      <h2 className="body-title">Male Body Outline</h2> {/* Title is now above */}
      <div className="image-wrapper">
        <img
          src="/maleBodyOutline.svg"
          alt="Male Body"
          className="body-outline"
          onClick={() => handleBodyPartClick('shoulder')}
        />
      </div>
    </div>
  );
};

export default MalePage;
