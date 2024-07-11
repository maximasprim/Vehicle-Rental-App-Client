import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/dashboard/users" className="text-gray-700 hover:text-blue-600">Users</a>
          </li>
          <li className="mb-4">
            <a href="/vehicles" className="text-gray-700 hover:text-blue-600">Vehicles</a>
          </li>
          <li className="mb-4">
            <a href="/vehiclesSpecs" className="text-gray-700 hover:text-blue-600">VehiclesSpecifications</a>
          </li>
          <li className="mb-4">
            <a href="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Notifications</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="text-red-600">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
