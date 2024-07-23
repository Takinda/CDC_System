import React , {useState} from "react"
import data from "./MedicationsData.json"
import './MedicationTable.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { LuMinusCircle } from "react-icons/lu";

function Table()
{
    const [Medications,setMeds] = useState(data);
return <div className="Tcontainer">

<div class="header_fixed">
        <table>
            <thead>
                <tr>
                    <th>Medication.</th>
                    <th>Description</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
               {Medications.map( (med)=>  
                ( <tr key={med.id}>
                    <td>{med.Medication}</td>
                    <td>{med.Description}</td>
                    <td>
                        <button 
                         onClick=
                         {
                             ()=>{
                             let c = document.getElementById("Quantity");
                             c.innerHTML=(parseInt(c.textContent)+1);
                             
                             }
                         }
                        >
                        <IoAddCircleOutline class="fa-plus"/>  
                        </button>
                        <button
                         onClick=
                         {
                             ()=>{
                             let c = document.getElementById("Quantity");
                             c.innerHTML=(parseInt(c.textContent)-1);
                             
                             }
                         }
                        
                        >
                        <LuMinusCircle class="fa-minus"/>
                        </button>
                        <label id="Quantity">{med.Quantity}</label>
                    </td>
                </tr>)       
            )} 
            </tbody>
        </table>

</div>

</div>

}

export default Table;