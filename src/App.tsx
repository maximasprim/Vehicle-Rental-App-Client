

// import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error.tsx'

import Contact from './Pages/Contact.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import About from './Pages/About.tsx'
// import Users from './Components/dashboard/Users.tsx'
import UserProfiles from './Components/Admin dashboard/AdminProfiles.tsx'
import UsersList from './features/Users/usersList.tsx'
import Appi from './Pages/AdminDashboard/adminDashboard.tsx'
import RegisterUser from './features/Register/register.tsx'
import LoginUser from './features/Login/login.tsx'
import { ToastContainer } from 'react-toastify'
import Bookings from './features/Bookings/Booking.tsx'
import VehicleSpecifications from './features/VehiclesSpecifications/vSpecifications.tsx'
import CheckoutForm from './Components/Stripe/PaymentComponent.tsx'
import FleetManagement from './features/Fleet/Fleet.tsx'
import TicketsTable from './features/customer Tickets/tickets.tsx'
import  Payments from './features/Payments/payment.tsx'
import Testimonials from './Components/Testimonials.tsx'
import VehicleSpecification from './features/Vehicles Featured/list.tsx'
import Notifications from './Components/Notifications.tsx'
import BookingForm from './Components/BookingForm.tsx'
import Settings from './Components/Settings.tsx'
import EasySteps from './Components/Steps to follow.tsx'
import Cloud from './Components/Cloudinary/cloudinary.tsx'  // import the Cloud component
import AppCloud from './Components/Cloudinary/AppCloud.tsx'
import UserDetails from './features/Users/singleUserComponent.tsx'


const App = () => {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<Error/>,
  },
  
  {
    path: 'registerUser',
    element: <RegisterUser />,
    errorElement:<Error/>,
  },
  {
    path: 'testimonials',
    element: <Testimonials />,
    errorElement:<Error/>,
  },
  {
    path: 'cloudinary',
    element: <Cloud />,
    errorElement:<Error/>,
  },
  {
    path: 'cloudinaryform',
    element: <AppCloud />,
    errorElement:<Error/>,
  },
  {
    path: 'users/:user_id',
    element: <UserDetails />,
    errorElement:<Error/>,
  },
  {
    path: 'toast',
    element: <ToastContainer />,
    errorElement:<Error/>,
  },
  {
    path: 'bookings',
    element: < Bookings />,
    errorElement:<Error/>,
  },
  {
    path: 'steps',
    element: < EasySteps />,
    errorElement:<Error/>,
  },
  {
    path: 'bookingForm',
    element: < BookingForm />,
    errorElement:<Error/>,
  },
  {
    path: 'notifications',
    element: < Notifications />,
    errorElement:<Error/>,
  },
  {
    path: 'settings',
    element: < Settings />,
    errorElement:<Error/>,
  },
  {
    path: 'ticket',
    element: < TicketsTable />,
    errorElement:<Error/>,
  },
  
  {
    path: 'payments',
    element: <  Payments />,
    errorElement:<Error/>,
  },
  {
    path: 'vehiclesSpecifications',
    element: < VehicleSpecifications />,
    errorElement:<Error/>,
  },
  {
    path: 'vehicleslist',
    element: < VehicleSpecification />,
    errorElement:<Error/>,
  },
  {
    path: 'paymentStripe',
    element: < CheckoutForm />,
    errorElement:<Error/>,
  },
  {
    path: 'fleetManagement',
    element: < FleetManagement />,
    errorElement:<Error/>,
  },
  {
    path: 'login',
    element: <LoginUser />,
    errorElement:<Error/>,
  },
  {
    path: 'admin',
    element: <Appi />,
    errorElement:<Error/>,
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement:<Error/>,
  },
  
  {
    path: 'about',
    element: <About />,
    errorElement:<Error/>,
  },
  {
    path: "users",
    element: <UsersList />,
    errorElement:<Error/>,
    children: [
      {
        path: "users/:id",
        element: <UsersList />,
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement:<Error/>,
    children: [
      
      {
        path: "user-profiles",
        element: <UserProfiles />,
      }
    ]
  },

])
return (
  <>
    <RouterProvider router={router} />
  </>
)
}


export default App;