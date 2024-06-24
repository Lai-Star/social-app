import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div className="flex">
        {!hideNavbar && <Sidebar />}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
