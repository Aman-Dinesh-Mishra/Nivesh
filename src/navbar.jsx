import React from "react";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg px-10 py-4 flex justify-between items-center border-b border-blue-200">
    {/* Logo / Title */}
    <div className="text-3xl font-bold text-blue-900 tracking-wide hover:text-blue-700 transition duration-300">
      Robo Finance Advisor
    </div>

    {/* Navigation Links */}
    <div className="flex items-center gap-6">
      <a
        href="#dashboard"
        className="text-blue-800 font-medium hover:text-blue-600 transition duration-200"
      >
        Dashboard
      </a>
      <a
        href="#investments"
        className="text-blue-800 font-medium hover:text-blue-600 transition duration-200"
      >
        Investments
      </a>
      <a
        href="#profile"
        className="text-blue-800 font-medium hover:text-blue-600 transition duration-200"
      >
        Profile
      </a>

      {/* Avatar */}
      <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200">
        A
      </div>
    </div>
  </nav>
);

export default Navbar;
