import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFleet } from './FleetApi';

interface FleetManagementState {
  fleets: TFleet[];
}

const initialState: FleetManagementState = {
  fleets: [],
};

const fleetManagementSlice = createSlice({
  name: 'fleetManagement',
  initialState,
  reducers: {
    setFleets(state, action: PayloadAction<TFleet[]>) {
      state.fleets = action.payload;
    },
    addFleet(state, action: PayloadAction<TFleet>) {
      state.fleets.push(action.payload);
    },
    updateFleet(state, action: PayloadAction<TFleet>) {
      const index = state.fleets.findIndex(fleet => fleet.fleet_id === action.payload.fleet_id);
      if (index !== -1) {
        state.fleets[index] = action.payload;
      }
    },
    deleteFleet(state, action: PayloadAction<number>) {
      state.fleets = state.fleets.filter(fleet => fleet.fleet_id !== action.payload);
    },
  },
});

export const { setFleets, addFleet, updateFleet, deleteFleet } = fleetManagementSlice.actions;

export default fleetManagementSlice.reducer;
