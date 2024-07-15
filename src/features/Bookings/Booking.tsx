import React from 'react';
import { useGetBookingsQuery, useDeleteBookingsMutation, useUpdateBookingsMutation } from './BookingApi';
import { Toaster, toast } from 'sonner';

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
  const { data, error, isLoading } = useGetBookingsQuery();
  const [updateBooking] = useUpdateBookingsMutation();
  const [deleteBooking, { data: deleteMsg }] = useDeleteBookingsMutation();
console.log(error);
  const handleUpdate = (booking_id: number) => {
    const updateBookingData = {
      booking_status: 'booking updated',
    };
    updateBooking({ booking_id, ...updateBookingData });
  };
console.log(data);
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
      <div className="overflow-x-auto bg-gray-800 text-white rounded-lg p-4">
        <h1 className="text-xl my-4">My Bookings</h1>
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-white">Booking_id</th>
              <th className="text-white">user_id</th>
              <th className="text-white">vehicle_id</th>
              <th className="text-white">location_id</th>
              <th className="text-white">booking_date</th>
              <th className="text-white">return_date</th>
              <th className="text-white">total_amount</th>
              <th className="text-white">booking_status</th>
              <th className="text-white">created_at</th>
              <th className="text-white">updated_at</th>
              <th className="text-white">Options</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={11}>Loading...</td></tr>
            ) :  (
                data && data.map((bookings: TBookings, index: number) => (
                  <tr key={index}>
                    <th>{bookings.booking_id}</th>
                    <td>{bookings.user_id}</td>
                    <td>{bookings.vehicle_id}</td>
                    <td>{bookings.location_id}</td>
                    <td>{bookings.booking_date}</td>
                    <td>{bookings.return_date}</td>
                    <td>{bookings.total_amount}</td>
                    <td>{bookings.booking_status}</td>
                    <td>{bookings.created_at}</td>
                    <td>{bookings.updated_at}</td>
                    <td className="flex gap-2">
                      <button className="btn btn-sm btn-outline btn-info" onClick={() => handleUpdate(bookings.booking_id)}>Update</button>
                      <button className="btn btn-sm btn-outline btn-warning" onClick={() => handleDelete(bookings.booking_id)}>Delete</button>
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
