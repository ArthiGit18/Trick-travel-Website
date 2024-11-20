import { Button } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar_wrapper">
      <div className="container nav_list">
        <div className="nav_logo">
          <img src="/assets/logo/1-black.png" alt="Logo" />
        </div>
        <div className={`nav_items ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li><a href="/">Tours</a></li>
            <li><a href="/">Destination</a></li>
            <li><a href="/">Virtual Tour</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="nav_actions">
          <Button variant="contained">Login / Sign Up</Button>
        </div>
        <div className="hamburger_menu" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
