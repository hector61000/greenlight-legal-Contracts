import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">منصة جرين لايت</h3>
            <p className="text-gray-400 mb-4">
              المنصة القانونية الأولى في مصر والعالم العربي لنماذج العقود القانونية الاحترافية
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">الرئيسية</Link></li>
              <li><Link to="/contracts" className="text-gray-400 hover:text-white">تصفح العقود</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">الأسعار والاشتراكات</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">عن المنصة</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">اتصل بنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">فئات العقود</h3>
            <ul className="space-y-2">
              <li><Link to="/contracts/civil" className="text-gray-400 hover:text-white">العقود المدنية</Link></li>
              <li><Link to="/contracts/commercial" className="text-gray-400 hover:text-white">العقود التجارية</Link></li>
              <li><Link to="/contracts/employment" className="text-gray-400 hover:text-white">عقود العمل</Link></li>
              <li><Link to="/contracts/rent" className="text-gray-400 hover:text-white">عقود الإيجار</Link></li>
              <li><Link to="/contracts/companies" className="text-gray-400 hover:text-white">عقود الشركات</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt ml-2 text-green-500"></i>
                <span className="text-gray-400">القاهرة، مصر</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt ml-2 text-green-500"></i>
                <span className="text-gray-400">⁦+20 12 81343893⁩</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope ml-2 text-green-500"></i>
                <span className="text-gray-400">mantan0002012@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} منصة جرين لايت. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>;
};
export default Footer;