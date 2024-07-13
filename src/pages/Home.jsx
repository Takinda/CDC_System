import React from 'react'
import {Link} from 'react-router-dom'
import imgDoctor from '../Assets/images/Doctor.png'
import imgDrugStore from '../Assets/images/DrugStore.png'
import imgReceptionist from '../Assets/images/Receptionist.png'
import imgPharmacist from '../Assets/images/Pharmacist.png'
import imgHome from '../Assets/images/MainPageHeader.png'
import imgRecord from '../Assets/images/Record.png'
import imgReport from '../Assets/images/Report.png'
import imgStats from '../Assets/images/Stats.png'
import '../Styles/Home.css'

function Home() {
  return (
    <div>
        <div className='Header'>
            <h1 className='NamePage'>Chronic Diseases Clinic</h1>
            <img src={imgHome} alt=""/>
        </div>
        <div className='Body'>
            <div className='Options'>
                <div className="Receptionist">
                    <h2>Receptionist</h2>
                    <img src={imgReceptionist} alt=""/>
                    <button>More Info +</button>
                </div>
                <div className="Doctor">
                    <h2>Doctor</h2>
                    <img src={imgDoctor} alt="" />
                    <button><Link to="/PatientList" className='Links'>More Info +</Link></button>
                </div>
                <br />
                <div className="Pharmacist">
                    <h2>Pharmacist</h2>
                    <img src={imgPharmacist} alt="" />
                    <button>More Info +</button>
                </div>
                <div className="DrugStore">
                    <h2>Drug Store</h2>
                    <img src={imgDrugStore} alt="" />
                    <button>More Info +</button>
                </div>
            </div>
            <div className="AdminHeader">
                <h1>administration</h1>
            </div>
            <div className='Admin'>
                <div className="Statistics">
                    <img src={imgStats} alt="" />
                    <button>More Info +</button>
                </div>
                <div className="Record">
                <img src={imgRecord} alt="" />
                <button>More Info +</button>
                </div>
                <div className="Reports">
                <img src={imgReport} alt="" />
                <button>More Info +</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home