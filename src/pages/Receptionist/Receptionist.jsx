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
    <div className='Rec-Container'>
        <div className="Rec-Header">
            <h1>Receptionist</h1>
            <img src={imgReceptionist} alt="Receptionist"/>
        </div>
        <div className="Rec-columns">
            <div className="Rec-Rows">
                <div className="upper-left">
                    <img src={ListPatients} alt="" />
                    <Link to="/PaitentList_R" className='Links3'><button>List Patients</button></Link>
                </div>
                <div className="upper-right">
                    <img src={HealthServices} alt="" />
                    <Link to="/HealthServices" className='Links3'><button>Health Services</button></Link>
                </div>
            </div>
            <div className="Rec-Rows">
                <div className="down-left">
                    <img src={Invoices} alt="" />
                    <Link to="/Invoices" className='Links3'><button>Invoice</button></Link>
                </div>
                <div className="down-right">
                    <img src={AddInvoice} alt="" />
                    <Link to="/AddInvoice" className='Links3'><button>Add Invoice</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Receptionist