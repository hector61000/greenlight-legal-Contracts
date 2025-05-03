
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl font-bold text-green-600 mb-2">60+</div>
          <div className="text-gray-600">نموذج عقد قانوني</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl font-bold text-green-600 mb-2">8</div>
          <div className="text-gray-600">فئات قانونية رئيسية</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
          <div className="text-gray-600">متوافق مع القوانين المصرية</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
          <div className="text-gray-600">محامي يستخدم المنصة</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
