import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Vehicle {
  vehicle_id: number;
  rental_rent: number;
  availability: string;
}

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vehicle-renting-service-api.onrender.com/' }),
  endpoints: (builder) => ({
    fetchVehicles: builder.query<Vehicle[], void>({
      query: () => 'vehicles',
    }),
    fetchVehicleById: builder.query<Vehicle, number>({
      query: (id) => `vehicles/${id}`,
    }),
    addVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: (vehicle) => ({
        url: 'vehicles',
        method: 'POST',
        body: vehicle,
      }),
    }),
    updateVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: ({ vehicle_id, ...patch }) => ({
        url: `vehicles/${vehicle_id}`,
        method: 'PATCH',
        body: patch,
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

export const { 
  useFetchVehiclesQuery, 
  useFetchVehicleByIdQuery, 
  useAddVehicleMutation, 
  useUpdateVehicleMutation, 
  useDeleteVehicleMutation 
}:any = vehiclesApi;
