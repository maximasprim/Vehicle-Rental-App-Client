// src/features/vehicles/vehiclesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface Vehicle {
    id: number;
    rental_rate: string;
    availability: boolean;
  }

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }), // Adjust baseUrl as per your API endpoint
  endpoints: (builder) => ({
    fetchVehicles: builder.query<Vehicle[], void>({
      query: () => 'vehicles', // Replace 'vehicles' with your actual API endpoint for fetching vehicles
    }),
    addVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: (vehicle) => ({
        url: 'vehicles',
        method: 'POST',
        body: vehicle,
      }),
    }),
    updateVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: ({ id, ...vehicle }) => ({
        url: `vehicles/${id}`,
        method: 'PUT',
        body: vehicle,
      }),
    }),
    deleteVehicle: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `vehicles/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const useFetchVehiclesQuery: typeof vehiclesApi.useFetchVehiclesQuery = vehiclesApi.useFetchVehiclesQuery;
export const useAddVehicleMutation: typeof vehiclesApi.useAddVehicleMutation = vehiclesApi.useAddVehicleMutation;
export const useUpdateVehicleMutation: typeof vehiclesApi.useUpdateVehicleMutation = vehiclesApi.useUpdateVehicleMutation;
export const useDeleteVehicleMutation: typeof vehiclesApi.useDeleteVehicleMutation = vehiclesApi.useDeleteVehicleMutation;

export default vehiclesApi;