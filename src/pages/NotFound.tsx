
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">عفواً، الصفحة غير موجودة</p>
          <p className="text-gray-500 mb-8">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
          <Link 
            to="/" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
          >
            <i className="fas fa-home ml-2"></i>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
