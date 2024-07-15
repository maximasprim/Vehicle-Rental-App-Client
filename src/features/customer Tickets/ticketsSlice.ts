import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from './ticketsApi';

interface TicketsState {
  tickets: Ticket[];
}

const initialState: TicketsState = {
  tickets: [],
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<Ticket[]>) {
      state.tickets = action.payload;
    },
    addTicket(state, action: PayloadAction<Ticket>) {
      state.tickets.push(action.payload);
    },
    updateTicket(state, action: PayloadAction<Ticket>) {
      const index = state.tickets.findIndex(ticket => ticket.ticket_id === action.payload.ticket_id);
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },
    deleteTicket(state, action: PayloadAction<number>) {
      state.tickets = state.tickets.filter(ticket => ticket.ticket_id !== action.payload);
    },
  },
});

export const { setTickets, addTicket, updateTicket, deleteTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
