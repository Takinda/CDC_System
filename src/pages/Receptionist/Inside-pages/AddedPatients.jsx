import React, { useState } from 'react';
import './AddedPatients.css';
import ListPatients from '../../../Assets/images/ListPatient.png';
import deleteimg from '../../../Assets/images/delete.png';
import editimg from '../../../Assets/images/edit.png';
import Viewimg from '../../../Assets/images/view.png';
import data from "../../Pharmcy/PatientData.json";

function AddedPatients() {
    const [Patients, setPatients] = useState(data);
    return (
        <div className='AddedPatients-Container'>
            <header className='AddedPatients-Header'>
                <p className='Added-Title'>List Patients</p>
                <img src={ListPatients} alt="" />
            </header>
            <div className="Add-inputs">
                <input type="text" placeholder='Enter Patient Name' />
                <button>Add</button>
            </div>
            <main className='AddedPatients-List'>
                <div className="AddedPatients-List-Header">
                    <p>Patient Name</p>
                    <p>Procedure</p>
                </div>
                <div className="AddedPatients-List-Body">
                    {Patients.map((Patient) => (
                        <div className="AddedPatients-List-Content" key={Patient.id}>
                            <p>{Patient.PatientName}</p>
                            <div className="btns-List">
                                <button>Send</button>
                                <img src={Viewimg} alt="View" />
                                <img src={deleteimg} alt="delete" />
                                <img src={editimg} alt="edit" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default AddedPatients;
