import "./Pharmcy.css"
import MainImage from "./Images/Pharmicst.png"
import MedicationsTable from "./MedicationTable.jsx";
import ListPatients from "./ListPatients.jsx";
import React ,{useState} from 'react';
import {Link} from "react-router-dom"
function Pharmcy()
{
    const [component, setComponent] = useState('MedicationsTable');
    const handleClick = () => {
        switch (component) {
          case 'MedicationsTable':
            return <MedicationsTable />;
          case 'ListPatients':
            return <ListPatients />;
          default:
            return <MedicationsTable />; 
        }
    }

    return (
    <div className="Main-Container">
        <div className="Pharmacy-Header">
            <h1 className="My-Header-Title">Pharmcy</h1>
            <img src={MainImage} alt="img"  />
        </div>
        <div className="Router-Container">
                <Link       
                    id="nav-btn"
                    className={`nav-btn ${component === 'MedicationsTable' ? 'active' : ''}`}
                    onClick={() => setComponent('MedicationsTable')}
                >
                    Medication list
                </Link>
                <Link
                    className={`nav-btn ${component === 'ListPatients' ? 'active' : ''}`}
                    onClick={() => setComponent('ListPatients')}
                >
                    Patients list
                </Link>
        </div>
        {component === 'MedicationsTable' && (
                <div className="Boxes-Container2">
                    <div className="Search-box2">
                        <i className="fa-search" aria-hidden="true"></i>
                        <input type="text" name="" placeholder="Search...?" />
                    </div>
                </div>
            )}
       <div className="Table-Container">
        {handleClick()}
       </div>
      
   </div>
   )
}

export default Pharmcy;