
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const ContractNotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">عقد غير موجود</h1>
          <p className="text-gray-700 mb-8">
            لم نتمكن من العثور على العقد المطلوب. يرجى التحقق من الرابط أو العودة لقائمة العقود.
          </p>
          <Link 
            to="/" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
          >
            <i className="fas fa-arrow-right ml-2"></i>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContractNotFound;
