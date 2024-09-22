import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PainFinder.css';

const PainFinder = () => {
  const navigate = useNavigate(); // React Router hook to navigate
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const handleSelectGender = (selectedGender) => {
    // Navigate to the new page depending on the selected gender
    navigate(`/${selectedGender}page`);
  };

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart); // Trigger dropdown info for the clicked body part
  };

  return (
    <div className="painfinder-container">
      <div className="selection-box">
        <h2 className="gender-selection-title">Choose Male or Female</h2>
        <div className="gender-selection">
          <button onClick={() => handleSelectGender('male')}>Male</button>
          <button onClick={() => handleSelectGender('female')}>Female</button>
        </div>
      </div>
    </div>
  );
};

export default PainFinder;
