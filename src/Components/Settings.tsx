import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [profileData, setProfileData] = useState({
    full_name: '',
    email: '',
    contact_phone: '',
    address: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password update
  };

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle notification preferences update
  };

  return (
    <div className="p-8 bg-gray-700 min-h-screen">
      <div className="max-w-5xl mx-auto bg-gray-500	background-color: rgb(75 85 99) shadow-md rounded-lg">
        <h2 className="text-2xl font-bold p-4 border-b">Settings</h2>

        {/* Profile Update Form */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
          <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={profileData.full_name}
              onChange={handleProfileChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profileData.email}
              onChange={handleProfileChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="contact_phone"
              placeholder="Contact Phone"
              value={profileData.contact_phone}
              onChange={handleProfileChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={profileData.address}
              onChange={handleProfileChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-900 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Password Update Form */}
        <div className="p-4 border-t">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <form onSubmit={handlePasswordSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-800 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
            >
              Change Password
            </button>
          </form>
        </div>

        {/* Notification Preferences Form */}
        <div className="p-4 border-t">
          <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
          <form onSubmit={handleNotificationSubmit} className="grid grid-cols-1 gap-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={notificationPreferences.emailNotifications}
                onChange={handleNotificationChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>Email Notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={notificationPreferences.smsNotifications}
                onChange={handleNotificationChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>SMS Notifications</span>
            </label>
            <button
              type="submit"
              className="w-full py-2 bg-blue-800 hover:bg-red-700 rounded-md text-white font-semibold transition duration-300"
            >
              Update Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
