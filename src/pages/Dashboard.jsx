import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import SideBar from '../components/layout/SideBar';
import Header from '../components/layout/Header';
import Barner from '../components/Barner';
import Analytics from '../components/Analytics';
import Product from '../components/Product';
import UserTable from '../components/UserTable';
import { useTheme } from '../hooks/useTheme';
import Action from '../components/Action';
import Activity from '../components/Activity';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setShowSidebar(false);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <div className={`flex h-screen w-full overflow-hidden ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-64">
          <SideBar isMobile={false} />
        </div>
      </div>

      {showSidebar && (
        <>
          <div
            className={`lg:hidden fixed inset-0 z-40 transition-opacity ${isDark ? 'bg-primarycolor-950 bg-opacity-40' : 'bg-black bg-opacity-10'}`}
            onClick={closeSidebar}
            aria-hidden="true"
          />
          <div
            className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 shadow-xl transform transition-transform ${
              isDark ? 'bg-primarycolor-900 border-r border-gray-700' : 'bg-white'
            }`}
          >
            <div className="h-full overflow-y-auto">
              <div className={`flex justify-end p-4 border-b ${isDark ? 'border-gray-700' : ''}`}>
                <button
                  onClick={closeSidebar}
                  className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  aria-label="Close sidebar"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <SideBar isMobile={true} onItemClick={closeSidebar} />
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className={`lg:hidden px-4 py-3 flex items-center justify-between border-b ${isDark ? 'bg-primarycolor-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <button
            onClick={toggleSidebar}
            className={`rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Open sidebar"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="w-6 h-6"></div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block flex-shrink-0">
          <Header />
        </div>

        {/* Content Area */}
        <main className={`flex-1 overflow-y-auto ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
          <div className="block lg:hidden">
            <Header />
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Barner />
                    <Analytics />
                    <Activity />
                    <Action />
                  </>
                }
              />
              <Route path="/users" element={<UserTable />} />
              <Route path="/products" element={<Product />} />
              <Route path="/assignments" element={<Activity />} />
              <Route path="/categories" element={<Action />} />
              <Route path="*" element={<div className="p-6 text-red-500">Page Not Found</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
