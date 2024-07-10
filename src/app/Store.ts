// src/app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from '../features/Users/userSlice';
import { usersApi } from '../features/Users/userapi';
import { registerApi } from '../features/Register/registerApi';
import { authApi } from '../features/Login/loginApi';


const rootReducer = combineReducers({
  users: usersReducer,
  
  [usersApi.reducerPath]: usersApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(registerApi.middleware).concat(authApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
