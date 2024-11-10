import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"
import ProductPage from "./pages/product.jsx"
import UserPage from "./pages/user.jsx"
import RegisterPage from "./pages/register.jsx"
import LoginPage from "./pages/login.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserPage />,
  }, {
    path: "/login",
    element: <LoginPage />,
  }, {
    path: "/register",
    element: <RegisterPage />,
  }, {
    path: "/product",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
