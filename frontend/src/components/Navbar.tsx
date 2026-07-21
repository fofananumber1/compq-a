import "../App.css"
import "./Navbar.css"

import { NavLink } from 'react-router-dom';

export type NavItem = 
  | {
    id: string;
    label: string;
    to: string;
    end?: boolean;
    icon?: React.ReactNode;
    adminonly?: boolean;
    loggedinonly?: boolean;
  }
  | {
    id: string;
    label: string;
    children: Array<{ id: string; label: string; to: string; end?: boolean}>;
    icon?: React.ReactNode;
    adminonly?: boolean;
    loggedinonly?: boolean;
  }

export type AppLayoutData = {
  user: {
    fullname: string;
    admin?: boolean;
    username?: string;
  };
};

interface NavBarProps {
  brandName: string;
  navItems: NavItem[];
  //user: AppLayoutData['user'];
}

function NavBar({ brandName, navItems /* add user here later */ }: NavBarProps) {

  const effectiveNavItems = navItems
  return (
  <div className="navbar">
    <div className="navbar-brand">
      {brandName}
    </div>
    <ul className="collapse">
      {effectiveNavItems.map((item) => {
        if ('to' in item) {
          return (
            <div className="navbar-link">
              <li key={item.id}>
                <NavLink
                to={item.to}
                end={item.end}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            </div>
          );
        }

      })}
    </ul>
  </div>
  );
}

export default NavBar;