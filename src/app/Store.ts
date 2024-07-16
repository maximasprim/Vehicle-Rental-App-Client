// src/app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from '../features/Users/userSlice';
import { usersApi } from '../features/Users/userapi';
import { registerApi } from '../features/Register/registerApi';
import { authApi } from '../features/Login/loginApi';

import { BookingsAPI } from '../features/Bookings/BookingApi';
import { vehiclesApi } from '../features/Vehicles/VehiclesApi'; 
import { vehicleSpecificationApi } from '../features/VehiclesSpecifications/vSpecificationsApi';
import authReducer from '../features/Login/loginSlice';
;
import { FleetManagementApi } from '../features/Fleet/FleetApi';
import {TicketsAPI } from '../features/customer Tickets/ticketsApi';
import { PaymentsApi } from '../features/Payments/paymentsApi';
// import { vSpecificationsApi } from '../features/Vehicles Featured/listApi'


const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
 
  [usersApi.reducerPath]: usersApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [BookingsAPI.reducerPath]: BookingsAPI.reducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  [vehicleSpecificationApi.reducerPath]: vehicleSpecificationApi.reducer,
  [FleetManagementApi.reducerPath]: FleetManagementApi.reducer,
  [TicketsAPI.reducerPath]: TicketsAPI.reducer,
  [PaymentsApi.reducerPath]: PaymentsApi.reducer,
  // [vSpecificationsApi.reducerPath]: vSpecificationsApi.reducer,
  
});

const persistConfig = {
  key: 'root',
  
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(registerApi.middleware).concat(authApi.middleware).concat(BookingsAPI.middleware)
    .concat(vehiclesApi.middleware).concat(FleetManagementApi.middleware).concat(vehicleSpecificationApi.middleware).concat(TicketsAPI.middleware).concat(PaymentsApi.middleware)
    ,
}) as any;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
