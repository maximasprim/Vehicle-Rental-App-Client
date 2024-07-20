import React from 'react';
import Sidebar from './adminSidebar'
// import Dashboard from '../../Components/Admin dashboard/AdminDashboard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Outlet } from 'react-router-dom';

const Appi: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />
      {/* <Dashboard /> */}
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Appi;
