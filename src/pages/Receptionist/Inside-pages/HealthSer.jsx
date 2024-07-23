import React from 'react'
import './HealthSer.css'
import HealthServicesimg from '../../../Assets/images/HealthServices.png'
import AddNote from '../../../Assets/images/AddNote.png'
import Remove from '../../../Assets/images/Remove.png'

function HealthSer() {
  return (
    <div className='HealthContainer'>
        <div className="HealthHeader">
            <p>Health Services</p>
            <img src={HealthServicesimg} alt="HealthServices"/>
        </div>
        <div className="HealthBody">
            <div className="ListDiseases">
                <div className="ListDHeader">
                    <p>Diseases</p>
                    <p>Description</p>
                </div>
                <div className="ListDContent">
                    <div className="Disease1">
                        <p>Diabetes</p>
                        <p>Blood sugar disorder</p>
                        <div className="images">
                            <img src={AddNote} alt="Add" />
                            <img src={Remove} alt="Remove" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthSer