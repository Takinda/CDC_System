import MainImage from './MainImage.png'
import "./DrugStore.css"
import MedicationTable from "../pages/Pharmcy/MedicationTable.jsx"
function DrugStore()
{
return (
    <div className='DrugStore-Container'>
        <nav className='DrugStore-Header'>
            <p>Drug Store</p>
            <img className="Drug-img" src={MainImage} alt="Drug Store Main Image" />
        </nav>
            <div className="Boxes-Container">
                <div className="Search-box">
                    <i className="fa-search" aria-hidden="true"></i>
                    <input type="text" name="" placeholder="Search...?" />
                </div>
                <div className="AddNew-box">
                    <i className="fa-plus" aria-hidden="true"></i>
                    <button className="Add-Btn">Add</button>
                </div>
            </div>
            <div className="Table-Container">
            <MedicationTable />
            </div>
    </div>

)}

export default DrugStore;