import React, { useState } from 'react'; // استيراد React و useState من مكتبة React
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate من مكتبة react-router-dom للتنقل بين الصفحات
import './Mlogin.css'; // استيراد ملف CSS المخصص للأنماط
import showIcon from '../image/show.png'; // استيراد أيقونة لإظهار كلمة المرور
import hideIcon from '../image/hide.png'; // استيراد أيقونة لإخفاء كلمة المرور

const Mlogin = () => {
  // حالة لتحديد ما إذا كانت كلمة المرور مرئية أم لا
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  // وظيفة للتنقل بين الصفحات
  const navigate = useNavigate();

  // وظيفة لتبديل رؤية كلمة المرور بين النص وكلمة المرور
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // وظيفة لتسجيل الدخول والتحقق من البيانات
  const handleLogin = () => {
    // تحقق من بيانات تسجيل الدخول هنا (يمكنك إضافة التحقق من اسم المستخدم وكلمة المرور)
    // إذا كانت البيانات صحيحة، انتقل إلى واجهة MHome
    navigate('/home'); // الانتقال إلى صفحة MHome بعد تسجيل الدخول
  };

  return (
    <div className="login-App"> {/* الحاوية الرئيسية */}
      <div className="login-login-box"> {/* صندوق تسجيل الدخول */}
        <h2>Login</h2> {/* عنوان تسجيل الدخول */}
        <div className="login-input-box"> {/* حاوية حقل اسم المستخدم */}
          <input type="text" placeholder="Username" /> {/* حقل إدخال اسم المستخدم */}
        </div>
        <div className="login-input-box"> {/* حاوية حقل كلمة المرور */}
          <input
            type={passwordVisible ? 'text' : 'password'} // تحديد نوع الحقل بناءً على رؤية كلمة المرور
            placeholder="Password" // النص الذي يظهر داخل حقل كلمة المرور
          />
          <button
            type="button" // نوع الزر كزر عادي
            onClick={togglePasswordVisibility} // ربط وظيفة تبديل رؤية كلمة المرور عند النقر
            className="login-toggle-password-visibility" // تعيين فئة CSS لأيقونة التبديل
          >
            <img
              src={passwordVisible ? hideIcon : showIcon} // عرض الأيقونة المناسبة بناءً على حالة رؤية كلمة المرور
              alt={passwordVisible ? 'Hide' : 'Show'} // نص بديل للأيقونة
            />
          </button>
        </div>
        <button className="login-login-button" onClick={handleLogin}> {/* زر تسجيل الدخول */}
          Login
        </button>
      </div>
    </div>
  );
}

export default Mlogin; // تصدير مكون تسجيل الدخول
