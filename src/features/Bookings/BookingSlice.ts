import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBookedVehicles } from './BookingApi';

interface BookingsState {
  bookings: TBookedVehicles[];
}

const initialState: BookingsState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings(state, action: PayloadAction<TBookedVehicles[]>) {
      state.bookings = action.payload;
    },
    addBooking(state, action: PayloadAction<TBookedVehicles>) {
      state.bookings.push(action.payload);
    },
    updateBooking(state, action: PayloadAction<TBookedVehicles>) {
      const index = state.bookings.findIndex(booking => booking.booking_id === action.payload.booking_id);
      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    },
    deleteBooking(state, action: PayloadAction<number>) {
      state.bookings = state.bookings.filter(booking => booking.booking_id !== action.payload);
    },
  },
});

export const { setBookings, addBooking, updateBooking, deleteBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
