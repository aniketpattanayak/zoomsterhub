import React from "react";

const Headerf = () => {
  return (
    <header className="w-full bg-[#0B1A2A] text-white p-4 flex justify-between items-center">
     
      <div className="flex items-center space-x-4">
        <span className="bg-red-600 px-4 py-2 rounded text-sm font-bold">
          Fraud Alert
        </span>
      </div>

     
      <div className="flex space-x-8">
        <a href="#blog" className="text-white hover:text-[#00B6B6] text-sm">
          Blog
        </a>
        <a
          href="https://www.nseindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00B6B6] text-sm"
        >
          NSE
        </a>
        <a
          href="https://www.bseindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00B6B6] text-sm"
        >
          BSE
        </a>
      </div>
    </header>
  );
};

export default Headerf;
