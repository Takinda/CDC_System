import React, { useState } from 'react'; // استيراد المكتبة React ومكون useState
import './AddInvoice.css'; // استيراد ملف CSS لتنسيق المكونات
import Add from '../image/Add.png'; // استيراد صورة لإضافتها في المكون
import SaveIcon from '../image/Save.png'; // استيراد أيقونة لحفظ الفاتورة
import PrintIcon from '../image/Print.png'; // استيراد أيقونة لطباعة الفاتورة

// تعريف المكون الرئيسي AddInvoice كدالة مكونة
const AddInvoice: React.FC = () => {
  // تعريف حالة للاحتفاظ بالأمراض وقيمتها الافتراضية
  const [diseases, setDiseases] = useState<string[]>(['Diabetes', 'Hypertension', 'Asthma', 'COPD', 'Arthritis']);
  // تعريف حالة للاحتفاظ بمرض جديد يتم إضافته
  const [newDisease, setNewDisease] = useState('');
  // تعريف حالة لفتح أو إغلاق النافذة المنبثقة
  const [isModalOpen, setIsModalOpen] = useState(false);

  // دالة لإضافة مرض جديد إلى القائمة
  const addDiseaseOption = () => {
    if (newDisease) {
      setDiseases([...diseases, newDisease]); // إضافة المرض الجديد إلى القائمة
      setNewDisease(''); // إعادة تعيين حقل المرض الجديد إلى فارغ
      setIsModalOpen(false); // إغلاق النافذة المنبثقة
    }
  };

  // دالة للتعامل مع الضغط على مفتاح الإدخال في النافذة المنبثقة
  const handleModalKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addDiseaseOption(); // إضافة المرض الجديد عند الضغط على مفتاح الإدخال
    }
  };

  return (
    <div className="invoice-container"> {/* الحاوية الرئيسية للفاتورة */}
      <div className="header"> {/* الرأس الرئيسي */}
        <h1 className="invoice-title">Add an Invoice</h1> {/* عنوان الفاتورة */}
        <img src={Add} alt="Add" className="invoice-image" /> {/* صورة الإضافة */}
      </div>
      <div className="invoice-form"> {/* نموذج الفاتورة */}
        <form>
          <div className="form-group"> {/* مجموعة نموذج */}
            <label htmlFor="patient">Patient:</label> {/* تسمية لحقل المريض */}
            <input type="text" id="patient" name="patient" /> {/* حقل نص للمريض */}
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label> {/* تسمية لحقل التاريخ */}
            <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" /> {/* حقل نص للتاريخ */}
          </div>
          <div className="form-group">
            <label htmlFor="invoiceNumber">Invoice Number:</label> {/* تسمية لحقل رقم الفاتورة */}
            <input type="text" id="invoiceNumber" name="invoiceNumber" /> {/* حقل نص لرقم الفاتورة */}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label> {/* تسمية لحقل السعر */}
            <input type="text" id="price" name="price" /> {/* حقل نص للسعر */}
          </div>
          <div className="form-group">
            <label htmlFor="receptionist">Receptionist:</label> {/* تسمية لحقل موظف الاستقبال */}
            <input type="text" id="receptionist" name="receptionist" /> {/* حقل نص لموظف الاستقبال */}
          </div>
          <div className="form-group">
            <label htmlFor="diseases">Diseases:</label> {/* تسمية لحقل الأمراض */}
            <div className="diseases-group">
              <select id="diseases" name="diseases"> {/* قائمة منسدلة للأمراض */}
                {diseases.map((disease, index) => (
                  <option key={index} value={disease}>{disease}</option> // إضافة الخيارات للقائمة المنسدلة
                ))}
              </select>
              <button type="button" onClick={() => setIsModalOpen(true)} className="add-option-button">Add option</button> {/* زر لإضافة خيار جديد */}
            </div>
          </div>
        </form>
      </div>
      <div className="invoice-buttons"> {/* أزرار الفاتورة */}
        <button className="save-button">
          <img src={SaveIcon} alt="Save" className="button-icon" /> Save {/* زر الحفظ مع الأيقونة */}
        </button>
        <button className="print-button">
          <img src={PrintIcon} alt="Print" className="button-icon" /> Print {/* زر الطباعة مع الأيقونة */}
        </button>
      </div>

      {isModalOpen && ( // عرض النافذة المنبثقة إذا كانت الحالة مفتوحة
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span> {/* زر الإغلاق للنافذة المنبثقة */}
            <h2>Add New Disease</h2> {/* عنوان النافذة المنبثقة */}
            <input
              type="text"
              value={newDisease}
              onChange={(e) => setNewDisease(e.target.value)} // تحديث حالة المرض الجديد عند التغيير
              onKeyPress={handleModalKeyPress} // التعامل مع ضغط المفاتيح في حقل الإدخال
              placeholder="Enter new disease"
              className="new-disease-input"
            />
            <button onClick={addDiseaseOption} className="modal-add-button">Add</button> {/* زر لإضافة المرض الجديد */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInvoice; // تصدير المكون كإفتراضي
