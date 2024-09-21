import React from 'react';
import './AboutUs.css'; 

const About = () => {
  return (
    <div className="about-container">
        <div className="about-section">
        <h1>About Us</h1>
        <p>
            Have you ever felt like you needed to see a doctor for a symptom but decided not to because of the bill that will 
            be sent afterwards? Here at ClinicQuest we want to ensure that your body is well taken care of without the fear of 
            heavy expenses. How our website works is if you are feeling any symptons, we can either help with minor treatments, or help
            find clinics nearby that are within the preferred price range.
        </p>
        </div>
        <div className="about-section">
        <h2>Our Mission</h2>
        <p>
            Our team is dedicated to ensuring that everyone has access to the medical resources they require, 
            regardless of location or circumstance. Your health is your wealth, we want as many people to not
            only live for a good time but a long time as well.
        </p>
        </div>
        <div className="about-section">
        <h2>Our Team</h2>
        <p>
            We are a group of passionate individuals from various backgrounds, all united by the mission to make
            healthcare more accessible for everyone. 
        </p>
        </div>
    </div>
  );
};

export default About;