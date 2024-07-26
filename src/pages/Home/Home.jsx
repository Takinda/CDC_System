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

function Home() {
  return (
    <div className='container2'>
      <div className='Header'>
        <h1 className='NamePage'>Chronic Diseases Clinic</h1>
        <img src={imgHome} alt="Home"/>
      </div>
        <div className='Columns'>

          <div className="Rows">

            <div className="Receptionist">
              <div className="content">
                <h2>Receptionist</h2>
                <img src={imgReceptionist} alt="Receptionist"/>
              </div>
              <Link to="/Receptionist" className='Links2'><button>More Info +</button></Link>
            </div>
            <div className="Doctor">
              <div className="content">
                <h2>Doctor</h2>
                <img src={imgDoctor} alt="Docpic"/>
              </div>
              <Link to="/PatientList" className='Links2'><button>More Info +</button></Link>
            </div>

          </div>
          
          <div className="Rows">

            <div className="Pharmacist">
              <div className="content">
                <h2>Pharmacist</h2>
                <img src={imgPharmacist} alt="PharmPic"/>
              </div>
              <Link to="/Pharmacy" className='Links2'><button>More Info +</button></Link>
            </div>
            <div className="DrugStore">
              <div className="content">
                <h2>Drug Store</h2>
                <img src={imgDrugStore} alt="DrugStorePic"/>
              </div>
              <Link to="/DrugStore" className='Links2'><button>More Info +</button></Link>
            </div>
          </div>

        </div>
        <div className="AdminHeader">
          <h1>administration</h1>
        </div>
        <div className='Admin'>
          <div className="Dashboard">
            <img src={imgStats} alt="Stats"/>
            <Link to="/Dashboard" className='Admin-btns'><button>More Info +</button></Link>
          </div>
          <div className="Record">
            <img src={imgRecord} alt="Record"/>
            <Link to="/Record" className='Admin-btns'><button>More Info +</button></Link>
          </div>
          <div className="Reports">
            <img src={imgReport} alt="Reports"/>
            <Link to="/Reports" className='Admin-btns'><button>More Info +</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Home