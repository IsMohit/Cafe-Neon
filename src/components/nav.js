import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <img
          src="/images/logo.png"
          alt="Cafe Neon Logo"
          className="navbar-logo"
        />
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
