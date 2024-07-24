import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetBookingsQuery, useDeleteBookingsMutation, useUpdateBookingsMutation } from './BookingApi';
import { Toaster, toast } from 'sonner';
import BookingFormAdmin from '../../Components/BookingForm admin';

export interface TBookings {
  booking_id: number;
  user_id: number;
  vehicle_id: number;
  location_id: number;
  booking_date: string;
  return_date: string;
  total_amount: number;
  booking_status: string;
  created_at: string;
  updated_at: string;
}

const Bookings: React.FC = () => {
  const { data, isLoading } = useGetBookingsQuery(undefined, { pollingInterval: 1000 });
  const [updateBooking] = useUpdateBookingsMutation();
  const [deleteBooking, { data: deleteMsg }] = useDeleteBookingsMutation();

  const [editingBookingId, setEditingBookingId] = useState<number | null>(null);
  const [updatedBooking, setUpdatedBooking] = useState<Partial<TBookings>>({});

  const handleEdit = (booking: TBookings) => {
    setEditingBookingId(booking.booking_id);
    setUpdatedBooking(booking);
  };

  const handleSave = async () => {
    if (editingBookingId !== null) {
      await updateBooking({ booking_id: editingBookingId, ...updatedBooking });
      setEditingBookingId(null);
      toast.success('Booking updated successfully');
    }
  };

  const handleDelete = async (booking_id: number) => {
    await deleteBooking(booking_id);
    toast.success(deleteMsg?.msg || 'Booking deleted successfully');
  };

  return (
    <>
      <Toaster
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          },
        }}
      />
      <div className="overflow-x-auto bg-gray-800 text-white p-4 h-screen overflow-y-auto">
        <h1 className="text-xl my-4">My Bookings</h1>
        <BookingFormAdmin />
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-white">Booking ID</th>
              <th className="text-white">User ID</th>
              <th className="text-white">Vehicle ID</th>
              <th className="text-white">Location ID</th>
              <th className="text-white">Booking Date</th>
              <th className="text-white">Return Date</th>
              <th className="text-white">Total Amount</th>
              <th className="text-white">Booking Status</th>
              <th className="text-white">Created At</th>
              <th className="text-white">Updated At</th>
              <th className="text-white">Options</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={11}>Loading...</td></tr>
            ) : (
              data && data.map((booking: TBookings, index: number) => (
                <tr key={index}>
                  <td>{booking.booking_id}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="number"
                      value={updatedBooking.user_id ?? booking.user_id}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, user_id: Number(e.target.value) })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.user_id
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="number"
                      value={updatedBooking.vehicle_id ?? booking.vehicle_id}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, vehicle_id: Number(e.target.value) })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.vehicle_id
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="number"
                      value={updatedBooking.location_id ?? booking.location_id}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, location_id: Number(e.target.value) })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.location_id
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="date"
                      value={updatedBooking.booking_date ?? booking.booking_date}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, booking_date: e.target.value })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.booking_date
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="date"
                      value={updatedBooking.return_date ?? booking.return_date}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, return_date: e.target.value })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.return_date
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="number"
                      value={updatedBooking.total_amount ?? booking.total_amount}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, total_amount: Number(e.target.value) })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.total_amount
                  )}</td>
                  <td>{editingBookingId === booking.booking_id ? (
                    <input
                      type="text"
                      value={updatedBooking.booking_status ?? booking.booking_status}
                      onChange={(e) => setUpdatedBooking({ ...updatedBooking, booking_status: e.target.value })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    booking.booking_status
                  )}</td>
                  <td>{booking.created_at}</td>
                  <td>{booking.updated_at}</td>
                  <td className="flex gap-2">
                    {editingBookingId === booking.booking_id ? (
                      <button className="btn btn-sm btn-outline btn-success" onClick={handleSave}>Save</button>
                    ) : (
                      <button className="btn btn-sm btn-outline btn-info" onClick={() => handleEdit(booking)}>Update</button>
                    )}
                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => handleDelete(booking.booking_id)}>Delete</button>
                    <Link to={`/bookings/${booking.booking_id}`} className="btn btn-sm btn-outline btn-primary">View</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr><td colSpan={11}>{data ? `${data.length} records` : '0 records'}</td></tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Bookings;
