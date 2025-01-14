import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Fixed Navbar Container */}
      <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white flex justify-between items-center p-5 fixed top-0 left-0 w-full z-50'>
        {/* Logo */}
        <div className='text-black font-extrabold text-2xl font-mono'>
          <h1>
            <span className='text-white text-3xl'>M</span>aklu <span className='text-white'>B</span>log
          </h1>
        </div>

        {/* Menu Button for Small Screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links and Cart for Larger Screens */}
        <div className='hidden md:flex items-center space-x-4'>
          <Link to="/signuppage">
            <button className='border px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-center'>
              Sign Up
            </button>
          </Link>
          <Link to="/loginpage">
            <button className='border px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-center'>
              Log In
            </button>
          </Link>
          <button
            onClick={incrementCartCount}
            className='flex items-center justify-center space-x-2 border px-4 py-2 rounded-full bg-black hover:bg-gray-800'
          >
            <FaShoppingCart size={20} />
            <p>Cart ({cartCount})</p>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center p-5 fixed top-16 left-0 w-full z-50 md:hidden'>
          <Link to="/signuppage">
            <button className='w-full border px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-center mb-3'>
              Sign Up
            </button>
          </Link>
          <Link to="/loginpage">
            <button className='w-full border px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-center mb-3'>
              Log In
            </button>
          </Link>
          <button
            onClick={incrementCartCount}
            className='flex items-center justify-center space-x-2 border px-4 py-2 rounded-full bg-black hover:bg-gray-800 w-full'
          >
            <FaShoppingCart size={20} />
            <p>Cart ({cartCount})</p>
          </button>
        </div>
      )}

      {/* Content Below Navbar */}
      <div className="mt-20">
        {/* Content here will not be hidden behind the fixed navbar */}
      </div>
    </div>
  );
};

export default Nav;
