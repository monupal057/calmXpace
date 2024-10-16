import React from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="calmXpace" className="h-10" />
        <ul className="flex space-x-6">
          <li>Objectives</li>
          <li>Benefits</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


