import React from 'react';
import Sidebar from '../../features/Users/userSidebar'
import Dashboard from '../../Components/dashboard/UserDashboard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Appi: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />
      <Dashboard />
    </div>
    <Footer />
    </>
  );
};

export default Appi;
