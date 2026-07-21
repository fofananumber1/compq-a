//import { useState } from 'react'
import './App.css'

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import type { NavItem }from "./components/Navbar";

function App({ navItems }: { navItems: NavItem[]}) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <main>
      <Navbar 
      brandName="iQ&A"
      
      navItems={navItems}/>
      {!isLoginPage && (
        <>
          <div className="title">
            <h1>iQ&A</h1>
          </div>
          <div className="home_body">
            <p>Get trusted answers from developers, engineers, and technology professionals.</p>
          </div>
        </>
      )}
      <Outlet />
    </main>
  )
}

export default App
