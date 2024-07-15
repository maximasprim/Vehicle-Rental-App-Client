import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TVehicleSpecification } from './vSpecificationsApi';

interface VehicleSpecificationState {
  vehicleSpecifications: TVehicleSpecification[];
}

const initialState: VehicleSpecificationState = {
  vehicleSpecifications: [],
};

const vehicleSpecificationSlice = createSlice({
  name: 'vehicleSpecifications',
  initialState,
  reducers: {
    setVehicleSpecifications(state, action: PayloadAction<TVehicleSpecification[]>) {
      state.vehicleSpecifications = action.payload;
    },
    addVehicleSpecification(state, action: PayloadAction<TVehicleSpecification>) {
      state.vehicleSpecifications.push(action.payload);
    },
    updateVehicleSpecification(state, action: PayloadAction<TVehicleSpecification>) {
      const index = state.vehicleSpecifications.findIndex(spec => spec.vehicle_id === action.payload.vehicle_id);
      if (index !== -1) {
        state.vehicleSpecifications[index] = action.payload;
      }
    },
    deleteVehicleSpecification(state, action: PayloadAction<number>) {
      state.vehicleSpecifications = state.vehicleSpecifications.filter(spec => spec.vehicle_id !== action.payload);
    },
  },
});

export const { setVehicleSpecifications, addVehicleSpecification, updateVehicleSpecification, deleteVehicleSpecification } = vehicleSpecificationSlice.actions;
export default vehicleSpecificationSlice.reducer;
