// Dropdown.js

import React from "react";

const Dropdown = ({ dropdownItems }) => {
  return (
    <ul className="dropdown-menu">
      {dropdownItems.map((item, index) => (
        <li key={index}>
          <a href={item.url} className={item.cName}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
