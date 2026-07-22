import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import type { NavItem } from './components/Navbar';

import './index.css'
import App from './App.tsx'

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', to: '/', end: true },
  { id: 'login', label: 'Login', to: '/login', end: true },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App navItems={navItems} />,
    children: [
      {
        path: 'login',
        element: <Login />, 
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
