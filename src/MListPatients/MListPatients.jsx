import React, { useState } from 'react';
import './MListPatients.css'; // استيراد ملف CSS لتنسيق المكون
import profileImg from '../image/profile.png'; // استيراد صورة الملف الشخصي
import editImg from '../image/edit.png'; // استيراد صورة التعديل
import deleteImg from '../image/delete.png'; // استيراد صورة الحذف

const MPatientList = () => {
  const [searchTerm, setSearchTerm] = useState(''); // حالة لتخزين قيمة البحث
  const [patients] = useState([
    // قائمة المرضى
    { name: 'Ahmad Al-Farsi', disease: 'Diabetes' },
    { name: 'Fatima Al-Hassan', disease: 'Hypertension' },
    { name: 'Omar Al-Jabri', disease: 'Asthma' },
    { name: 'Aisha Al-Sayed', disease: 'Chronic Bronchitis' },
    { name: 'Hassan Al-Khalifa', disease: 'Heart Disease' },
    { name: 'Layla Al-Amiri', disease: 'Kidney Disease' },
    { name: 'Mohammed Al-Rashid', disease: 'Parkinson\'s Disease' },
    { name: 'Salma Al-Hadi', disease: 'Multiple Sclerosis' },
    { name: 'Ali Al-Zahrani', disease: 'Epilepsy' },
    { name: 'Nora Al-Sabah', disease: 'Lupus' },
    { name: 'Youssef Al-Mansoor', disease: 'Rheumatoid Arthritis' },
    // إضافة المزيد من المرضى حسب الحاجة
  ]);

  // دالة لمعالجة تغييرات البحث
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // تحديث حالة البحث
  };

  // تصفية المرضى بناءً على مصطلح البحث
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-list-container">
      {/* عنوان القائمة */}
      <h1 className="patient-list-header">List Patients</h1>
      {/* حاوية البحث وزر إضافة مريض */}
      <div className="patient-list-button-container">
        <input
          type="text"
          className="patient-list-search-input"
          placeholder="Search by patient name" // نص موضح في صندوق البحث
          value={searchTerm}
          onChange={handleSearchChange} // استدعاء الدالة عند تغيير القيمة
        />
        <button className="patient-list-add-button">Add Patient</button>
      </div>
      {/* حاوية الجدول */}
      <div className="patient-list-table-container">
        <table className="patient-list-patient-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>The Disease</th>
              <th>Procedures</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.disease}</td>
                <td className="patient-list-procedure-icons">
                  {/* أيقونات الإجراءات */}
                  <img src={profileImg} alt="Profile" className="patient-list-procedure-button" />
                  <img src={editImg} alt="Edit" className="patient-list-procedure-button" />
                  <img src={deleteImg} alt="Delete" className="patient-list-procedure-button" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MPatientList;
