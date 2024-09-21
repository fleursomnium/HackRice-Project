import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AboutUs from './pages/AboutUs';
import PainFinder from './pages/PainFinder';
import PainModel from './pages/PainModel';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/pain-finder" element={<PainFinder/>} />

      </Routes>
    </Router>
  );
}

export default App;
