import React, { useState, useEffect } from 'react';
import { useFetchUserByIdQuery, useUpdateUserMutation } from './userapi';

const UserProfile: React.FC = () => {
  const userId = localStorage.getItem('user_id');
  const { data: user, error, isLoading } = useFetchUserByIdQuery(userId);
  const [updateUser] = useUpdateUserMutation();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_phone: '',
    address: '',
    profile_picture: null as File | null
  });

  useEffect(() => {
    if (user) {
      setFormData({
        full_name: user.full_name || '',
        email: user.email || '',
        contact_phone: user.contact_phone || '',
        address: user.address || '',
        profile_picture: null
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'profile_picture') {
      setFormData({ ...formData, [e.target.name]: e.target.files?.[0] || null });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('id', userId!);
    formDataToSubmit.append('full_name', formData.full_name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('contact_phone', formData.contact_phone);
    formDataToSubmit.append('address', formData.address);
    if (formData.profile_picture) {
      formDataToSubmit.append('profile_picture', formData.profile_picture);
    }

    try {
      await updateUser(formDataToSubmit).unwrap();
      alert('User updated successfully');
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-slate-100">My Profile</h1>
        {user && (
          <>
            <div className="mb-6">
              <p className="text-lg font-medium text-white">Full Name: <span className="font-normal text-slate-100">{user.full_name}</span></p>
              <p className="text-lg font-medium text-white">Email: <span className="font-normal text-slate-100">{user.email}</span></p>
              <p className="text-lg font-medium text-white">Role: <span className="font-normal text-slate-100">{user.role}</span></p>
              <p className="text-lg font-medium text-white">Contact Phone: <span className="font-normal text-slate-100">{user.contact_phone}</span></p>
              <p className="text-lg font-medium text-white">Address: <span className="font-normal text-slate-100">{user.address}</span></p>
              {user.profile_picture && (
                <img src={user.profile_picture} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Contact Phone</label>
                <input
                  type="text"
                  name="contact_phone"
                  value={formData.contact_phone}
                  onChange={handleChange}
                  placeholder="Contact Phone"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-black">Profile Picture</label>
                <input
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold transition duration-300"
              >
                Update Profile
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
