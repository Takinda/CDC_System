import React from 'react';
import './Home.css'; // استيراد ملف CSS المخصص للأنماط
import homeLogo from '../Assets/images/Health.png'; // استيراد صورة شعار الصفحة الرئيسية
import iraqiLogo from '../Assets/images/Iraqi.png'; // استيراد صورة شعار العراقي

const Home = () => {
  return (
    <div className="container"> {/* حاوية رئيسية */}
      <header className="header"> {/* رأس الصفحة */}
        <h1>Chronic Diseases Clinic</h1> {/* عنوان الصفحة */}
        <img src={homeLogo} alt="Home Logo" className="home-logo" /> {/* شعار الصفحة */}
      </header>
      <div className="main-content"> {/* المحتوى الرئيسي */}
        <div className="buttons-container"> {/* حاوية الأزرار */}
          <button className="main-button">Receptionist</button> {/* زر موظف الاستقبال */}
          <button className="main-button">Doctor</button> {/* زر الطبيب */}
          <button className="main-button">Pharmacist</button> {/* زر الصيدلي */}
          <button className="main-button">ID Issuance</button> {/* زر إصدار الهويات */}
        </div>
        <div className="administration-container"> {/* حاوية الإدارة */}
          <h2>Administration</h2> {/* عنوان الإدارة */}
          <button className="admin-button">Drug store</button> {/* زر الصيدلية */}
          <button className="admin-button">Dashboard</button> {/* زر لوحة القيادة */}
          <button className="admin-button">Reports</button> {/* زر التقارير */}
          <button className="admin-button">Records</button> {/* زر السجلات */}
        </div>
      </div>
      <footer className="footer"> {/* تذييل الصفحة */}
        <img src={iraqiLogo} alt="Iraqi Logo" className="iraqi-logo" /> {/* شعار  */}
      </footer>
    </div>
  );
};

export default Home; // تصدير المكون

