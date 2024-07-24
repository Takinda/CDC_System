import React from 'react'
import { Link } from 'react-router-dom'
import imgDoctor from '../../Assets/images/Doctor.png'
import imgDrugStore from '../../Assets/images/DrugStore.png'
import imgReceptionist from '../../Assets/images/Receptionist.png'
import imgPharmacist from '../../Assets/images/Pharmacist.png'
import imgHome from '../../Assets/images/MainPageHeader.png'
import imgRecord from '../../Assets/images/Record.png'
import imgReport from '../../Assets/images/Report.png'
import imgStats from '../../Assets/images/Stats.png'
import './Home.css'
import { BiColor } from 'react-icons/bi'

function Home() {
  return (
    <div className='container2'>
      <div className='Header'>
        <h1 className='NamePage'>Chronic Diseases Clinic</h1>
        <img src={imgHome} alt="Home"/>
      </div>
      <div className='Body'>
        <div className='Options'>
          <div className="Receptionist">
            <div className="content">
              <h2>Receptionist</h2>
              <img src={imgReceptionist} alt="Receptionist"/>
            </div>
            <button id='btn1'><Link to="/Receptionist" className='Links2'>More Info +</Link></button>
          </div>
          <div className="Doctor">
            <div className="content">
              <h2>Doctor</h2>
              <img src={imgDoctor} alt="Docpic"/>
            </div>
            <button id='btn2'><Link to="/PatientList" className='Links2'>More Info +</Link></button>
          </div>
          <div className="Pharmacist">
            <div className="content">
              <h2>Pharmacist</h2>
              <img src={imgPharmacist} alt="PharmPic"/>
            </div>
            <button id='btn3'><Link to='/Pharmacy' className='Links2'>More Info +</Link></button>
          </div>
          <div className="DrugStore">
            <div className="content">
              <h2>Drug Store</h2>
              <img src={imgDrugStore} alt="DrugStorePic"/>
            </div>
            <button id='btn4'>More Info +</button>
          </div>
        </div>
        <div className="AdminHeader">
          <h1>administration</h1>
        </div>
        <div className='Admin'>
          <div className="Statistics">
            <img src={imgStats} alt="Stats"/>
            <button><Link to='/DashBoard'>More Info +</Link></button>
          </div>
          <div className="Record">
            <img src={imgRecord} alt="Record"/>
            <button>More Info +</button>
          </div>
          <div className="Reports">
            <img src={imgReport} alt="Reports"/>
            <button>More Info +</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home