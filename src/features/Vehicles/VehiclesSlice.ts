// src/features/vehicles/vehiclesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from './VehiclesApi';

export interface VehiclesState {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  loading: false,
  error: null,
};

// Async thunk to fetch vehicles
export const fetchVehicles: any = createAsyncThunk('vehicles/fetchVehicles', async () => {
  const response = await fetch('http://localhost:3000/vehicles'); // Adjust the URL as needed
  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return (await response.json()) as Vehicle[];
});

// Async thunk to add a vehicle
export const addVehicle: any = createAsyncThunk('vehicles/addVehicle', async (vehicle: Partial<Vehicle>) => {
  const response = await fetch('http://localhost:3000/vehicles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicle),
  });
  if (!response.ok) {
    throw new Error('Failed to add vehicle');
  }
  return (await response.json()) as Vehicle;
});

// Async thunk to update a vehicle
export const updateVehicle: any = createAsyncThunk('vehicles/updateVehicle', async ({ id, ...vehicle }: Partial<Vehicle>) => {
  const response = await fetch(`http://localhost:3000/vehicles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicle),
  });
  if (!response.ok) {
    throw new Error('Failed to update vehicle');
  }
  return (await response.json()) as Vehicle;
});

// Async thunk to delete a vehicle
export const deleteVehicle: any = createAsyncThunk('vehicles/deleteVehicle', async (id: number) => {
  const response = await fetch(`http://localhost:3000/vehicles/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete vehicle');
  }
  return id;
});

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action: PayloadAction<Vehicle[]>) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch vehicles';
      })
      .addCase(addVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVehicle.fulfilled, (state, action: PayloadAction<Vehicle>) => {
        state.loading = false;
        state.vehicles.push(action.payload);
      })
      .addCase(addVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add vehicle';
      })
      .addCase(updateVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVehicle.fulfilled, (state, action: PayloadAction<Vehicle>) => {
        state.loading = false;
        const index = state.vehicles.findIndex((vehicle) => vehicle.id === action.payload.id);
        if (index !== -1) {
          state.vehicles[index] = action.payload;
        }
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update vehicle';
      })
      .addCase(deleteVehicle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVehicle.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.vehicles = state.vehicles.filter((vehicle) => vehicle.id !== action.payload);
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete vehicle';
      });
  },
});

export default vehiclesSlice.reducer;
