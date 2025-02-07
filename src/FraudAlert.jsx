import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const FraudAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">Fraud Alert & Blog</h1>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/fraud-alert" className="hover:text-gray-600">Fraud Alert</Link>
          <Link to="/blog" className="hover:text-gray-600">Blog</Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
          <Link 
            to="/fraud-alert" 
            className="block py-2 border-b" 
            onClick={() => setIsOpen(false)}
          >
            Fraud Alert
          </Link>
          <Link 
            to="/blog" 
            className="block py-2" 
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default FraudAlert;
