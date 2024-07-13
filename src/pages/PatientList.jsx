import React from 'react'
import Waiting from '../Assets/images/Waiting.png';
import '../Styles/PatientList.css';
import { CiSearch } from "react-icons/ci";

function PatientList() {
  return (
    <div className='Main'>
      <div className="PageHeader">
        <h1>Waiting Patients</h1>
        <img src={Waiting} alt="" />
      </div>
      <div className="Search">
        <input className='Dname' type="text" name="" id="" placeholder="Doctor's Name"/>
        <input className='Sbar' type="text" name="" id="" placeholder='Search'/>
        <CiSearch className='Sicon' id='icon' size={30}/>
      </div>
      <div className="ListContainer">
        <div className="ListTitle">
          <p>Patients</p>
          <p className='Rooms'>Room No.</p>
        </div>
        <div className="ListRoom">
          <div className="PatientN1">
            <p className='Pname' id='Pname'>Alaa Ahmed</p> 
            <p className='RoomN'>101</p>
            <button>Approve</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PatientList