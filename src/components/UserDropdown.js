import React, { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaChevronDown } from "react-icons/fa";

const UserDropdown = ({ username, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button untuk membuka dropdown */}
      <button
        className="flex items-center space-x-2 p-2 bg-white border rounded-md shadow-sm hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUser className="text-gray-600" />
        <span>{username || "User"}</span>
        <FaChevronDown className="text-gray-500" />
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2">
            <FaCog className="text-gray-600" />
            <span>Settings</span>
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 flex items-center space-x-2"
            onClick={onLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
