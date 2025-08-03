import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiPackage, FiLogOut, FiLayers } from "react-icons/fi";
import { MdOutlineLaptopChromebook, MdOutlineSegment } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { useTheme } from '../../hooks/useTheme';

const SideBar = ({ isMobile = false, onItemClick }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: MdOutlineLaptopChromebook, to: '/' },
    { name: 'Users', icon: LuUsers, to: '/users', count: 116 },
    { name: 'Products', icon: FiPackage, to: '/products', count: 100 },
    { name: 'Assignments', icon: MdOutlineSegment, to: '/assignments', count: 10 },
    { name: 'Categories', icon: FiLayers, to: '/categories' },
  ];

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing localStorage, auth tokens, etc.)
    navigate('/login');
  };

  return (
    <div className={`h-full w-full ${isDark ? 'bg-primarycolor-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md flex flex-col`}>
      <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group
                ${isActive
                  ? isDark
                    ? 'bg-primarycolor-800 text-primarycolor-100 shadow-sm'
                    : 'bg-primarycolor-50 text-primarycolor-500 shadow-sm'
                  : isDark
                    ? 'text-gray-300 hover:bg-primarycolor-600 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`
              }
              onClick={() => {
                if (isMobile && onItemClick) {
                  onItemClick();
                }
              }}
            >
              <Icon size={20} />
              <span className={`font-medium text-sm sm:text-base min-w-0 flex-1 truncate ${isDark ? 'text-gray-100' : ''}`}>
                {item.name}
              </span>
              {item.count && (
                <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${
                  isDark ? 'bg-primarycolor-900 text-primarycolor-100' : 'bg-primarycolor-100 text-primarycolor-700'
                }`}>
                  {item.count}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-300">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-500 hover:text-red-700 text-sm"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
