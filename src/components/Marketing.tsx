import React from 'react';
import { Link } from 'react-router-dom';
const Marketing: React.FC = () => {
  return <section className="container mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">اكتشف منصة جرين لايت</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[24px]">
        {/* First Marketing Ad */}
        

        {/* Second Marketing Ad */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 h-48 flex items-center justify-center">
            <img src="/lovable-uploads/570d9971-5068-4d70-86b4-c6619ddeaaa9.png" alt="صورة قانونية" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">تخصيص العقود بسهولة</h3>
            <p className="text-gray-600 mb-4">قم بتخصيص العقود حسب احتياجاتك الخاصة وتحميلها بصيغة Word قابلة للتعديل في دقائق.</p>
            <Link to="/tutorial" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full inline-block">تعلم المزيد</Link>
          </div>
        </div>
      </div>

      {/* Third Marketing Ad (Full Width) */}
      <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src="/lovable-uploads/570d9971-5068-4d70-86b4-c6619ddeaaa9.png" alt="صورة قانونية" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3">انضم إلى أكثر من 2000 محامي يستخدمون منصة جرين لايت</h3>
            <p className="text-gray-600 mb-4">استفد من مجموعة متنوعة من النماذج القانونية عالية الجودة التي تغطي مختلف المجالات والاحتياجات القانونية.</p>
            <Link to="/login" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full inline-block text-center">انضم الآن</Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Marketing;