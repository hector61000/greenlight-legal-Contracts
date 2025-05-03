
import React from 'react';
import TutorialSlide from '../TutorialSlide';

const ContractTemplatesSlide = () => {
  return (
    <TutorialSlide 
      title="نماذج عقود احترافية"
      subtitle="60 نموذج عقد قانوني مصري متنوع يغطي جميع المجالات القانونية بصياغة احترافية"
    >
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl px-4">
        <div className="feature-card">
          <div className="document-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start mb-6">
            <div className="green-light-bg text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto md:ml-6 md:mr-0 mb-4 md:mb-0 flex-shrink-0">
              <i className="fas fa-file-contract text-3xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 green-light-color text-center md:text-right">نماذج عقود متنوعة وشاملة</h3>
              <p className="text-gray-600 mb-4 text-center md:text-right">صُممت النماذج بواسطة خبراء قانونيين لتلبية كافة الاحتياجات القانونية للأفراد والشركات.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-check-circle text-lg mr-2 green-light-color"></i>
                <h4 className="font-bold text-gray-800">صياغة احترافية</h4>
              </div>
              <p className="text-gray-600 text-sm">نماذج معدة بدقة لتحقيق الحماية القانونية الكاملة</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-shield-alt text-lg mr-2 green-light-color"></i>
                <h4 className="font-bold text-gray-800">حماية قانونية كاملة</h4>
              </div>
              <p className="text-gray-600 text-sm">تضمن حقوقك وتحميك من الثغرات القانونية</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-sync-alt text-lg mr-2 green-light-color"></i>
                <h4 className="font-bold text-gray-800">تحديث مستمر</h4>
              </div>
              <p className="text-gray-600 text-sm">تحديث دوري للنماذج وفقاً لأحدث التشريعات</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-thumbs-up text-lg mr-2 green-light-color"></i>
                <h4 className="font-bold text-gray-800">سهولة الاستخدام</h4>
              </div>
              <p className="text-gray-600 text-sm">بنود واضحة ومفهومة بعيداً عن التعقيدات القانونية</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-3">الفئات القانونية المتوفرة:</h4>
            <div className="flex flex-wrap">
              <span className="category-tag"><i className="fas fa-building ml-1"></i> عقود شركات</span>
              <span className="category-tag"><i className="fas fa-home ml-1"></i> عقود عقارية</span>
              <span className="category-tag"><i className="fas fa-briefcase ml-1"></i> عقود عمل</span>
              <span className="category-tag"><i className="fas fa-hand-holding-usd ml-1"></i> عقود تمويل</span>
              <span className="category-tag"><i className="fas fa-truck ml-1"></i> عقود توريد</span>
              <span className="category-tag"><i className="fas fa-users ml-1"></i> عقود شراكة</span>
              <span className="category-tag"><i className="fas fa-gavel ml-1"></i> عقود قضائية</span>
              <span className="category-tag"><i className="fas fa-plus-circle ml-1"></i> وأكثر...</span>
            </div>
          </div>
        </div>
      </div>
    </TutorialSlide>
  );
};

export default ContractTemplatesSlide;
