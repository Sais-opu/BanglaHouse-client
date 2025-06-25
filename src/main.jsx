import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Error from './components/Error.jsx';
import Rental from './components/Dashboard/Rental.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './components/provider/authProvider.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Overview from './components/dashboard/Overview.jsx';
import AddHouse from './components/dashboard/AddHouse.jsx';
import AllHouse from './components/dashboard/AllHouse.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
        {
        path: "/dashboard/rental",
        element: <Rental />,
        children: [
          {
            path: "/dashboard/rental/overview",
            element: <Overview></Overview>
          },
          {
            path: "/dashboard/rental/add-house",
            element: <AddHouse></AddHouse>
          },
          {
            path: "/dashboard/rental/all-houses",
            element: <AllHouse></AllHouse>
          },
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="bounce"
      />
    </AuthProvider>

  </StrictMode>,
)

