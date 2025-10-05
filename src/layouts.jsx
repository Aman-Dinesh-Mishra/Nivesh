import React from "react";
import Header from "./header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="bg-[#0f1115] min-h-screen w-full text-white">
    <Header />
    <div className="w-full flex justify-center mt-20 mb-8">
      <input
        type="search"
        placeholder="Search portfolios, assets..."
        className="w-[400px] bg-[#1b1c24] text-gray-200 border border-pink-500 rounded-lg px-5 py-3 text-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
      />
    </div>
    <main className="flex justify-center items-start px-6 pb-16">
      <div className="max-w-6xl w-full">
        <Outlet />
      </div>
    </main>
  </div>
);

export default Layout;
