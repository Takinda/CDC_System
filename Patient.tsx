import React, { useState } from 'react';
import './Patient.css';
import PatientImg from '../image/Patient.png';
import PersonalPhotoImg from '../image/personalPhoto.png';
import SaveImg from '../image/Save.png';
import SendImg from '../image/Send.png';
import PrintImg from '../image/Print.png';

const Patient: React.FC = () => {
    const [patientName, setPatientName] = useState('Fatima');
    const [activeButton, setActiveButton] = useState('');
    const [selectedGender, setSelectedGender] = useState('female');
    const [subscriptionStatus, setSubscriptionStatus] = useState('active');

    const handlePersonalPhotoClick = () => {
        alert('Change personal photo functionality goes here');
    };

    const handleActionButtonClick = (action: string) => {
        setActiveButton(action);
    };

    const handleSaveClick = () => {
        alert('Save functionality goes here');
    };

    const handleSendClick = () => {
        alert('Send functionality goes here');
    };

    const handlePrintClick = () => {
        alert('Print functionality goes here');
    };

    return (
        <div className="patient-info-container">
            <div className="header">
                <h1 className="title">Patient Information</h1>
                <img src={PatientImg} alt="Patient" className="patient-image" />
            </div>
            <div className="personal-photo-container">
                <img
                    src={PersonalPhotoImg}
                    alt="Personal Photo"
                    className="personal-photo"
                    onClick={handlePersonalPhotoClick}
                />
                <div className="patient-name-container">
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="name-input"
                        placeholder="Enter the name"
                    />
                </div>
            </div>
            <div className="action-buttons">
                {['personal-info', 'prescriptions', 'add-prescription', 'dispensing-prescription'].map((action) => (
                    <button
                        key={action}
                        className={`action-button ${activeButton === action ? 'active' : ''}`}
                        onClick={() => handleActionButtonClick(action)}
                    >
                        {action.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}
                    </button>
                ))}
            </div>
            {activeButton === 'personal-info' && (
                <div className="action-details">
                    <div className="info-section">
                        <h2>Name:</h2>
                        <input type="text" className="input-field" value={patientName} readOnly />
                    </div>
                    <div className="info-section">
                        <h2>Age:</h2>
                        <input type="text" className="input-field" value="1/2/2000" readOnly />
                    </div>
                    <div className="info-section">
                        <h2>Gender:</h2>
                        <div className="gender-options">
                            <div
                                className="gender-option"
                                onClick={() => setSelectedGender('female')}
                                style={{ backgroundColor: selectedGender === 'female' ? '#7FFF7F' : '#FFFFFF' }}
                            >
                                <span>Female</span>
                            </div>
                            <div
                                className="gender-option"
                                onClick={() => setSelectedGender('male')}
                                style={{ backgroundColor: selectedGender === 'male' ? '#7FFF7F' : '#FFFFFF' }}
                            >
                                <span>Male</span>
                            </div>
                        </div>
                    </div>
                    <div className="info-section">
                        <h2>Address:</h2>
                        <input type="text" className="input-field" value="Baghdad" readOnly />
                    </div>
                    <div className="info-section">
                        <h2>Email:</h2>
                        <input type="email" className="input-field" value="Fatima04@gmail.com" readOnly />
                    </div>
                    <div className="info-section">
                        <h2>Phone Number:</h2>
                        <input type="text" className="input-field" value="077088054" readOnly />
                    </div>
                    <div className="info-section">
                        <h2>Subscription Status:</h2>
                        <div className="subscription-options">
                            <div
                                className="subscription-option"
                                onClick={() => setSubscriptionStatus('active')}
                                style={{ backgroundColor: subscriptionStatus === 'active' ? '#7FFF7F' : '#FFFFFF' }}
                            >
                                <span>Active</span>
                            </div>
                            <div
                                className="subscription-option"
                                onClick={() => setSubscriptionStatus('inactive')}
                                style={{ backgroundColor: subscriptionStatus === 'inactive' ? '#7FFF7F' : '#FFFFFF' }}
                            >
                                <span>Inactive</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeButton === 'prescriptions' && (
                <div className="action-details">
                    <div className="prescription-section">
                        <table className="prescription-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Prescriptions_1</td>
                                    <td>1/2/2024 4:10 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_2</td>
                                    <td>2/5/2024 5:50 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_3</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_4</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_5</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_6</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_7</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_8</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                <tr>
                                    <td>Prescriptions_9</td>
                                    <td>4/9/2024 4:60 PM</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {activeButton === 'add-prescription' && (
                <div className="action-details">
                    <div className="info-section">
                        <h2>Doctor:</h2>
                        <input type="text" className="input-field" placeholder="Enter doctor's name" />
                    </div>
                    <div className="info-section">
                        <h2>Date:</h2>
                        <input type="text" className="input-field" placeholder="MM/DD/YYYY" />
                    </div>
                    <div className="info-section">
                        <h2>Medicine:</h2>
                        <input type="text" className="input-field" placeholder="Enter medicine name" />
                    </div>
                    <div className="info-section">
                        <h2>Notes:</h2>
                        <textarea className="input-field" rows={5} placeholder="Enter notes"></textarea>
                    </div>
                    <div className="action-buttons-right">
                        <button className="action-button-right" onClick={handleSaveClick}>
                            <img src={SaveImg} alt="Save" className="action-icon" />
                            <span>Save</span>
                        </button>
                        <button className="action-button-right" onClick={handleSendClick}>
                            <img src={SendImg} alt="Send" className="action-icon" />
                            <span>Send</span>
                        </button>
                        <button className="action-button-right" onClick={handlePrintClick}>
                            <img src={PrintImg} alt="Print" className="action-icon" />
                            <span>Print</span>
                        </button>
                    </div>
                </div>
            )}
            {activeButton === 'dispensing-prescription' && (
                <div className="action-details">
                    <div className="info-section">
                        <h2>Pharmacist:</h2>
                        <input type="text" className="input-field" placeholder="Enter Pharmacist's name" />
                    </div>
                    <div className="info-section">
                        <h2>Medication:</h2>
                        <input type="text" className="input-field" placeholder="Enter medication name" />
                    </div>
                    <div className="info-section">
                        <h2>Notes:</h2>
                        <textarea className="input-field" rows={5} placeholder="Enter notes"></textarea>
                    </div>
                    <div className="action-buttons-right">
                        <button className="action-button-right" onClick={handlePrintClick}>
                            <img src={PrintImg} alt="Print" className="action-icon" />
                            <span>Print</span>
                        </button>
                        <button className="action-button-right" onClick={handleSaveClick}>
                            <img src={SaveImg} alt="Save" className="action-icon" />
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Patient;
