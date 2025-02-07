import React, { useState, useRef, useEffect } from "react";

const CompanyUmberalla = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      {/* Button to Open Dropdown */}
      <button
        className="flex items-center w-full"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)} // Open on hover
      >
        Company Umbrella
        <svg
          className={`ml-2 -mr-1 h-5 w-5 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute sm:left-1/2 sm:-translate-x-1/2 left-0 w-full sm:w-56 z-50 bg-white mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setIsOpen(true)} // Keep open when hovering inside
          onMouseLeave={() => setIsOpen(false)} // Close when mouse leaves
        >
          <div className="py-1">
            <a
              href="https://www.zoomaaxtv.com"
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Zoomaax TV
            </a>
            <a
              href="https://www.zoomaaxnews.com"
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Zoomaax News
            </a>
            <a
              href="https://www.zoomaaxstudio.com"
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Zoomaax Studio
            </a>
            <a
              href="https://www.zoomaar.com"
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Zoomaar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyUmberalla;
