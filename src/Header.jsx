import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CompanyUmberalla from './CompanyUmberalla';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 sm:px-8 flex justify-between items-center fixed top-0 left-0 z-50 bg-white text-black shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src="Transparent.png"
          alt="Zoomster Logo"
          className="h-20 sm:h-14 sm:w-14 object-contain"
        />
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide hidden sm:block text-[black]">
          Zoomster Hub
        </h1>
      </div>

      {/* Animated Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden focus:outline-none absolute right-6 top-1/2 transform -translate-y-1/2"
      >
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          className="flex flex-col space-y-1.5"
        >
          <motion.div
            className="w-7 h-1 bg-black"
            variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-7 h-1 bg-black"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-7 h-1 bg-black"
            variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      <nav>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex sm:space-x-8 sm:static absolute top-16 right-0 left-0 bg-white sm:bg-white sm:flex-row flex-col space-y-4 sm:space-y-0 sm:p-0 p-6 shadow-md sm:shadow-none`}
        >
          <li className="hover:text-[#00B6B6] text-[black]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#00B6B6] text-[black]">
            <CompanyUmberalla />
          </li>
          {[
            { to: '/ourservices', label: 'Our Services' },
            { to: '/ourcollaborations', label: 'Our Collaborations' },
            { to: '/ourteam', label: 'Our Team' },
            { to: '/aboutdirector', label: 'About Director' },
            { to: '/contact-us', label: 'Contact Us' },
          ].map((item, index) => (
            <li key={index} className="hover:text-[#00B6B6] text-[black]">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
