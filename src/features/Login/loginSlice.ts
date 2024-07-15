// src/features/login/loginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/Store';

interface AuthState {
  token: string | null;
  user: any | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
      // Store the token in local storage
      localStorage.setItem('token', action.payload.token);
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
      // Remove the token from local storage
      localStorage.removeItem('token');
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setError } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
