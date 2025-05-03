
import React from 'react';
import TutorialSlide from '../TutorialSlide';

const StatsSlide = () => {
  return (
    <TutorialSlide 
      title="إحصائيات المنصة"
      subtitle="أرقام تعكس قوة وموثوقية المنصة القانونية الأولى في مصر والعالم العربي"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {/* Stat Card 1 */}
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="green-light-bg text-white w-16 h-16 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-file-contract text-2xl"></i>
            </div>
            <h3 className="text-5xl font-black mb-2 green-light-color">60<span className="text-3xl">+</span></h3>
            <p className="text-lg font-semibold text-gray-800">نموذج عقد قانوني</p>
            <p className="text-sm text-gray-600 mt-2">متنوعة وشاملة لكافة المجالات</p>
          </div>
        </div>
        
        {/* Stat Card 2 */}
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-layer-group"></i>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="green-light-bg text-white w-16 h-16 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-5xl font-black mb-2 green-light-color">8</h3>
            <p className="text-lg font-semibold text-gray-800">فئات قانونية رئيسية</p>
            <p className="text-sm text-gray-600 mt-2">تغطي كافة احتياجاتك القانونية</p>
          </div>
        </div>
        
        {/* Stat Card 3 */}
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="green-light-bg text-white w-16 h-16 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-check-circle text-2xl"></i>
            </div>
            <h3 className="text-5xl font-black mb-2 green-light-color">100<span className="text-3xl">%</span></h3>
            <p className="text-lg font-semibold text-gray-800">متوافق مع القوانين المصرية</p>
            <p className="text-sm text-gray-600 mt-2">صياغة قانونية موثوقة ومعتمدة</p>
          </div>
        </div>
        
        {/* Stat Card 4 */}
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="green-light-bg text-white w-16 h-16 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-5xl font-black mb-2 green-light-color">2000<span className="text-3xl">+</span></h3>
            <p className="text-lg font-semibold text-gray-800">محامي يستخدم المنصة</p>
            <p className="text-sm text-gray-600 mt-2">ثقة المحترفين في خدماتنا</p>
          </div>
        </div>
      </div>
    </TutorialSlide>
  );
};

export default StatsSlide;
