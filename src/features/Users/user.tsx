// src/features/users/Users.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser as addUserLocal, updateUser as updateUserLocal, deleteUser as deleteUserLocal } from './userSlice';
import { useFetchUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from './userapi';

const Users: React.FC = () => {
  const [newUser, setNewUser] = useState<{ full_name: string; email: string }>({ full_name: '', email: '' });
  const dispatch = useDispatch();
  const { data: users = [], isLoading } = useFetchUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleAddUser = async () => {
    if (newUser.full_name.trim() && newUser.email.trim()) {
      try {
        const addedUser = await addUser(newUser).unwrap();
        dispatch(addUserLocal(addedUser));
        setNewUser({ full_name: '', email: '' });
      } catch (error) {
        console.error('Failed to add user:', error);
      }
    }
  };

  const handleUpdateUser = async (id: number, updatedInfo: Partial<{ full_name: string; email: string }>) => {
    const userToUpdate = users.find((user) => user.id === id);
    if (userToUpdate) {
      try {
        const updatedUser = await updateUser({ id, ...updatedInfo }).unwrap();
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
      console.error('Failed to delete user ${id}', error);
    }
  };

  return (
    <div className="overflow-x-auto text-base-content bg-base-100 rounded-lg">
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={newUser.full_name}
        onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleUpdateUser(user.id, { full_name: 'Updated Name' })}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
