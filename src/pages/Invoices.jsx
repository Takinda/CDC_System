import React from 'react'
import '../Styles/Invoices.css'
import Invoiceimg from '../Assets/images/Invoiceimg.png'

function Invoices() {
  return (
    <div className='InvoiceContainer'>
        <div className='InvoiceHeader'>
            <p>Invoices</p>
            <img src={Invoiceimg} alt="Invoices"/>
        </div>
        <div className='InvoiceBody'>
            <div className="InList">
                <div className="InHeader">
                    <p>Invoice</p>
                    <p>Date</p>
                </div>
                <div className="InContent">
                    <div className="Invoice1">
                        <p className='InName'>Invoice 1</p>
                        <p className='InDate'>3/12/2024    2:14PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoices