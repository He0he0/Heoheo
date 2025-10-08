import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h  className="logo">
            Heoheo
        </h>
      </div>
      <div className="navbar-right">
      <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;