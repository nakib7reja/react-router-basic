import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/mobile',
        Component: Mobile
      },
      {
        path: '/laptops',
        Component: Laptops
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      }
    ]
  },
  {
    path: '/about',
    element: <div>about here</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
