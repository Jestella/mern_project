import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">Kmunity</Link>
      </h1>
      <ul>
        <li>
          <Link to="profiles.html">Browse</Link>
        </li>
        <li>
          <Link to="register.html">Register</Link>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};
