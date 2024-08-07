// App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mlogin from './Mlogin/Mlogin';
import MHome from './MHome/MHome';
import MReceptionist from './MReceptionist/MReceptionist';
import MListPatients from './MListPatients/MListPatients';
import MAddInvoice from './MAddInvoice/MAddInvoice'; // Import the MAddInvoice component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mlogin />} />
        <Route path="/home" element={<MHome />} />
        <Route path="/receptionist" element={<MReceptionist />} />
        <Route path="/list-patients" element={<MListPatients />} />
        <Route path="/add-invoice" element={<MAddInvoice />} /> 
      </Routes>
    </Router>
  );
}

export default App;

*/


// App.js
/*
import React from 'react';
import AddPatient from './AddPatient/AddPatient'; // تأكد من مسار الملف الصحيح

function App() {
  return (
    <div className="App">
      <AddPatient />
    </div>
  );
}

export default App;
*/




import React, { useState } from 'react';
import Invoice from './Invoice/Invoice';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'; // هنا يمكن وضع التنسيقات العامة للتطبيق

const App = () => {
    return (
        <div className="app-container">
            <Invoice />
        </div>
    );
};

export default App;

