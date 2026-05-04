import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    children : [
      {path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path:'user/:userid',
        element: <User />
      },
      {
        loader :githubInfoLoader,
        path: "Github",
        element: <Github />
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
