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
   <div className='input-box'><label htmlFor="">Name:</label>  <input name="Name" type="text" /></div> 
   </form>

</div>
 
</> 

};

export default AddMedication;