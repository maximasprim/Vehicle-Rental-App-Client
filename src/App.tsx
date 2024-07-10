

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
import UserProfiles from './Components/dashboard/UserProfiles.tsx'
import UsersList from './features/Users/usersList.tsx'
import Appi from './Pages/AdminDashboard/adminDashboard.tsx'
import RegisterUser from './features/Register/register.tsx'
import LoginUser from './features/Login/login.tsx'
import { ToastContainer } from 'react-toastify'


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
    path: 'toast',
    element: <ToastContainer />,
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
    path: 'dashboard',
    element: <Dashboard />,
    errorElement:<Error/>,
    children: [
      {
        path: "users",
        element: <UsersList />,
      },
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