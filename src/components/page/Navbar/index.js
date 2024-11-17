import React from "react";
import "./navbar.css";
// import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <section className="navbar-section">
        <section className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/connect">Connect</Link>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Navbar;
