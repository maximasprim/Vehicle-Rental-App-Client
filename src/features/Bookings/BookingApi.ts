// src/features/bookings/bookingsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Booking } from 

export interface Booking {
    id: number;
    userId: number;
    date: string;
    // other fields
  }
export const bookingsApi = createApi({
  reducerPath: 'bookingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/bookings' }), // Adjust baseUrl as per your API endpoint
  endpoints: (builder) => ({
    fetchBookings: builder.query<Booking[], void>({
      query: () => 'bookings', // Replace 'bookings' with your actual API endpoint for fetching bookings
    }),
  }),
});

export const useFetchBookingsQuery: any = bookingsApi.useFetchBookingsQuery;

export default bookingsApi;
