import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <span className="navbar-title">HackIllinois</span>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <nav className="navbar-menu">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/events" onClick={() => setIsOpen(false)} className="navbar-link">
            Events
          </NavLink>
          <NavLink to="/judges" onClick={() => setIsOpen(false)} className="navbar-link">
            Judges
          </NavLink>
          <NavLink to="/mentors" onClick={() => setIsOpen(false)} className="navbar-link">
            Mentors
          </NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)} className="navbar-link">
            Shop
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;