import React from "react";
import { Link } from "react-router-dom"; // Use React Router for navigation
import "../styles/Header.css"; // Import header styles

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">Event Platform</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
