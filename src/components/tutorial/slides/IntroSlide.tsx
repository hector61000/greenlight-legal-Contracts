
import React from 'react';
import TutorialSlide from '../TutorialSlide';

const IntroSlide = () => {
  return (
    <TutorialSlide 
      title="منصة جرين لايت"
      subtitle="المنصة القانونية الأولى"
    >
      <div className="flex flex-col items-center justify-center h-full z-10 relative py-16">
        <div className="logo-placeholder mb-8">
          <span>GL</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-black mb-4 green-light-color">جرين لايت</h1>
        
        <div className="h-1 w-20 green-light-bg my-6"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">المنصة القانونية الأولى</h2>
        
        <p className="text-xl sm:text-2xl text-center max-w-3xl mx-auto text-gray-700 mb-16">
          في مصر والعالم العربي
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse text-gray-800">
          <div className="flex items-center mx-3">
            <i className="fas fa-file-contract text-2xl mr-2 green-light-color"></i>
            <span className="text-xl">60+ نموذج عقد قانوني</span>
          </div>
          
          <div className="flex items-center mx-3">
            <i className="fas fa-check-circle text-2xl mr-2 green-light-color"></i>
            <span className="text-xl">100% متوافق مع القوانين المصرية</span>
          </div>
          
          <div className="flex items-center mx-3">
            <i className="fas fa-users text-2xl mr-2 green-light-color"></i>
            <span className="text-xl">+2000 محامي مستخدم</span>
          </div>
        </div>
      </div>
    </TutorialSlide>
  );
};

export default IntroSlide;
