// src/features/users/UsersList.tsx
import React, { useEffect, useState } from 'react';
// import  './userlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser as addUserLocal, updateUser as updateUserLocal, deleteUser as deleteUserLocal } from './userSlice';
import { RootState, AppDispatch } from '../../app/Store';
import { useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './userapi';

const UsersList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  const [newUser, setNewUser] = useState({ full_name: '', email: '', contact_phone: '', address: '', role: 'user' });
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = async () => {
    if (newUser.full_name.trim() && newUser.email.trim()) {
      try {
        const addedUser = await addUser(newUser).unwrap();
        dispatch(addUserLocal(addedUser));
        setNewUser({ full_name: '', email: '', contact_phone: '', address: '', role: 'user' });
      } catch (error) {
        console.error('Failed to add user:', error);
      }
    }
  };

  const handleUpdateUser = async (id: number) => {
    const userToUpdate = users.find((user) => user.id === id);
    if (userToUpdate) {
      try {
        const updatedUser = await updateUser({ id, ...newUser }).unwrap();
        dispatch(updateUserLocal(updatedUser));
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id).unwrap();
      dispatch(deleteUserLocal(id));
    } catch (error) {
      console.error('Failed to delete user:', error);
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={newUser.full_name}
          onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
          className="input-field" // Add the className here
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="input-field" // Add the className here
        />
        <input
          type="text"
          placeholder="Phone"
          value={newUser.contact_phone}
          onChange={(e) => setNewUser({ ...newUser, contact_phone: e.target.value })}
          className="input-field" // Add the className here
        />
        <input
          type="text"
          placeholder="Address"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          className="input-field" // Add the className here
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="input-field" // Add the className here
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <button onClick={handleAddUser}>Add User</button>
      
      </div>
      <table className="table table-xs">
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
                <div className='actions'>
                <button className='edit' onClick={() => handleUpdateUser(user.id)}>Edit</button>
                <button className='delete' onClick={() => handleDeleteUser(user.id)}>Delete</button>
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
