import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLocation } from './locationApi';

interface LocationsState {
  locations: TLocation[];
}

const initialState: LocationsState = {
  locations: [],
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations(state, action: PayloadAction<TLocation[]>) {
      state.locations = action.payload;
    },
    addLocation(state, action: PayloadAction<TLocation>) {
      state.locations.push(action.payload);
    },
    updateLocation(state, action: PayloadAction<TLocation>) {
      const index = state.locations.findIndex(location => location.location_id === action.payload.location_id);
      if (index !== -1) {
        state.locations[index] = action.payload;
      }
    },
    deleteLocation(state, action: PayloadAction<number>) {
      state.locations = state.locations.filter(location => location.location_id !== action.payload);
    },
  },
});

export const { setLocations, addLocation, updateLocation, deleteLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
