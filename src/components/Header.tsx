import React from 'react';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return <header className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold ml-3">
            GL
          </div>
          <h1 className="text-3xl font-bold logo-text">منصة جرين لايت</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0 md:space-x-reverse md:space-x-4">
          <div className="relative md:ml-4 w-full md:w-auto">
            
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          
        </div>
      </div>
    </header>;
};
export default Header;