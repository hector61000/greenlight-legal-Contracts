
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-green-700 text-white py-12 md:py-16 mb-12 rounded-lg mx-4">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">المنصة القانونية الأولى في مصر والعالم العربي</h2>
        <p className="text-lg md:text-xl mb-8">60 نموذج عقد قانوني احترافي متوافق مع القوانين المصرية</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0">
          <Link 
            to="/contracts" 
            className="bg-white text-green-700 hover:bg-green-100 font-bold px-6 py-3 rounded-full shadow-lg flex items-center justify-center md:ml-4 mb-4 md:mb-0"
          >
            <i className="fas fa-file-download ml-2"></i>
            تصفح النماذج
          </Link>
          <Link 
            to="/tutorial" 
            className="bg-transparent hover:bg-green-600 text-white border-2 border-white font-bold px-6 py-3 rounded-full shadow-lg flex items-center justify-center"
          >
            <i className="fas fa-video ml-2"></i>
            شاهد الشرح
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
