import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MHome.css';
import homeLogo from '../image/Health.png';
import iraqiLogo from '../image/Iraqi.png';

const MHome = () => {
  const navigate = useNavigate();

  const handleReceptionistClick = () => {
    navigate('/receptionist');
  };

  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1>Chronic Diseases Clinic</h1>
        <img src={homeLogo} alt="Home Logo" className="Home-home-logo" />
      </header>
      <div className="Home-main-content">
        <div className="Home-buttons-container">
          <button className="Home-main-button" onClick={handleReceptionistClick}>Receptionist</button>
          <button className="Home-main-button">Doctor</button>
          <button className="Home-main-button">Pharmacist</button>
          <button className="Home-main-button">ID Issuance</button>
        </div>
        <div className="Home-administration-container">
          <h2>Administration</h2>
          <button className="Home-admin-button">Drug store</button>
          <button className="Home-admin-button">Dashboard</button>
          <button className="Home-admin-button">Reports</button>
          <button className="Home-admin-button">Records</button>
        </div>
      </div>
      <footer className="Home-footer">
        <img src={iraqiLogo} alt="Iraqi Logo" className="Home-iraqi-logo" />
      </footer>
    </div>
  );
};

export default MHome;
