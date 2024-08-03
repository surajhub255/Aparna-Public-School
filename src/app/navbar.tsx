import React, { FC, useState } from "react";


const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="px-6 py-4 shadow-sm flex justify-between items-center mb-2"
      style={{ background: "#0F4C81" }}>
      <div className="flex gap-2 items-center">
        <div className="text-2xl">
          <img
            src="/logo.jpeg"
            alt="TokenFest Logo"
            width="30px"
            height="10px"
          />
        </div>
        <div className="text-white text-xl font-semibold">
          <a href="/">Aparna Public School</a>
        </div>
      </div>

      <div className="hidden md:flex gap-4 items-center text-white">
      <a href="/">HOME</a>
        <a href="/pages/about">ABOUT US</a>
        <a href="/dashboard/started-events">ACADEMICS</a>
        <a href="/dashboard/yourpoaps">ADMISSION</a>

      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white w-full shadow-lg py-4">
          <a href="/" className="block px-4 py-2 text-black">HOME</a>
          <a href="/pages/about" className="block px-4 py-2 text-black">ABOUT US</a>
          <a href="/dashboard/started-events" className="block px-4 py-2 text-black">ACADEMICS</a>
          <a href="/dashboard/yourpoaps" className="block px-4 py-2 text-black">ADMISSION</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;