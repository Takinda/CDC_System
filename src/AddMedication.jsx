import './AddMedication.css'
import MainImage from './DrugImage.png'
import { FaRegSave } from "react-icons/fa";
function AddMedication()
{
return <>
<nav>
<h1>Add Medication</h1>
<img className="Main-Image" src={MainImage} alt="Drug Store Main Image" />
</nav>


<div className="form-container">
<form>
   <div className='my-input-box'><label for="Name" >Name:</label>  <input id="Name" name="Name" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="Count">Count:</label>  <input  id="Count" name="Count" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="Expiry">Expiry:</label>  <input id="Expiry" name="Expiry" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="WhoAdded">Who Added:</label>  <input id="WhoAdded" name="WhoAdded" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="Price">Price:</label>  <input id="Price" name="Price" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="EntryDate">Entry Date:</label>  <input id="EntryDate" name="EntryDate" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="BatchNumber">Batch Number:</label>  <input id="BatchNumber"  name="BatchNumber" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="MOHNumber">MOH Number:</label>  <input id="MOHNumber" name="MOHNumber" type="text" /></div>
   <div className='my-input-box'>
   <label className="NoteLabel" htmlFor="note-text">Note:</label> 
   <textarea name="Note" id="note-text"></textarea>
   <button className="Save-Btn">
   <span className='Button-Text'>Save</span>
   <span className="Btn-Icon"><FaRegSave size={25}/></span>
    
    
   </button>
   </div> 

    
    </form>


</div>
 
</> 

};

export default AddMedication;