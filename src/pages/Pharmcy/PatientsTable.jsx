import React, { useState } from "react";
import data from "./PatientData.json";
import './PatientsTable.css';
import ShowButton from "./Images/show.png";
import EditButton from "./Images/edit.png";
import DeleteButton from "./Images/delete.png";

function Table() {
    const [Patients, setPatients] = useState(data);

    return (
        <div className="Pcontainer">
            <div className="header_fixed">
                <table>
                    <thead> 
                        <tr>
                            <th>Patient</th>
                            <th>Procedures</th> 
                        </tr>
                    </thead> 
                        <tbody>
                            {Patients.map((Patient) => (
                                <tr key={Patient.id}>
                                    <td>{Patient.PatientName}</td>
                                    <td>
                                        <button type="submit">
                                            <img className="myImg" src={ShowButton} alt="Show" />
                                        </button>
                                        <button type="submit">
                                            <img className="myImg" src={EditButton} alt="Edit" />
                                        </button>
                                        <button type="submit">
                                            <img className="myImg" src={DeleteButton} alt="Delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
