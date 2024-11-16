import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"
import BookPage from "./pages/book.jsx"
import UserPage from "./pages/user.jsx"
import RegisterPage from "./pages/register.jsx"
import LoginPage from "./pages/login.jsx"
import TodoApp from './componets/Learn/TodoApp.jsx'
import ErrorPage from './pages/error.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoApp /> },
      {
        path: "/book",
        element: <BookPage />,
      }, {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  }, {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
