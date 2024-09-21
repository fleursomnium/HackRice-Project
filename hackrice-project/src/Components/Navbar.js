import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-clinics">Find Clinics</Link>
        </li>
        <li>
          <Link to="/book-appointment">Book Appointment</Link>
        </li>
        <li>
          <Link to="/health-education">Health Education</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
