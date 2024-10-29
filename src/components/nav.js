import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link mx-lg-2" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-lg-2" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-lg-2" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-lg-2" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
