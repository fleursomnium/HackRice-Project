import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { BoxGeometry, SphereGeometry } from 'three';

const PainModel = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  // Define the handleClick function
  const handleClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    console.log(`You clicked on: ${bodyPart}`);
  };

  return (
    <div>
      <h1>Select the area where you're feeling pain</h1>
      <Canvas>
        {/* Head */}
        <mesh onClick={() => handleClick('head')} position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
        {/* Arm */}
        <mesh onClick={() => handleClick('arm')} position={[1, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </Canvas>

      {selectedBodyPart && <p>You selected: {selectedBodyPart}</p>}
    </div>
  );
};

export default PainModel;