import React, { useState } from 'react';
import { useGetTicketsQuery, useCreateTicketMutation, useDeleteTicketMutation, useUpdateTicketMutation } from './ticketsApi';
import { Toaster, toast } from 'sonner';

export interface Ticket {
  ticket_id: number;
  user_id: number;
  subject: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const Tickets: React.FC = () => {
  const { data, isLoading } = useGetTicketsQuery();
  const [createTicket] = useCreateTicketMutation();
  const [updateTicket] = useUpdateTicketMutation();
  const [deleteTicket, { data: deleteMsg }] = useDeleteTicketMutation();

  const [newTicket, setNewTicket] = useState<Partial<Ticket>>({
    user_id: 0,
    subject: '',
    description: '',
    status: '',
  });

  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
  const [updatedTicket, setUpdatedTicket] = useState<Partial<Ticket>>({});

  const handleCreate = async () => {
    await createTicket(newTicket);
    toast.success('Ticket added successfully');
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicketId(ticket.ticket_id);
    setUpdatedTicket(ticket);
  };

  const handleSave = async () => {
    if (editingTicketId !== null) {
      await updateTicket({ ticket_id: editingTicketId, ...updatedTicket });
      setEditingTicketId(null);
      toast.success('Ticket updated successfully');
    }
  };

  const handleDelete = async (ticket_id: number) => {
    await deleteTicket(ticket_id);
    toast.success(deleteMsg?.msg || 'Ticket deleted successfully');
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
      <div className="overflow-x-auto bg-gray-800 text-white p-4 w-full h-screen overflow-y-auto">
        <h1 className="text-xl my-4">My Tickets</h1>
        <div className="mb-4">
          <input
            type="number"
            placeholder="User ID"
            value={newTicket.user_id || ''}
            onChange={(e) => setNewTicket({ ...newTicket, user_id: Number(e.target.value) })}
            className="input input-bordered mr-2"
          />
          <input
            type="text"
            placeholder="Subject"
            value={newTicket.subject || ''}
            onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
            className="input input-bordered mr-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTicket.description || ''}
            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
            className="input input-bordered mr-2"
          />
          <input
            type="text"
            placeholder="Ticket Status"
            value={newTicket.status || ''}
            onChange={(e) => setNewTicket({ ...newTicket, status: e.target.value })}
            className="input input-bordered mr-2"
          />
          <button className="btn btn-primary" onClick={handleCreate}>Add Ticket</button>
        </div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-white">Ticket ID</th>
              <th className="text-white">User ID</th>
              <th className="text-white">Subject</th>
              <th className="text-white">Description</th>
              <th className="text-white">Status</th>
              <th className="text-white">Created At</th>
              <th className="text-white">Updated At</th>
              <th className="text-white">Options</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={8}>Loading...</td></tr>
            ) : (
              data && data.map((ticket: Ticket, index: number) => (
                <tr key={index}>
                  <td>{ticket.ticket_id}</td>
                  <td>{editingTicketId === ticket.ticket_id ? (
                    <input
                      type="number"
                      value={updatedTicket.user_id || ticket.user_id}
                      onChange={(e) => setUpdatedTicket({ ...updatedTicket, user_id: Number(e.target.value) })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    ticket.user_id
                  )}</td>
                  <td>{editingTicketId === ticket.ticket_id ? (
                    <input
                      type="text"
                      value={updatedTicket.subject || ticket.subject}
                      onChange={(e) => setUpdatedTicket({ ...updatedTicket, subject: e.target.value })}
                      className="input input-bordered w_full"
                    />
                  ) : (
                    ticket.subject
                  )}</td>
                  <td>{editingTicketId === ticket.ticket_id ? (
                    <input
                      type="text"
                      value={updatedTicket.description || ticket.description}
                      onChange={(e) => setUpdatedTicket({ ...updatedTicket, description: e.target.value })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    ticket.description
                  )}</td>
                  <td>{editingTicketId === ticket.ticket_id ? (
                    <input
                      type="text"
                      value={updatedTicket.status || ticket.status}
                      onChange={(e) => setUpdatedTicket({ ...updatedTicket, status: e.target.value })}
                      className="input input-bordered w-full"
                    />
                  ) : (
                    ticket.status
                  )}</td>
                  <td>{ticket.created_at}</td>
                  <td>{ticket.updated_at}</td>
                  <td className="flex gap-2">
                    {editingTicketId === ticket.ticket_id ? (
                      <button className="btn btn-sm btn-outline btn-success" onClick={handleSave}>Save</button>
                    ) : (
                      <button className="btn btn-sm btn-outline btn-info" onClick={() => handleEdit(ticket)}>Update</button>
                    )}
                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => handleDelete(ticket.ticket_id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr><td colSpan={8}>{data ? `${data.length} records` : '0 records'}</td></tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Tickets;
