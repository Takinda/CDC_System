import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MReceptionist.css';
import homeLogo from '../image/Health.png';
import iraqiLogo from '../image/Iraqi.png';

const MReceptionist = () => {
  const navigate = useNavigate();

  const handleListPatientsClick = () => {
    navigate('/list-patients');
  };

  const handleAddInvoiceClick = () => {
    navigate('/add-invoice'); // الانتقال إلى واجهة MAddInvoice
  };

  return (
    <div className="Receptionist-container">
      <header className="Receptionist-header">
        <h1>Receptionist</h1>
        <img src={homeLogo} alt="Home Logo" className="Receptionist-home-logo" />
      </header>
      <div className="Receptionist-main-content">
        <div className="Receptionist-buttons-container">
          <button className="Receptionist-main-button" onClick={handleListPatientsClick}>List Patients</button>
          <button className="Receptionist-main-button">Health Services</button>
          <button className="Receptionist-main-button">Invoices</button>
          <button className="Receptionist-main-button" onClick={handleAddInvoiceClick}>Add an Invoice</button> {/* زر إضافة فاتورة مع التوجيه */}
        </div>
      </div>
      <footer className="Receptionist-footer">
        <img src={iraqiLogo} alt="Iraqi Logo" className="Receptionist-iraqi-logo" />
      </footer>
    </div>
  );
};

export default MReceptionist;

