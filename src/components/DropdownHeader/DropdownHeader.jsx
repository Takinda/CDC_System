import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import DropdownItems from '../DropdownItems/DropdownItems';
import './DropdownHeader.css';

function DropdownHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Role");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  return (
    <div className='dropdownHead'>
      <div className="role-box" onClick={toggleDropdown}>
        <h3 className='role-header'>{selectedRole}</h3>
        {isOpen ? <IoIosArrowUp size={30} className='icon' id='icon'/> : <IoIosArrowDown size={30} className='icon' id='icon' />}
      </div>
      {isOpen && <DropdownItems onSelectRole={handleRoleSelect} />}
    </div>
  );
}

export default DropdownHeader;
