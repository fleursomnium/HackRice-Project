import React from 'react';
import './BodyPage.css'; 

const FemalePage = () => {
  const handleBodyPartClick = (bodyPart) => {
    console.log(`Selected body part: ${bodyPart}`);
  };

  return (
    <div className="svg-container">
      <h2 className="body-title">Female Body Outline</h2> {/* Title is now above */}
      <div className="image-wrapper">
        <img
          src="/femaleBodyOutline.svg"
          alt="Female Body"
          className="body-outline"
          onClick={() => handleBodyPartClick('knee')}
        />
      </div>
    </div>
  );
};

export default FemalePage;
