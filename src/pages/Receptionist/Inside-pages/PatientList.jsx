import React, {useState} from 'react'
import Waiting from '../../../Assets/images/Waiting.png';
import PatientData from '../../Pharmcy/PatientData.json';
import './PatientList.css';
import { CiSearch } from "react-icons/ci";

function PatientList() {
  const [data, setData] = useState(PatientData);
  return (
    <div className='Main'>
      <div className="PageHeader">
        <h1>Waiting Patients</h1>
        <img src={Waiting} alt="" /> 
      </div>
      <div className="Doctor-Welcoming">
        <h2>Welcome... Doc.{"Name"}</h2>
      </div>
      <div className="Search">
        <input className='Sbar' type="text" name="" id="" placeholder='Search'/>
        <CiSearch className='Sicon' size={30}/>
      </div>
      <div className="ListContainer">
        <div className="ListTitle">
          <p>Patients</p>
          <p>Description</p>
          <p>Room No.</p>
          <br />
          <i></i>
        </div>
        <div className="ListRoom">
          {data.map((patient) => (
            <div className="PatientN" key={patient.id}>
              <p className='Pname' id='Pname'>{patient.PatientName}</p> 
              <p className='Description' >{patient.Description}</p>
              <p className='RoomN'>{patient.Room}</p>
            <div className="Doc-btns">
              <button id='Dismiss' >Dismiss</button>
              <button id='Approve' >Approve</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PatientList