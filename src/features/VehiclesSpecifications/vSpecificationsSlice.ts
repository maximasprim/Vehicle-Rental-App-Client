// src/features/vehicleSpecifications/vehicleSpecificationsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface VehicleSpecification {
  id: number;
  manufacturer: string;
  model: string;
  year: Number;
  fuel_type: string;
  engine_capacity: string;
  return_date: string;
  total_amount: string;
  booking_status: boolean;
  created_at: string;
  updated_at: string;
}

export interface VehicleSpecificationsState {
  vehicleSpecifications: VehicleSpecification[];
  loading: boolean;
  error: string | null;
}

const initialState: VehicleSpecificationsState = {
  vehicleSpecifications: [],
  loading: false,
  error: null,
};

export const fetchVehicleSpecifications: any = createAsyncThunk('vehicleSpecifications/fetchVehicleSpecifications', async () => {
  const response = await fetch('http://localhost:3000/vehiclesSpecifications');
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle specifications');
  }
  return (await response.json()) as VehicleSpecification[];
});

export const addVehicleSpecification: any = createAsyncThunk('vehicleSpecifications/addVehicleSpecification', async (vehicleSpecification: Partial<VehicleSpecification>) => {
  const response = await fetch('http://localhost:3000/vehiclesSpecifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicleSpecification),
  });
  if (!response.ok) {
    throw new Error('Failed to add vehicle specification');
  }
  return (await response.json()) as VehicleSpecification;
});

export const updateVehicleSpecification: any = createAsyncThunk('vehicleSpecifications/updateVehicleSpecification', async ({ id, ...vehicleSpecification }: Partial<VehicleSpecification>) => {
  const response = await fetch(`http://localhost:3000/vehiclesSpecifications/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicleSpecification),
  });
  if (!response.ok) {
    throw new Error('Failed to update vehicle specification');
  }
  return (await response.json()) as VehicleSpecification;
});

export const deleteVehicleSpecification: any = createAsyncThunk('vehicleSpecifications/deleteVehicleSpecification', async (id: number) => {
  const response = await fetch(`http://localhost:3000/vehiclesSpecifications/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete vehicle specification');
  }
  return id;
});

const vehicleSpecificationsSlice = createSlice({
  name: 'vehicleSpecifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleSpecifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicleSpecifications.fulfilled, (state, action: PayloadAction<VehicleSpecification[]>) => {
        state.loading = false;
        state.vehicleSpecifications = action.payload;
      })
      .addCase(fetchVehicleSpecifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch vehicle specifications';
      })
      .addCase(addVehicleSpecification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVehicleSpecification.fulfilled, (state, action: PayloadAction<VehicleSpecification>) => {
        state.loading = false;
        state.vehicleSpecifications.push(action.payload);
      })
      .addCase(addVehicleSpecification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add vehicle specification';
      })
      .addCase(updateVehicleSpecification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVehicleSpecification.fulfilled, (state, action: PayloadAction<VehicleSpecification>) => {
        state.loading = false;
        const index = state.vehicleSpecifications.findIndex((vehicleSpecification) => vehicleSpecification.id === action.payload.id);
        if (index !== -1) {
          state.vehicleSpecifications[index] = action.payload;
        }
      })
      .addCase(updateVehicleSpecification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update vehicle specification';
      })
      .addCase(deleteVehicleSpecification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVehicleSpecification.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.vehicleSpecifications = state.vehicleSpecifications.filter((vehicleSpecification) => vehicleSpecification.id !== action.payload);
      })
      .addCase(deleteVehicleSpecification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete vehicle specification';
      });
  },
});

export default vehicleSpecificationsSlice.reducer;
