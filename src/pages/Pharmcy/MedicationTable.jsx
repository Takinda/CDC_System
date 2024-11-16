import React, { useState } from "react";
import data from "./MedicationsData.json";
import './MedicationTable.css';

function Table() {
    const [Medications, setMeds] = useState(data);
    const [selectedMeds, setSelectedMeds] = useState({});

    const toggleSelect = (id) => {
        setSelectedMeds(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="Tcontainer">
            <table>
                <thead className="Med-Header">
                    <tr>
                        <th className="Med-Name">Name</th>
                        <th className="Med-Description">Description</th>
                        <th className="Med-Quantity">Quantity</th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody className="Med-Body">
                    {Medications.map((med) => (
                        <tr className="Med-Row" key={med.id}>
                            <td className="Med-Name">{med.Medication}</td>
                            <td className="Med-Description">{med.Description}</td>
                            <td className="Med-Quantity">{med.Quantity}</td>
                            <td className="Med-Buttons">
                                <button
                                    className="select-btn"
                                    style={{
                                        backgroundColor: selectedMeds[med.id] ? '#cacaca' : '#25be72',
                                        color: selectedMeds[med.id] ? 'black' : 'white'
                                    }}
                                    onClick={() => toggleSelect(med.id)}
                                >
                                    {selectedMeds[med.id] ? "Selected" : "Select"}
                                </button>
                                <button className="request-btn">Request</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
