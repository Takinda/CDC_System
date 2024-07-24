import React, { useState } from 'react';
import employeeList from '../../Assets/images/EmployeeList.png';
import AddUser from '../AddUser/AddUser';
import List from './EmployeeList.json';
import './DashBoard.css';

function DashBoard() {
    const [employees, setEmployees] = useState(List);

    const [showAddUser, setShowAddUser] = useState(false);
    const ToggleAddUser = () => {
      setShowAddUser(!showAddUser);  
    };

    return (
        <div className='DashBoard-Container'>
            <header className='DashBoard-Title'>
                <div>
                    <p>List of Employees</p>
                    <input type="text" placeholder='Search' />
                    <button onClick={ToggleAddUser} >Add</button>
                    {showAddUser && <AddUser />}
                </div>
                <img src={employeeList} alt="Employee List" />
            </header>
            <main className='DashBoard-Body'>
                <table>
                    <thead>
                        <tr>
                            <th>Employees</th>
                            <th id='Prof2'>Professional Titles</th>
                        </tr>
                    </thead>
                </table>
                <div className='Table-Body-Container'>
                    <table>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.Role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default DashBoard;
