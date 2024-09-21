import React from 'react';
import './AboutUs.css'; 

const About = () => {
  return (
    <div className="about-container">
        <div className="about-section">
        <h1>About Us</h1>
        <p>
            After a certain point of life, we all experience aches and pains within our body, usually our backs, here at ThereMove
            we want to help people eliminate joint pains, muscle aches, nerve damage, and back pains by showing exercises and movements that
            you can work on to help recover and strengthen body. 
        </p>
        </div>
        <div className="about-section">
        <h2>Our Mission</h2>
        <p>
            Your health is your wealth, we should all strive to be able to move freely without any hinderance due to pains. We want
            Parent's to be able to play with their kids outside. Owners should be able to walk their dogs, and Father's should be able to
            walk their daughter down the isle. We should not only live for a good time, but a long time as well.
        </p>
        </div>
        <div className="about-section">
        <h2>Our Team</h2>
        <p>
            We are a group of passionate individuals from various backgrounds, all united by the mission to make
            physical therapy and exercise knowledge more open to everyone.
        </p>
        </div>
    </div>
  );
};

export default About;