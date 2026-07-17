//import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar";

function App() {
  const items = ["Home", "Login", "Logout", "Profile"];
  return (
    <main>
      <Navbar 
      brandName="compQ&A"
      
      navItems={items}/>
      <div className="title">
        <h1>compQ&A</h1>
      </div>
      <div className="home_body">
        <p>Get trusted answers from developers, engineers, and technology professionals.</p>
      </div>
    </main>
  )
}

export default App
