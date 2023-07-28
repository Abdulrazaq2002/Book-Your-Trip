import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";

const NavBar = ({ onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    toggleBodyOverflow(); // Call function to toggle body overflow
  };

  const toggleBodyOverflow = () => {
    const body = document.querySelector("body");
    body.classList.toggle("hide-overflow");
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    toggleBodyOverflow(); // Call function to toggle body overflow
  };

  const handleSectionClick = (section) => {
    handleCloseMobileMenu();
    onSectionChange(section);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
      <div className='logo'>
        <img src='./Imgs/Icon.png' alt='Logo' />
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <NavLink to='/' onClick={() => handleSectionClick("flight")}>
          Flights
        </NavLink>
        <NavLink to='/' onClick={() => handleSectionClick("hotel")}>
          Hotels
        </NavLink>
        <NavLink to='/' onClick={() => handleSectionClick("train")}>
          Trains
        </NavLink>
        <NavLink to='/' onClick={() => handleSectionClick("bus")}>
          Buses
        </NavLink>
        <NavLink to='/holiday' onClick={() => handleSectionClick("holiday")}>
          Packages
        </NavLink>
        <NavLink to='/about' onClick={() => handleSectionClick("About")}>
          About
        </NavLink>
      </div>
      <div className='title'>
        <h1>Book Your Trip</h1>
      </div>
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={handleMobileMenuToggle}>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>
      {isMobileMenuOpen && (
        <div className='close-menu' onClick={handleCloseMobileMenu}>
          X
        </div>
      )}
    </nav>
  );
};

export default NavBar;
