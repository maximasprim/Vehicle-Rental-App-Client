// src/features/bookings/bookingsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Booking } from './BookingApi';

export interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  loading: false,
  error: null,
};

// Async thunk to fetch bookings
export const fetchBookings:any = createAsyncThunk('bookings/fetchBookings', async () => {
  const response = await fetch('http://localhost:3000/bookings'); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error('Failed to fetch bookings');
  }
  return (await response.json()) as Booking[];
});

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch bookings';
      });
  },
});

export default bookingsSlice.reducer;
