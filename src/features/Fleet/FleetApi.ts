import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TFleet {
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export const FleetManagementApi = createApi({
  reducerPath: 'fleetManagementApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
      const token = userDetails?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Fleet'],
  endpoints: (builder) => ({
    getFleets: builder.query<TFleet[], void>({
      query: () => 'fleets',
      providesTags: ['Fleet'],
    }),
    createFleet: builder.mutation<TFleet, Partial<TFleet>>({
      query: (newFleet) => ({
        url: 'fleets',
        method: 'POST',
        body: newFleet,
      }),
      invalidatesTags: ['Fleet'],
    }),
    updateFleet: builder.mutation<TFleet, Partial<TFleet>>({
      query: ({ fleet_id, ...rest }) => ({
        url: `fleets/${fleet_id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Fleet'],
    }),
    deleteFleet: builder.mutation<{ success: boolean; fleet_id: number }, number>({
      query: (fleet_id) => ({
        url: `fleets/${fleet_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Fleet'],
    }),
  }),
});

export const {
  useGetFleetsQuery,
  useCreateFleetMutation,
  useUpdateFleetMutation,
  useDeleteFleetMutation,
}:any = FleetManagementApi;
