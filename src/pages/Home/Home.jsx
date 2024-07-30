import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css'; // استيراد ملف CSS المخصص للأنماط
import homeLogo from '../../Assets/images/Health.png'; // استيراد صورة شعار الصفحة الرئيسية
import iraqiLogo from '../../Assets/images/Iraqi.png'; //استيراد صورة شعار 
const Home = () => {
  return (
    <div className="container"> {/* حاوية رئيسية */}
      <header className="header"> {/* رأس الصفحة */}
        <h1>Chronic Diseases Clinic</h1> {/* عنوان الصفحة */}
        <img src={homeLogo} alt="Home Logo" className="home-logo" /> {/* شعار الصفحة */}
      </header>
      <div className="main-content"> {/* المحتوى الرئيسي */}
        <div className="buttons-container"> {/* حاوية الأزرار */}
          <Link to="/Receptionist"><button className="main-button">Receptionist</button></Link> {/* زر موظف الاستقبال */}
          <Link to="/PatientList"><button className="main-button">Doctor</button></Link>{/* زر الطبيب */}
          <Link to="/Pharmacy"><button className="main-button">Pharmacist</button></Link> {/* زر الصيدلي */}
          <Link to="/Card"><button className="main-button">ID Issuance</button></Link>{/* زر إصدار الهويات */}
        </div>
        <div className="administration-container"> {/* حاوية الإدارة */}
          <h2>Administration</h2> {/* عنوان الإدارة */}
          <Link to="/DrugStore"><button className="admin-button">Drug store</button></Link> {/* زر الصيدلية */}
          <Link to="/Dashboard"><button className="admin-button">Dashboard</button></Link> {/* زر لوحة القيادة */}
          <Link to="/Reports"><button className="admin-button">Reports</button></Link> {/* زر التقارير */}
          <Link to="/Record"><button className="admin-button">Records</button></Link> {/* زر السجلات */}
        </div>
      </div>
      <footer className="footer"> {/* تذييل الصفحة */}
        <img src={iraqiLogo} alt="Iraqi Logo" className="iraqi-logo" /> {/* شعار  */}
      </footer>
    </div>
  );
};

export default Home; // تصدير المكون