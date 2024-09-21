import React, { useState, useEffect } from 'react';
import './PainFinder.css'; 

// Main component that handles gender selection and body part interaction
const PainFinder = () => {
  const [gender, setGender] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart); // Trigger dropdown info for the clicked body part
  };

  return (
    <div className="painfinder-container">
      {!gender ? (
        <div className="selection-box">
          <h2 className="gender-selection-title">Choose Male or Female</h2>
          <div className="gender-selection">
            <button onClick={() => handleSelectGender('male')}>Male</button>
            <button onClick={() => handleSelectGender('female')}>Female</button>
          </div>
        </div>
      ) : (
        <div className="svg-container">
          {/* Render the appropriate SVG based on selected gender */}
          {gender === 'male' ? (
            <img
              src="/maleBodyOutline.svg"
              alt="Male Body"
              className="body-outline"
              onClick={() => handleBodyPartClick('shoulder')}
            />
          ) : (
            <img
              src="/femaleBodyOutline.svg"
              alt="Female Body"
              className="body-outline"
              onClick={() => handleBodyPartClick('knee')}
            />
          )}
        </div>
      )}

    </div>
  );
};

export default PainFinder;
