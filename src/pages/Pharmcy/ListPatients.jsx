import "./ListPatients.css"
import PatientsTable from "./PatientsTable.jsx"

function ListPatients()
{
    return <>
     
            <div className="Main-Container2">
                <div className="Boxes-Container2">
                      <div class="Search-box2"> 
                          <i class="fa fa-search" aria-hidden="true"></i> 
                          <input type="text" name="" placeholder="Search...?"/>
                      </div>
               </div>
               <div className="Table-Container">
                <PatientsTable/> 
               </div>

            </div>

    </>
}

export default ListPatients;