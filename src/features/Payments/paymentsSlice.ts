import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPayment } from './paymentsApi';

interface PaymentsState {
  payments: TPayment[];
}

const initialState: PaymentsState = {
  payments: [],
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setPayments(state, action: PayloadAction<TPayment[]>) {
      state.payments = action.payload;
    },
    addPayment(state, action: PayloadAction<TPayment>) {
      state.payments.push(action.payload);
    },
    updatePayment(state, action: PayloadAction<TPayment>) {
      const index = state.payments.findIndex(payment => payment.payment_id === action.payload.payment_id);
      if (index !== -1) {
        state.payments[index] = action.payload;
      }
    },
    deletePayment(state, action: PayloadAction<number>) {
      state.payments = state.payments.filter(payment => payment.payment_id !== action.payload);
    },
  },
});

export const { setPayments, addPayment, updatePayment, deletePayment } = paymentsSlice.actions;
export default paymentsSlice.reducer;
