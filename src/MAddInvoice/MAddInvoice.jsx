import React, { useState } from 'react'; // Import React and useState from React
import './MAddInvoice.css'; // Import CSS file for styling
import Select from 'react-dropdown-select'; // Import Select component from react-dropdown-select
import SaveIcon from '../image/Save.png'; // Import Save icon
import PrintIcon from '../image/Print.png'; // Import Print icon

const MAddInvoice = () => {
  // State to store list of diseases
  const [diseases, setDiseases] = useState([
    { id: 'Diabetes', name: 'Diabetes' },
    { id: 'Hypertension', name: 'Hypertension' },
    { id: 'Asthma', name: 'Asthma' },
    { id: 'COPD', name: 'COPD' },
    { id: 'Arthritis', name: 'Arthritis' }
  ]);
  
  // State to store new disease value
  const [newDisease, setNewDisease] = useState('');
  
  // State to store selected diseases from dropdown
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add new disease to the list
  const addDiseaseOption = () => {
    if (newDisease.trim()) {
      setDiseases([...diseases, { id: newDisease, name: newDisease }]);
      setNewDisease(''); // Clear input field
      setIsModalOpen(false); // Close modal
    }
  };

  // Function to handle Enter key press in the modal input
  const handleModalKeyPress = (e) => {
    if (e.key === 'Enter') {
      addDiseaseOption();
    }
  };

  return (
    <div className="invoice-container">
      {/* Header section */}
      <div className="header">
        <h1 className="invoice-title">Add an Invoice</h1>
      </div>
      
      {/* Form section */}
      <div className="invoice-form">
        <form>
          {/* Patient name field */}
          <div className="form-group">
            <label htmlFor="patient">Patient:</label>
            <input type="text" id="patient" name="patient" />
          </div>
          
          {/* Date field */}
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" />
          </div>
          
          {/* Invoice number field */}
          <div className="form-group">
            <label htmlFor="invoiceNumber">Invoice Number:</label>
            <input type="text" id="invoiceNumber" name="invoiceNumber" />
          </div>
          
          {/* Price field */}
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
          </div>
          
          {/* Receptionist field */}
          <div className="form-group">
            <label htmlFor="receptionist">Receptionist:</label>
            <input type="text" id="receptionist" name="receptionist" />
          </div>
          
          {/* Diseases selection field */}
          <div className="form-group">
            <label htmlFor="diseases">Diseases:</label>
            <div className="diseases-group">
              <Select
                options={diseases}
                onChange={setSelectedDiseases}
                multi
                labelField="name"
                valueField="name"
                className="custom-select"
                placeholder="Select diseases"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="add-option-button"
              >
                Add option
              </button>
            </div>
          </div>
          
          {/* Save and Print buttons */}
          <div className="invoice-buttons">
            <button className="save-button">
              <img src={SaveIcon} alt="Save" className="button-icon" /> Save
            </button>
            <button className="print-button">
              <img src={PrintIcon} alt="Print" className="button-icon" /> Print
            </button>
          </div>
        </form>
      </div>

      {/* Modal for adding new disease */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <h2>Add New Disease</h2>
            <input
              type="text"
              value={newDisease}
              onChange={(e) => setNewDisease(e.target.value)}
              onKeyPress={handleModalKeyPress}
              placeholder="Enter new disease"
              className="new-disease-input"
            />
            <button
              onClick={addDiseaseOption}
              className="modal-add-button"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MAddInvoice;


