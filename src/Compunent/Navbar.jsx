import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 px-6 py-4 shadow-sm flex justify-between items-center">
      <div className="text-3xl font-bold text-purple-600">Logo</div>
      <div className="flex items-center space-x-8">
        <NavLink to="/" className="text-purple-600 text-lg hover:underline">Home</NavLink>
        <NavLink to="/about" className="text-purple-600 text-lg hover:underline">About Us</NavLink>
        <NavLink to="/services" className="text-purple-600 text-lg hover:underline">Services</NavLink>
        <NavLink to="/blog" className="text-purple-600 text-lg hover:underline">Blog</NavLink>
        <NavLink to="/get-app">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md shadow-md transition">
            GET APP
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
