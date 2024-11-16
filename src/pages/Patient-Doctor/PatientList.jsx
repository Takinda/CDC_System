import React, { useState } from 'react';
import PatientData from '../Pharmcy/PatientData.json';
import Doctorimg from '../../Assets/images/PersonalPhoto.png';
import './PatientList.css';
import { TbLetterX } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function PatientList() {
  const [data, setData] = useState(PatientData);
  const [searchTerm, setSearchTerm] = useState('');
  const [component, setComponent] = useState('');

  const filteredPatients = data.filter(patient =>
    patient.PatientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNotificationClick = () => {
    switch (component) {
      case 'Notification':
        return (
          <div className="Notification" id='Notification'>
            <TbLetterX className='exit-btn' onClick={() => setComponent(' ')}/>
            <p>Hello, you have a new patient!</p>
          </div>
        );
      case ' ':
        return null
      default:
        return null;
    }
  }

  return (
    <div className='Main'>
      <div className="PageHeader">
        <h1>Waiting Patients</h1>
        <span className='Number-Nots'>1</span>
        <FaBell size={50} onClick={() => setComponent('Notification')} className='Bell'/>
        {handleNotificationClick()}
      </div>
      <div className="Doctor-Welcoming">
        <img src={Doctorimg} alt="Doctor" className='Doctor-img' />
        <h2>Welcome... Doc.{"Name"}</h2>
      </div>
      <div className="Search">
        <input
          className='Sbar'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <CiSearch className='Sicon' size={30} />
      </div>
      <div className="ListContainer">
        <div className="ListTitle">
          <p>Patients</p>
          <p>Description</p>
          <p>Room No.</p>
        </div>
        <div className="ListRoom">
          {filteredPatients.map((patient) => (
            <div className="PatientN" key={patient.id}>
              <p className='Pname'>{patient.PatientName}</p>
              <p className='Description'>{patient.Description}</p>
              <p className='RoomN'>{patient.Room}</p>
              <div className="Doc-btns">
                <button id='Dismiss'>Dismiss</button>
                <button id='Approve'>Approve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientList;
