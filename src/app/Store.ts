// src/app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from '../features/Users/userSlice';
import { usersApi } from '../features/Users/userapi';
import { registerApi } from '../features/Register/registerApi';
import { authApi } from '../features/Login/loginApi';
// import { paymentsApi } from '../features/Payments/paymentsApi';
import { bookingsApi } from '../features/Bookings/BookingApi';
import { vehiclesApi } from '../features/Vehicles/VehiclesApi'; 
import vehicleSpecificationsReducer from '../features/VehiclesSpecifications/vSpecificationsSlice';
import bookingsReducer from '../features/Bookings/BookingSlice';
import vehiclesReducer from '../features/Vehicles/VehiclesSlice';
import { vehicleSpecificationsApi } from '../features/VehiclesSpecifications/vSpecificationsApi';


const rootReducer = combineReducers({
  users: usersReducer,
  bookings: bookingsReducer,
  vehicles: vehiclesReducer,
  vehicleSpecifications: vehicleSpecificationsReducer,
  
  [usersApi.reducerPath]: usersApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bookingsApi.reducerPath]: bookingsApi.reducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  [vehicleSpecificationsApi.reducerPath]: vehicleSpecificationsApi.reducer,
  // [paymentsApi.reducerPath]: paymentsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(registerApi.middleware).concat(authApi.middleware).concat(bookingsApi.middleware)
    .concat(vehiclesApi.middleware).concat(vehicleSpecificationsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
