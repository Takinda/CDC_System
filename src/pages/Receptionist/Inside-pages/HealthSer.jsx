import React,{useState} from 'react'
import './HealthSer.css'
import DiseaseData from './Diseases.json'
import HealthServicesimg from '../../../Assets/images/HealthServices.png'
import AddNote from '../../../Assets/images/AddNote.png'
import Remove from '../../../Assets/images/Remove.png'

function HealthSer() {
    const [Diseases, setDiseases] = useState(DiseaseData)
  return (
    <div className='HealthContainer'>
        <div className="HealthHeader">
            <h1>Health Services</h1>
            <img src={HealthServicesimg} alt="HealthServices"/>
        </div>
        <div className="HealthBody">
            
                <div className="ListD-Header"> 
                    <p>Diseases</p>
                    <p>Description</p>
                    <div className="images">
                        <img src={AddNote} alt="Add" />
                        <img src={Remove} alt="Remove" />
                    </div>
                </div>

                <div className="ListD-Content" id='ListD-Content'>
                    {Diseases.map((Disease) => (
                        <div className="Disease" key={Disease.id}>
                            <p>{Disease.Disease}</p>
                            <p className="description">{Disease.Description}</p>
                            <i className='BLANK' ></i>
                        </div>
                    ))}
                </div>

        </div>
    </div>
  )
}

export default HealthSer