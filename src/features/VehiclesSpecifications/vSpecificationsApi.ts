import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TVehicleSpecification {
  vehicle_id: number;
  manufacturer: string;
  model: string;
  year: number;
  fuel_type: string;
  engine_capacity: string;
  transmission: string;
  seating_capacity: number;
  color: string;
  features: string;
  return_date: string;
  total_amount: number;
  booking_status: string;
  created_at: string;
  updated_at: string;
}

// Define the API slice
export const vehicleSpecificationApi = createApi({
  reducerPath: 'vehicleSpecificationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vehicle-renting-service-api.onrender.com/',
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
    getVehicleSpecifications: builder.query<TVehicleSpecification[], void>({
      query: () => 'vehiclesSpecifications',
      providesTags: ['VehicleSpecification'],
    }),
    createVehicleSpecification: builder.mutation<TVehicleSpecification, Partial<TVehicleSpecification>>({
      query: (newSpec) => ({
        url: 'vehiclesSpecifications',
        method: 'POST',
        body: newSpec,
      }),
      invalidatesTags: ['VehicleSpecification'],
    }),
    updateVehicleSpecification: builder.mutation<TVehicleSpecification, Partial<TVehicleSpecification>>({
      query: ({ vehicle_id, ...rest }) => ({
        url: `vehiclesSpecifications/${vehicle_id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['VehicleSpecification'],
    }),
    deleteVehicleSpecification: builder.mutation<{ success: boolean; vehicle_id: number }, number>({
      query: (vehicle_id) => ({
        url: `vehiclesSpecifications/${vehicle_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['VehicleSpecification'],
    }),
  }),
});

// Export the auto-generated hooks
export const {
  useGetVehicleSpecificationsQuery,
  useCreateVehicleSpecificationMutation,
  useUpdateVehicleSpecificationMutation,
  useDeleteVehicleSpecificationMutation,
}:any = vehicleSpecificationApi;
