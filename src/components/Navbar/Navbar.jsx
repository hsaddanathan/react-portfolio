import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex flex-grow-1">
          <a className="navbar-brand" href="/">
            <h3 className="name">
              <strong>Harsha Saddanathan</strong>
            </h3>
          </a>
          <div className="w-100 text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div
          className="collapse navbar-collapse text-right"
          id="myNavbar"
        >
          {/* <!-- Nav Links --> */}
          <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
