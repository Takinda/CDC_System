import React from 'react';
import './DropdownItems.css';

function Dropdown({ onSelectRole }) {
  const roles = ['Doctor', 'Pharmacist', 'Admin', 'Reception'];

  return (
    <div className='DropdownContent'>
      <ul className='roles'>
        {roles.map((role) => (
          <li
            key={role}
            className={`role-item ${role.toLowerCase()}`}
            onClick={() => onSelectRole(role)}
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
