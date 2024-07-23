import React from 'react'
import './Receptionist.css'
import imgReceptionist from '../../Assets/images/Receptionist.png'
import ListPatients from '../../Assets/images/ListPatient.png'
import HealthServices from '../../Assets/images/HealthServices.png'
import Invoices from '../../Assets/images/Invoiceimg.png'
import AddInvoice from '../../Assets/images/AddInvoiceimg.png'
import { Link } from 'react-router-dom'

function Receptionist() {
  return (
    <div className='RecContainer'>
        <div className="RecHeader">
            <p>Receptionist</p>
            <img src={imgReceptionist} alt="Receptionist"/>
        </div>
        <div className="RecBody">
            <div className="upper-left">
                <img src={ListPatients} alt="" />
                <button><Link to="/PaitentList_R" className='Links3' id='upper-left'>List Patients</Link></button>
            </div>
            <div className="upper-right">
                <img src={HealthServices} alt="" />
                <button><Link to="/HealthServices" className='Links3' id='upper-right'>Health Services</Link></button>
            </div>
            <div className="down-left">
                <img src={Invoices} alt="" />
                <button><Link to="/Invoices" className='Links3' id='down-left'>Invoices</Link></button>
            </div>
            <div className="down-right">
                <img src={AddInvoice} alt="" />
                <button><Link to="/AddInvoice" className='Links3' id='down-right'>Add Invoice</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Receptionist