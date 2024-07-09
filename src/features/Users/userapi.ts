// src/features/users/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './userSlice'; // Assuming User interface is defined in userSlice

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }), // Adjust baseUrl as per your API endpoint
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => 'users', // Replace 'users' with your actual API endpoint for fetching users
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ id, ...user }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useFetchUsersQuery, 
  useAddUserMutation, 
  useUpdateUserMutation, 
  useDeleteUserMutation 
} = usersApi;

export default usersApi;
