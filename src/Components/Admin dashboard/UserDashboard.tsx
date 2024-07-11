import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Today's Statistics</h1>
          <p className="text-gray-600">Tue, 14 May, 2022 11:30 AM</p>
        </div>
        <input
          type="text"
          placeholder="Search here"
          className="p-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 shadow rounded-md">
          <h2 className="text-xl font-semibold mb-4">Income</h2>
          <p className="text-3xl font-semibold">$9460.00</p>
          <p className="text-red-600">1.5% down from yesterday</p>
          <p className="text-gray-600 mt-2">Last week income $32568.00</p>
        </div>
        <div className="bg-white p-6 shadow rounded-md">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          <p className="text-3xl font-semibold">$5660.00</p>
          <p className="text-green-600">2.5% up from yesterday</p>
          <p className="text-gray-600 mt-2">Last week expenses $25680.00</p>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Hire vs Cancel</h2>
        <div className="flex justify-center items-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <circle cx="16" cy="16" r="16" fill="white" />
              <path
                d="M16 0a16 16 0 110 32A16 16 0 0116 0zm0 3a13 13 0 100 26A13 13 0 0016 3z"
                fill="#4C51BF"
              />
              <path
                d="M16 0a16 16 0 010 32V16z"
                fill="#E53E3E"
              />
              <path
                d="M16 16a16 16 0 01-11.31-4.69L16 16z"
                fill="#DD6B20"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl font-semibold">54%</p>
            </div>
          </div>
          <div className="ml-6">
            <p className="text-gray-600">Total Hired: 54%</p>
            <p className="text-gray-600">Total Canceled: 20%</p>
            <p className="text-gray-600">Total Pending: 26%</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded-md">
        <h2 className="text-xl font-semibold mb-4">Live Car Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">No.</th>
                <th className="px-4 py-2 text-left">Car No.</th>
                <th className="px-4 py-2 text-left">Driver</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Earning</th>
                <th className="px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">01</td>
                <td className="border px-4 py-2">6465</td>
                <td className="border px-4 py-2">Alex Noman</td>
                <td className="border px-4 py-2">Completed</td>
                <td className="border px-4 py-2">$35.44</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600">Details</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">02</td>
                <td className="border px-4 py-2">5665</td>
                <td className="border px-4 py-2">Razib Rahman</td>
                <td className="border px-4 py-2">Pending</td>
                <td className="border px-4 py-2">$0.00</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600">Details</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">03</td>
                <td className="border px-4 py-2">1755</td>
                <td className="border px-4 py-2">Luke Norton</td>
                <td className="border px-4 py-2">In route</td>
                <td className="border px-4 py-2">$23.50</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-600">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Earning Summary</h2>
        <div>
          <p className="text-gray-600">Mar 2022 - Oct 2022</p>
          <div className="h-48 bg-gray-100 mt-4 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
