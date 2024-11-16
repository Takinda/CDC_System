import React, { useState } from 'react';
import './AddPatient.css';
import PatientImg from '../Assets/images/Patient.png';
import PersonalPhotoImg from '../Assets/images/PersonalPhoto.png';
import SaveImg from '../Assets/images/Save.png';

const Patient: React.FC = () => {
    const [patientName, setPatientName] = useState('');
    const [activeButton, setActiveButton] = useState('personal-info');
    const [selectedGender, setSelectedGender] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handlePersonalPhotoClick = () => {
        alert('Change personal photo functionality goes here');
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
                <button
                    className={`action-button ${activeButton === 'personal-info' ? 'active' : ''}`}
                    onClick={() => setActiveButton('personal-info')}
                >
                    Personal Information
                </button>
            </div>
            {activeButton === 'personal-info' && (
                <div className="action-details">
                    <div className="info-section">
                        <h2>Name:</h2>
                        <input type="text" className="input-field" placeholder="Enter your name" />
                    </div>
                    <div className="info-section">
                        <h2>Age:</h2>
                        <input type="text" className="input-field" placeholder="MM/DD/YYYY" />
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
                        <input type="text" className="input-field" placeholder="Enter your address" />
                    </div>
                    <div className="info-section">
                        <h2>Email:</h2>
                        <input type="email" className="input-field" placeholder="Enter your email" />
                    </div>
                    <div className="info-section">
                        <h2>Phone Number:</h2>
                        <input type="text" className="input-field" placeholder="Enter your phone number" />
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
            <div className="save-button-container">
                <button className="save-button" onClick={handleSaveClick}>
                    <img src={SaveImg} alt="Save" className="save-button-img" />
                    Save
                </button>
            </div>
        </div>
    );
};

export default Patient;
