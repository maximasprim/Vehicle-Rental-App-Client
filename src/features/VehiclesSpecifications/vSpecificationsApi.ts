// src/features/vehicleSpecifications/vehicleSpecificationsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VehicleSpecification } from './vSpecificationsSlice';

export const vehicleSpecificationsApi = createApi({
  reducerPath: 'vehicleSpecificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    fetchVehicleSpecifications: builder.query<VehicleSpecification[], void>({
      query: () => 'vehiclesSpecifications',
    }),
    addVehicleSpecification: builder.mutation<VehicleSpecification, Partial<VehicleSpecification>>({
      query: (vehicleSpecification) => ({
        url: 'vehiclesSpecifications',
        method: 'POST',
        body: vehicleSpecification,
      }),
    }),
    updateVehicleSpecification: builder.mutation<VehicleSpecification, Partial<VehicleSpecification>>({
      query: ({ id, ...vehicleSpecification }) => ({
        url: `vehiclesSpecifications/${id}`,
        method: 'PUT',
        body: vehicleSpecification,
      }),
    }),
    deleteVehicleSpecification: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `vehiclesSpecifications/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const useFetchVehicleSpecificationsQuery: typeof vehicleSpecificationsApi.useFetchVehicleSpecificationsQuery = vehicleSpecificationsApi.useFetchVehicleSpecificationsQuery;
export const useAddVehicleSpecificationMutation: typeof vehicleSpecificationsApi.useAddVehicleSpecificationMutation = vehicleSpecificationsApi.useAddVehicleSpecificationMutation;
export const useUpdateVehicleSpecificationMutation: typeof vehicleSpecificationsApi.useUpdateVehicleSpecificationMutation = vehicleSpecificationsApi.useUpdateVehicleSpecificationMutation;
export const useDeleteVehicleSpecificationMutation: typeof vehicleSpecificationsApi.useDeleteVehicleSpecificationMutation = vehicleSpecificationsApi.useDeleteVehicleSpecificationMutation;

export default vehicleSpecificationsApi;