import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
 <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 border-b-2 shadow-md">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-bold text-3xl tracking-tight">SnapAPI</span>
        </div>
        <div className="block lg:hidden">
          <button id="nav" onClick={toggleMobileMenu} className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="text-md font-bold text-base font-medium lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:text-gray-700 mr-2">
            Home
          </Link>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:text-gray-700  mr-2">
            API
          </Link>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:text-gray-700 mr-2">
            Pricing
          </Link>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:text-gray-700  mr-2">
            FAQ
          </Link>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:text-gray-700 mr-2">
            Contact
          </Link>
        </div>
        <div className="flex">
          <Link to="/" className="font-normal flex items-center mr-3 sm:mr-8  tracking-normal sm:tracking-wider transition duration-300 ease-in-out   hover:font-bold">Login</Link>
          <Link to="/" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs sm:text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">SIGN UP</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
