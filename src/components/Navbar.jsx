import React from 'react';
import {NavLink, useNavigate } from "react-router-dom"
import { useAuthContext } from '@/context/AuthContext'

const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];

function Navbar() {

const { user, logout } = useAuthContext();
const navigate = useNavigate()
const handleLogout = () => {
  logout();
  navigate('/login')
}

  return (
    <div>
      <nav className="navbar">
        {/*}
{links.map((link) => {
  return (
    <li key={link.text}>
      <NavLink
        to={link.path}
        //   className={({ isActive}) =>
        // isActive ? 'active_class' : undefined
        // }
        // style={({ isActive }) => ({
        //   color: isActive ? "red" : undefined,
        // })}
        >
        {link.text}
      </NavLink>
    </li>
  );
})}*/}
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === "login" ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : link.path === "profile" ? (
                  user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        {!user && (
          <li className="log-in">
            <span>Log in to edit to-dos</span>
          </li>
        )}
        {user && (
          <div className="logout">
            <p>{user}</p>
            {<button onClick={handleLogout}>Logout</button>}
          </div>
        )}
          </ul>
          </nav>
    </div>
  );
}

export default Navbar;
