import Header from '@/components/Header';
import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <Header>
        <h1>About Page</h1>
      </Header>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About App.</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About Developer.</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default About;
