import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TSpecification {
//   vehicleSpec_id: number;
//   manufacturer: string;
//   model: string;
//   year: number;
//   fuel_type: string;
//   engine_capacity: string;
//   transmission: string;
//   seating_capacity: number;
//   color: string;
//   features: string;
}

// Define the API slice
export const vSpecificationsApi = createApi({
  reducerPath: 'vehicleSpecificationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
      const token = userDetails?.token;
      console.log('Token:', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['VehicleSpecification'],
  endpoints: (builder) => ({
    getVehicleSpecifications: builder.query<TSpecification[], void>({
      query: () => 'vehicleSpecifications',
      providesTags: ['VehicleSpecification'],
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetVehicleSpecificationsQuery }:any = vSpecificationsApi;
