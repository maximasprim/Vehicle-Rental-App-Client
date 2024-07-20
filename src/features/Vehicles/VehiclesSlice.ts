import { createSlice } from '@reduxjs/toolkit';
import { Vehicle } from './VehiclesApi';
import { vehiclesApi } from './VehiclesApi';

interface VehiclesState {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  loading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(vehiclesApi.endpoints.fetchVehicles.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(vehiclesApi.endpoints.fetchVehicles.matchFulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addMatcher(vehiclesApi.endpoints.fetchVehicles.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch vehicles';
      })
      .addMatcher(vehiclesApi.endpoints.addVehicle.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(vehiclesApi.endpoints.addVehicle.matchFulfilled, (state, action) => {
        state.loading = false;
        state.vehicles.push(action.payload);
      })
      .addMatcher(vehiclesApi.endpoints.addVehicle.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add vehicle';
      })
      .addMatcher(vehiclesApi.endpoints.updateVehicle.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(vehiclesApi.endpoints.updateVehicle.matchFulfilled, (state, action) => {
        state.loading = false;
        const index = state.vehicles.findIndex((vehicle) => vehicle.vehicle_id === action.payload.vehicle_id);
        if (index !== -1) {
          state.vehicles[index] = action.payload;
        }
      })
      .addMatcher(vehiclesApi.endpoints.updateVehicle.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update vehicle';
      })
      .addMatcher(vehiclesApi.endpoints.deleteVehicle.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(vehiclesApi.endpoints.deleteVehicle.matchFulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = state.vehicles.filter((vehicle) => vehicle.vehicle_id !== action.payload.id);
      })
      .addMatcher(vehiclesApi.endpoints.deleteVehicle.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete vehicle';
      });
  },
});

export default vehiclesSlice.reducer;
