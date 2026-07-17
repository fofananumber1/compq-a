import { useState } from "react";
import "../App.css"
import "./Navbar.css"

interface NavBarProps {
  brandName: string;
  //imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, navItems }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar">
        <div className="navbar-brand">
          <span>{brandName}</span>
        </div>
        <div
          className="collapse
         navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-link">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href="#"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;