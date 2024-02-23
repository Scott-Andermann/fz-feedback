import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from './App.tsx'
import './index.css'
import Root from './routes/Root'
import Login from './routes/Login'
import Home from './routes/Home'
import Register from './routes/Register'
import History from './routes/History'
import New from './routes/New'
import Recording from './routes/Recording'
import PostJob from './routes/PostJob'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/home",
  element: <Home />
},
{
  path: "/register",
  element: <Register />
},
{
  path: "/history",
  element: <History />
},
{
  path: "/new",
  element: <New />
},
{
  path: "/recording",
  element: <Recording />
},
{
  path: "/postJob",
  element: <PostJob />
},

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
