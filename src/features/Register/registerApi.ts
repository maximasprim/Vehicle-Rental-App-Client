// src/features/register/registerApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterUser } from './registerSlice';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Adjust baseUrl as per your API endpoint
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, RegisterUser>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registerApi;

export default registerApi;