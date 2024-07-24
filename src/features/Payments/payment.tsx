import React, { useState } from 'react';
import { useGetPaymentsQuery, useCreatePaymentMutation, useUpdatePaymentMutation, useDeletePaymentMutation } from './paymentsApi';
import { Toaster, toast } from 'sonner';

export interface TPayment {
  payment_id: number;
  booking_id: number;
  amount: number;
  payment_status: string;
  payment_date: string;
  payment_method: string;
  transaction_id: string;
  created_at: string;
  updated_at: string;
}

const Payments: React.FC = () => {
  const { data, isLoading } = useGetPaymentsQuery(undefined, { pollingInterval: 1000 });
  const [createPayment] = useCreatePaymentMutation();
  const [updatePayment] = useUpdatePaymentMutation();
  const [deletePayment, { data: deleteMsg }] = useDeletePaymentMutation();

  const [newPayment, setNewPayment] = useState<Partial<TPayment>>({
    booking_id: 0,
    amount: 0,
    payment_status: '',
    payment_date: '',
    payment_method: '',
    transaction_id: '',
  });

  const [editingPaymentId, setEditingPaymentId] = useState<number | null>(null);
  const [updatedPayment, setUpdatedPayment] = useState<Partial<TPayment>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPayment({
      ...newPayment,
      [name]: value,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedPayment({
      ...updatedPayment,
      [name]: value,
    });
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createPayment(newPayment);
    setNewPayment({
      booking_id: 0,
      amount: 0,
      payment_status: '',
      payment_date: '',
      payment_method: '',
      transaction_id: '',
    });
  };

  const handleEdit = (payment: TPayment) => {
    setEditingPaymentId(payment.payment_id);
    setUpdatedPayment(payment);
  };

  const handleSave = async () => {
    if (editingPaymentId !== null) {
      await updatePayment({ payment_id: editingPaymentId, ...updatedPayment });
      setEditingPaymentId(null);
      toast.success('Payment updated successfully');
    }
  };

  const handleDelete = async (payment_id: number) => {
    await deletePayment(payment_id);
    toast.success(deleteMsg?.msg || 'Payment deleted successfully');
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
      <div className="overflow-x-auto bg-gray-800 text-white p-4 h-screen overflow-y-auto w-full">
        <h1 className="text-xl my-4">Payments</h1>
        <form onSubmit={handleCreate} className="mb-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="booking_id"
              value={newPayment.booking_id}
              onChange={handleInputChange}
              placeholder="Booking ID"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="amount"
              value={newPayment.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="payment_status"
              value={newPayment.payment_status}
              onChange={handleInputChange}
              placeholder="Payment Status"
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="payment_date"
              value={newPayment.payment_date}
              onChange={handleInputChange}
              placeholder="Payment Date"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="payment_method"
              value={newPayment.payment_method}
              onChange={handleInputChange}
              placeholder="Payment Method"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="transaction_id"
              value={newPayment.transaction_id}
              onChange={handleInputChange}
              placeholder="Transaction ID"
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-outline btn-success mt-4">Add Payment</button>
        </form>
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-white">Payment ID</th>
              <th className="text-white">Booking ID</th>
              <th className="text-white">Amount</th>
              <th className="text-white">Payment Status</th>
              <th className="text-white">Payment Date</th>
              <th className="text-white">Payment Method</th>
              <th className="text-white">Transaction ID</th>
              <th className="text-white">Created At</th>
              <th className="text-white">Updated At</th>
              <th className="text-white">Options</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={10}>Loading...</td></tr>
            ) : (
              data && data.map((payment: TPayment, index: number) => (
                <tr key={index}>
                  <td>{payment.payment_id}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="number"
                      name="booking_id"
                      value={updatedPayment.booking_id ?? payment.booking_id}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.booking_id
                  )}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="number"
                      name="amount"
                      value={updatedPayment.amount ?? payment.amount}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.amount
                  )}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="text"
                      name="payment_status"
                      value={updatedPayment.payment_status ?? payment.payment_status}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.payment_status
                  )}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="date"
                      name="payment_date"
                      value={updatedPayment.payment_date ?? payment.payment_date}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.payment_date
                  )}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="text"
                      name="payment_method"
                      value={updatedPayment.payment_method ?? payment.payment_method}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.payment_method
                  )}</td>
                  <td>{editingPaymentId === payment.payment_id ? (
                    <input
                      type="text"
                      name="transaction_id"
                      value={updatedPayment.transaction_id ?? payment.transaction_id}
                      onChange={handleEditChange}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    payment.transaction_id
                  )}</td>
                  <td>{payment.created_at}</td>
                  <td>{payment.updated_at}</td>
                  <td className="flex gap-2">
                    {editingPaymentId === payment.payment_id ? (
                      <button className="btn btn-sm btn-outline btn-success" onClick={handleSave}>Save</button>
                    ) : (
                      <button className="btn btn-sm btn-outline btn-info" onClick={() => handleEdit(payment)}>Edit</button>
                    )}
                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => handleDelete(payment.payment_id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr><td colSpan={10}>{data ? `${data.length} records` : '0 records'}</td></tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Payments;
