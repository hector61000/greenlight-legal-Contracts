
import React from 'react';
import TutorialSlide from '../TutorialSlide';

const CustomizationSlide = () => {
  return (
    <TutorialSlide 
      title="تخصيص سهل وسريع"
      subtitle="نظام متكامل لإدخال البيانات وتخصيص العقود حسب احتياجاتك بسهولة وسرعة"
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 max-w-5xl mx-auto">
        <div className="customization-step text-center p-4 flex-1 mb-4 md:mb-0 mx-2">
          <div className="w-16 h-16 green-light-bg rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-search text-white text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-1">اختيار النموذج</h3>
          <p className="text-gray-600 text-sm">اختر من بين 60+ نموذج عقد قانوني</p>
        </div>
        
        <div className="workflow-arrow hidden md:block w-8"></div>
        
        <div className="customization-step text-center p-4 flex-1 mb-4 md:mb-0 mx-2">
          <div className="w-16 h-16 green-light-bg rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-keyboard text-white text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-1">تخصيص البيانات</h3>
          <p className="text-gray-600 text-sm">أدخل بياناتك في نموذج سهل الاستخدام</p>
        </div>
        
        <div className="workflow-arrow hidden md:block w-8"></div>
        
        <div className="customization-step text-center p-4 flex-1 mb-4 md:mb-0 mx-2">
          <div className="w-16 h-16 green-light-bg rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-eye text-white text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-1">معاينة النتيجة</h3>
          <p className="text-gray-600 text-sm">راجع العقد المخصص حسب بياناتك</p>
        </div>
        
        <div className="workflow-arrow hidden md:block w-8"></div>
        
        <div className="customization-step text-center p-4 flex-1 mx-2">
          <div className="w-16 h-16 green-light-bg rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-download text-white text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-1">تحميل العقد</h3>
          <p className="text-gray-600 text-sm">احصل على العقد بصيغة Word جاهز للاستخدام</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto w-full px-4 gap-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="customization-step p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="step-number mr-3">1</div>
              <h3 className="text-xl font-bold green-light-color">واجهة تخصيص سهلة الاستخدام</h3>
            </div>
            
            <p className="text-gray-600 mb-6">نظام مبسط لتخصيص العقود من خلال نماذج سهلة الاستخدام تضمن أقصى درجات الدقة والاحترافية.</p>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="text-lg font-bold mb-3">نموذج إدخال البيانات</h4>
              
              <div className="form-field">الطرف الأول: شركة ...</div>
              <div className="form-field">الطرف الثاني: السيد/ة ...</div>
              <div className="form-field">قيمة العقد: ... جنيه مصري</div>
              <div className="form-field">مدة العقد: ... شهر/سنة</div>
              
              <div className="mt-4 text-center">
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mx-1 text-sm">إعادة تعيين</button>
                <button className="green-light-bg text-white px-4 py-1 rounded-lg mx-1 text-sm">معاينة النموذج</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="customization-step p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="step-number mr-3">2</div>
              <h3 className="text-xl font-bold green-light-color">مميزات نظام التخصيص</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 mt-1 ml-3">
                  <i className="fas fa-bolt text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">سرعة التخصيص</h4>
                  <p className="text-gray-600 text-sm">إكمال عملية تخصيص العقد في أقل من 5 دقائق</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 mt-1 ml-3">
                  <i className="fas fa-lock text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">خصوصية وأمان</h4>
                  <p className="text-gray-600 text-sm">بياناتك محفوظة بأعلى معايير الأمان والخصوصية</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 mt-1 ml-3">
                  <i className="fas fa-magic text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">تعبئة ذكية</h4>
                  <p className="text-gray-600 text-sm">نظام ذكي يقترح البيانات ويكمل الحقول المتشابهة تلقائياً</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 mt-1 ml-3">
                  <i className="fas fa-history text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">حفظ البيانات</h4>
                  <p className="text-gray-600 text-sm">حفظ بياناتك السابقة لاستخدامها في مرات قادمة</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TutorialSlide>
  );
};

export default CustomizationSlide;
