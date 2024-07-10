// src/components/BookingsList.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/Store';
import { fetchBookings } from './BookingSlice';

const Bookings: React.FC = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state: RootState) => state.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Bookings List</h2>
      <ul>
        {bookings.map((booking: any) => (
          <li key={booking.id}>
            <div>Booking ID: {booking.booking_id}</div>
            <div>User ID: {booking.user_id}</div>
            <div>Vehicle_id: {booking.vehicle_id}</div>
            <div>Location_id: {booking.location_id}</div>
            <div>Booking_date: {booking.booking_date}</div>
            <div>Return_date: {booking.return_id}</div>
            <div>Total_amount: {booking.booking_status}</div>
            {/* Add more booking details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
