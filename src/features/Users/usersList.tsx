import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser as addUserLocal, updateUser as updateUserLocal, deleteUser as deleteUserLocal } from './userSlice';
import { RootState, AppDispatch } from '../../app/Store';
import { useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './userapi';

const UsersList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  const initialUserState = { id: 0, full_name: '', email: '', contact_phone: '', address: '', role: 'user' };
  const [newUser, setNewUser] = useState(initialUserState);
  const [addUser] = useAddUserMutation();
  const [editMode, setEditMode] = useState(false);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = async () => {
    try {
      console.log("Adding user:", newUser);
      await addUser(newUser).unwrap();
      dispatch(fetchUsers());
      setNewUser(initialUserState); // Reset the form after adding user
    } catch (err) {
      console.error('Failed to add user:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdateUser = async () => {
    try {
      if (!newUser.id) {
        console.error('No user ID found for update.');
        return;
      }
      console.log("Updating user:", newUser);
      const updatedUser = await updateUser(newUser).unwrap();
      dispatch(updateUserLocal(updatedUser));
      setNewUser(initialUserState);
      setEditMode(false);
      console.log("User updated successfully:", updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleEditUser = (user: any) => {
    console.log("Editing user:", user);
    setNewUser(user);
    setEditMode(true);
  };
  

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id).unwrap();
      dispatch(deleteUserLocal(id));
    } catch (error) {
      console.error('Failed to delete user${id}', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={newUser.full_name}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="text"
          name="contact_phone"
          placeholder="Phone"
          value={newUser.contact_phone}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newUser.address}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {editMode ? (
          <button onClick={handleUpdateUser} className="btn btn-primary w-full">Update User</button>
        ) : (
          <button onClick={handleAddUser} className="btn btn-primary w-full">Add User</button>
        )}
      </div>
      
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.full_name}</td>
              <td>{user.email}</td>
              <td>{user.contact_phone}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
              <td>
                <div className='flex space-x-2'>
                  <button className='btn btn-sm btn-info' onClick={() => handleEditUser(user)}>Edit</button>
                  <button className='btn btn-sm btn-error' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
