
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">مميزات منصة جرين لايت</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-4">
            <i className="fas fa-file-signature"></i>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">نماذج عقود احترافية</h3>
          <p className="text-gray-600">60 نموذج عقد قانوني مصري متنوع يغطي جميع المجالات القانونية بصياغة احترافية</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mx-auto mb-4">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">تخصيص سهل وسريع</h3>
          <p className="text-gray-600">نظام متكامل لإدخال البيانات وتخصيص العقود حسب احتياجاتك بسهولة وسرعة</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
            <i className="fas fa-download"></i>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">تحميل بصيغة Word</h3>
          <p className="text-gray-600">إمكانية تحميل جميع العقود بصيغة Word قابلة للتعديل والحفظ والطباعة</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
