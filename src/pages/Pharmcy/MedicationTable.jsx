import React, { useState } from "react";
import data from "./MedicationsData.json";
import './MedicationTable.css';

function Table() {
    const [Medications, setMeds] = useState(data);
    
    return (
        <div className="Tcontainer">
           <div className="Med-Header">
                <p className="Med-Name">Name</p>
                <p className="Med-Description">Description</p>
                <p className="Med-Quantity">Quantity</p>
           </div>
           <div className="Med-Body">
                {Medications.map((med) => (
                    <div className="Med-Row" key={med.id} >
                        <p className="Med-Name">{med.Medication}</p>
                        <p className="Med-Description">{med.Description}</p>
                        <p className="Med-Quantity">{med.Quantity}</p>
                        <button className="Med-Button">Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Table;
