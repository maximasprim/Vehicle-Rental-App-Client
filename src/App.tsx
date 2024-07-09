

// import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error.tsx'
import Register from './Pages/Register.tsx'
import Contact from './Pages/Contact.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import About from './Pages/About.tsx'
// import Users from './Components/dashboard/Users.tsx'
import UserProfiles from './Components/dashboard/UserProfiles.tsx'
import UsersList from './features/Users/usersList.tsx'


const App = () => {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<Error/>,
  },
  {
    path: 'register',
    element: <Register />,
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