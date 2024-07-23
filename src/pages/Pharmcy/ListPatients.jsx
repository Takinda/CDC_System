import "./ListPatients.css"
import MainImage from "./Images/Patients.png"
import PatientsTable from "./PatientsTable.jsx"

function ListPatients()
{
    
    return <>
    
            <div className="Main-Container2">
                <div className="Boxes-Container2">
                      <div class="Search-box"> 
                          <i class="fa fa-search" aria-hidden="true"></i> 
                          <input type="text" name="" placeholder="Search...?"/>
                      </div>

                      <div class="AddNew-box"> 
                      <i class="fa fa-plus" aria-hidden="true"></i> 
                         <button className="Add-Btn">Add</button>
                      </div>

               </div>
               <div className="Table-Container">
               <PatientsTable/>
               </div>

            </div>

    </>
}

export default ListPatients;