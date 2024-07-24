import './AddMedication.css'
import MainImage from './DrugImage.png'
function AddMedication()
{
return <>
<nav>
<h1>Add Medication</h1>
<img className="Main-Image" src={MainImage} alt="Drug Store Main Image" />
</nav>


<div className="form-container">
<form>
   <div className='my-input-box'><label htmlFor="">Name:</label>  <input name="Name" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Count:</label>  <input name="Count" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Expiry:</label>  <input name="Expiry" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Who Added:</label>  <input name="WhoAdded" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Price:</label>  <input name="Price" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Entry Date:</label>  <input name="EntryDate" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">Batch Number:</label>  <input name="BatchNumber" type="text" /></div> 
   <div className='my-input-box'><label htmlFor="">MOH Number:</label>  <input name="MOHNumber" type="text" /></div>
   <div className='my-input-box'><label htmlFor="">Note:</label>  <textarea name="Note" id="note-text"></textarea></div> 
    </form>

</div>
 
</> 

};

export default AddMedication;