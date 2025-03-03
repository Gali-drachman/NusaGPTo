import React from "react";
import { FaHome, FaHistory, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">AI Chat</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200">
              <FaHome className="mr-2" />
              <span>Home</span>
            </button>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200">
              <FaHistory className="mr-2" />
              <span>History</span>
            </button>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200">
              <FaCog className="mr-2" />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <FaSignOutAlt className="mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
