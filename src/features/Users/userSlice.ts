import { createSlice } from '@reduxjs/toolkit';
import { User } from './userapi'; // Assuming User interface is defined in userApi
import { usersApi } from './userapi';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(usersApi.endpoints.fetchUsers.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(usersApi.endpoints.fetchUsers.matchFulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addMatcher(usersApi.endpoints.fetchUsers.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addMatcher(usersApi.endpoints.addUser.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(usersApi.endpoints.addUser.matchFulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addMatcher(usersApi.endpoints.addUser.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add user';
      })
      .addMatcher(usersApi.endpoints.updateUser.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(usersApi.endpoints.updateUser.matchFulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addMatcher(usersApi.endpoints.updateUser.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update user';
      })
      .addMatcher(usersApi.endpoints.deleteUser.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(usersApi.endpoints.deleteUser.matchFulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addMatcher(usersApi.endpoints.deleteUser.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete user';
      });
  },
});

export default usersSlice.reducer;
