
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, PhoneCall } from 'lucide-react';
import { Button } from './ui/button';

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
          <nav className="flex space-x-2 space-x-reverse rtl:space-x-reverse">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center">
                <Home className="ml-2 h-4 w-4" />
                الصفحة الرئيسية
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contracts" className="flex items-center">
                <FileText className="ml-2 h-4 w-4" />
                العقود
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact" className="flex items-center">
                <PhoneCall className="ml-2 h-4 w-4" />
                اتصل بنا
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;
