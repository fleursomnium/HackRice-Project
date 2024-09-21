import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import FindClinics from './pages/FindClinics';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SymptomMatch from './pages/Symptom-Matching';
import AboutUs from './pages/AboutUs';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-clinics" element={<FindClinics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/symptom-match" element={<SymptomMatch />} />
        <Route path="/about-us" element={<AboutUs/>} />

      </Routes>
    </Router>
  );
}

export default App;
