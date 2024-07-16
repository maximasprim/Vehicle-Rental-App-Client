import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/Store'; // Adjust the import according to your project structure

export interface User {
  user_id: number;
  full_name: string;
  email: string;
  contact_phone?: string;
  address?: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      console.log('Token:', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
    fetchUserById: builder.query<User, number>({
      query: (user_id) => ({
        url: `users/${user_id}`,
        method: 'GET',
      }),
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ user_id, ...user }) => ({
        url: `users/${user_id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useFetchUsersQuery, 
  useFetchUserByIdQuery, // Add this line
  useAddUserMutation, 
  useUpdateUserMutation, 
  useDeleteUserMutation 
}:any = usersApi;
