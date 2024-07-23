import React, { useState } from 'react';
import './AddInvoice.css';
import Add from '../image/Add.png';
import SaveIcon from '../image/Save.png';
import PrintIcon from '../image/Print.png';

const AddInvoice: React.FC = () => {
  const [diseases, setDiseases] = useState<string[]>(['Diabetes', 'Hypertension', 'Asthma', 'COPD', 'Arthritis']);
  const [newDisease, setNewDisease] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addDiseaseOption = () => {
    if (newDisease) {
      setDiseases([...diseases, newDisease]);
      setNewDisease('');
      setIsModalOpen(false);
    }
  };

  const handleModalKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addDiseaseOption();
    }
  };

  return (
    <div className="invoice-container">
      <div className="header">
        <h1 className="invoice-title">Add an Invoice</h1>
        <img src={Add} alt="Add" className="invoice-image" />
      </div>
      <div className="invoice-form">
        <form>
          <div className="form-group">
            <label htmlFor="patient">Patient:</label>
            <input type="text" id="patient" name="patient" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceNumber">Invoice Number:</label>
            <input type="text" id="invoiceNumber" name="invoiceNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="form-group">
            <label htmlFor="receptionist">Receptionist:</label>
            <input type="text" id="receptionist" name="receptionist" />
          </div>
          <div className="form-group">
            <label htmlFor="diseases">Diseases:</label>
            <div className="diseases-group">
              <select id="diseases" name="diseases">
                {diseases.map((disease, index) => (
                  <option key={index} value={disease}>{disease}</option>
                ))}
              </select>
              <button type="button" onClick={() => setIsModalOpen(true)} className="add-option-button">Add option</button>
            </div>
          </div>
        </form>
      </div>
      <div className="invoice-buttons">
        <button className="save-button">
          <img src={SaveIcon} alt="Save" className="button-icon" /> Save
        </button>
        <button className="print-button">
          <img src={PrintIcon} alt="Print" className="button-icon" /> Print
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Add New Disease</h2>
            <input
              type="text"
              value={newDisease}
              onChange={(e) => setNewDisease(e.target.value)}
              onKeyPress={handleModalKeyPress}
              placeholder="Enter new disease"
              className="new-disease-input"
            />
            <button onClick={addDiseaseOption} className="modal-add-button">Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInvoice;
