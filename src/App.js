import React from 'react';
import './App.css';
import Login from './pages/Login';
import AddUsers from './pages/AddUser';
import MainPage from './pages/Home';
import PatientList from './pages/PatientList';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
