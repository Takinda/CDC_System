import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Invoice.css';

const Invoices = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // هنا يمكن وضع منطق البحث وتصفيه النتائج بناءً على الفترة الزمنية المحددة
        console.log(`Searching from ${startDate} to ${endDate}`);
    };

    return (
        <div className="invoices-container">
            <header className="header">
                <button className="back-button">{/* أيقونة الرجوع */}</button>
                <h1 className="title">قائمة الفواتير</h1>
            </header>
            
            <div className="search-container">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="تاريخ البداية"
                    className="date-picker"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="تاريخ النهاية"
                    className="date-picker"
                />
                <button className="search-button" onClick={handleSearch}>بحث</button>
            </div>

            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>رقم الفاتورة</th>
                        <th>اسم المريض</th>
                        <th>الحالة</th>
                        <th>تاريخ الفاتورة</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((invoice, index) => (
                        <tr key={index}>
                            <td>{invoice.invoiceNumber}</td>
                            <td>{invoice.patientName}</td>
                            <td>{invoice.status}</td>
                            <td>{invoice.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Invoices;
