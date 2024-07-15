import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSpecification } from './listApi'

interface VehicleSpecificationState {
  vehicleSpecifications: TSpecification[];
}

const initialState: VehicleSpecificationState = {
  vehicleSpecifications: [],
};

const vehicleSpecificationSlice = createSlice({
  name: 'vehicleSpecifications',
  initialState,
  reducers: {
    setVehicleSpecifications(state, action: PayloadAction<TSpecification[]>) {
      state.vehicleSpecifications = action.payload;
    },
    // addVehicleSpecification(state, action: PayloadAction<TSpecification>) {
    //   state.vehicleSpecifications.push(action.payload);
    // },
    // updateVehicleSpecification(state, action: PayloadAction<TVehicleSpecification>) {
    //   const index = state.vehicleSpecifications.findIndex(spec => spec.vehicleSpec_id === action.payload.vehicleSpec_id);
    //   if (index !== -1) {
    //     state.vehicleSpecifications[index] = action.payload;
    //   }
    // },
    // deleteVehicleSpecification(state, action: PayloadAction<number>) {
    //   state.vehicleSpecifications = state.vehicleSpecifications.filter(spec => spec.vehicleSpec_id !== action.payload);
    // },
  },
});

export const { setVehicleSpecifications} = vehicleSpecificationSlice.actions;
export default vehicleSpecificationSlice.reducer;
