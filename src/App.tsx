


import './index.css'
import Home from './Pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error.tsx'

import Contact from './Pages/Contact.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import About from './Pages/About.tsx'

import UsersList from './features/Users/usersList.tsx'
import Appi from './Pages/AdminDashboard/adminDashboard.tsx'
import RegisterUser from './features/Register/register.tsx'
import LoginUser from './features/Login/login.tsx'
import { ToastContainer } from 'react-toastify'
import Bookings from './features/Bookings/Booking.tsx'
import VehicleSpecifications from './features/VehiclesSpecifications/vSpecifications.tsx'

import FleetManagement from './features/Fleet/Fleet.tsx'
import TicketsTable from './features/customer Tickets/tickets.tsx'
import  Payments from './features/Payments/payment.tsx'
import Testimonials from './Components/Testimonials.tsx'
import VehicleSpecification from './features/Vehicles Featured/list.tsx'
import Notifications from './Components/Notifications.tsx'
import BookingForm from './Components/BookingForm.tsx'
import Settings from './Components/Settings.tsx'
import EasySteps from './Components/Steps to follow.tsx'
import {Cloud} from './Components/Cloudinary/cloudinary.tsx'  // import the Cloud component
import AppCloud from './Components/Cloudinary/AppCloud.tsx'
import UserDetails from './features/Users/singleUserComponent.tsx'
import VehiclesList from './features/Vehicles/Vehicles.tsx'
import FAQComponent from './Components/FAQ.tsx'
import TermsConditionsComponent from './Components/terms&conditions.tsx'
import BestPriceGuarantee from './Components/bestPricesguarantee.tsx'
import Services from './Components/Services.tsx'
import BookingDetails from './features/Bookings/BookingsDetails.tsx'
import UserProfile from './features/Users/userById.tsx'
import UserBookings from './features/Bookings/MyBookings Summary.tsx'
import SingleBookingDetails from './features/Bookings/SingleBookingsSummary.tsx'
import PaymentSuccess from './Components/PaymentsWithStripe/PaymentSuccessComponent.tsx'
import PaymentCancel from './Components/PaymentsWithStripe/PaymentCancel.tsx'
import SingleUserTickets from './features/customer Tickets/SingleUserTicket.tsx'
import CarouselComponent from './Components/Carousell.tsx'
import AdminDashboard from './Components/Admin dashboard/AdminDashboard.tsx'
import Locations from './features/Locations and Branches/location.tsx'
// import { AuthProvider } from './features/Login/AuthContex.tsx'



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
    path: 'bookings/:id',
    element: < BookingDetails />,
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
    path: 'carousel',
    errorElement:<Error/>,
  }, 
  
  
  {
    path: 'paymentsuccess',
    element: <  PaymentSuccess />,
    errorElement:<Error/>,
  },
  {
    path: 'paymentcancel',
    element: <  PaymentCancel />,
    errorElement:<Error/>,
  },
  
  {
    path: 'vehicleslist',
    element: < VehicleSpecification />,
    errorElement:<Error/>,
  },
  
  
  {
    path: 'login',
    element: <LoginUser />,
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
    path: 'faq',
    element: <FAQComponent/>,
    errorElement:<Error/>,
  },
  {
    path: 'terms',
    element: <TermsConditionsComponent/>,
    errorElement:<Error/>,
  },
  {
    path: 'bestPriceguarantee',
    element: <BestPriceGuarantee/>,
    errorElement:<Error/>,
  },
  {
    path: 'services',
    element: <Services/>,
    errorElement:<Error/>,
  },
  {
    path: 'usersById',
    element: <UserProfile/>,
    errorElement:<Error/>,
  },
  
  
  
  {
    path: 'admin',
    element: <Appi />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
        errorElement:<Error/>,
      },
      
        {
           path: "users",
           element: <UsersList />,
          errorElement:<Error/>,    
        },
        {
           path: "locations",
           element: <Locations />,
          errorElement:<Error/>,    
        },
        
        {
          path: 'vehicles',
          element: < VehiclesList />,
          errorElement:<Error/>,
        },
        {
          path: 'vehiclesSpecifications',
          element: < VehicleSpecifications />,
          errorElement:<Error/>,
        },
        {
          path: 'bookings',
          element: < Bookings />,
          errorElement:<Error/>,
        },
        {
          path: 'bookingByUserId',
          element: <UserBookings/>,
          errorElement:<Error/>,
        },
        {
          path: 'payments',
          element: <  Payments />,
          errorElement:<Error/>,
        },
        {
          path: 'fleetManagement',
          element: < FleetManagement />,
          errorElement:<Error/>,
        },
        {
          path: 'ticket',
          element: < TicketsTable />,
          errorElement:<Error/>,
        },
        {
          path: 'cloudinaryform',
          element: <AppCloud />,
          errorElement:<Error/>,
        },
        {
          path: 'cloudinary',
          element: <Cloud />,
          errorElement:<Error/>,
        },
        
      
    ]
  },


  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement:<Error/>,
    children: [
      {
        index: true,  
    element: < CarouselComponent />,

      },
      
      // {
      //   path: "user-profiles",
      //   element: <UserProfiles />,
      // },
      
      {
        path: 'singleUserWithTickets',
        element: < SingleUserTickets />,
        errorElement:<Error/>,
      },
      {
        path: 'singlebookingsummary',
        element: <SingleBookingDetails bookingId={5} />,
        errorElement:<Error/>,
      },
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