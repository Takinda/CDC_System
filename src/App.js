import React from 'react';
import './App.css';
import Login from './pages/Login';
import AddUsers from './pages/AddUser';
import MainPage from './pages/Home';
import PatientList from './pages/PatientList';
import Receptionist from './pages/Receptionist';
import HealthSer from './pages/HealthSer';
import Invoices from './pages/Invoices';
import AddInvoice from './pages/AddInvoice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddUser" element={<AddUsers />} />
          <Route path="/Home" element={<MainPage />} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path='/Receptionist' element={<Receptionist />} />
          <Route path='/HealthServices' element={<HealthSer />} />
          <Route path='/Invoices' element={<Invoices />} />
          <Route path='/AddInvoice' element={<AddInvoice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
