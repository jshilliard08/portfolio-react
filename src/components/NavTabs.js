import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About Me
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact/resume"
            className={window.location.pathname === "/contact/resume" ? "nav-link active" : "nav-link"}
          >
            Resume
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
