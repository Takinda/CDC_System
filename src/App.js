import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import AddUsers from './pages/AddUser/AddUser';
import MainPage from './pages/Home/Home';
import DashBoard from './pages/DashBoard/DashBoard';
import PatientList from './pages/Receptionist/Inside-pages/PatientList';
import Receptionist from './pages/Receptionist/Receptionist';
import HealthSer from './pages/Receptionist/Inside-pages/HealthSer';
import Invoices from './pages/Invoices/Invoices';
import AddInvoice from './AddInvoice/AddInvoice.tsx';
import AddPatients from './AddPatient/AddPatient.tsx';
import Pharmacy from './pages/Pharmcy/Pharmcy';
import PaitentList_R from './pages/Receptionist/Inside-pages/AddedPatients';
import PatientInfo from './AddPatient/AddPatient.tsx'
import DrugStore from "./DrugStore/DrugStore.jsx"
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
          <Route path='/AddInvoice' element={<AddInvoice />} />
          <Route path='/AddPatients' element={<AddPatients />} />
          <Route path='/Invoices' element={<Invoices />} />
          <Route path='/Pharmacy' element={<Pharmacy />} />
          <Route path='/PaitentList_R' element={<PaitentList_R />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/Patient-Info' element={<PatientInfo/>} />
          <Route path='/DrugStore' element={<DrugStore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
