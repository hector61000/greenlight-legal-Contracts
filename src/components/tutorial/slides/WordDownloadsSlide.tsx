
import React from 'react';
import TutorialSlide from '../TutorialSlide';

const WordDownloadsSlide = () => {
  return (
    <TutorialSlide 
      title="تحميل بصيغة Word"
      subtitle="إمكانية تحميل جميع العقود بصيغة Word قابلة للتعديل والحفظ والطباعة"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 mb-8">
        <div className="feature-card h-full flex flex-col">
          <div className="download-illustration">
            <i className="fas fa-file-word"></i>
          </div>
          
          <div className="word-icon-badge">
            <i className="fas fa-file-word text-5xl" style={{ color: "#2b579a" }}></i>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 green-light-color">صيغة Word المرنة</h3>
            <p className="text-gray-600">
              استفد من مرونة صيغة Word في تخصيص وتحرير العقود القانونية بما يتناسب مع احتياجاتك الخاصة. سهولة التعديل مع الحفاظ على الصياغة القانونية الاحترافية.
            </p>
          </div>
          
          <div className="space-y-4 mb-6 flex-grow">
            <div className="benefit-item">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 ml-3">
                  <i className="fas fa-edit text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">تعديل سهل ومرن</h4>
                  <p className="text-gray-600 text-sm">إمكانية تعديل المحتوى والتنسيق حسب الحاجة</p>
                </div>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 ml-3">
                  <i className="fas fa-print text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">جاهزية للطباعة</h4>
                  <p className="text-gray-600 text-sm">تنسيق احترافي جاهز للطباعة بجودة عالية</p>
                </div>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full green-light-bg flex items-center justify-center flex-shrink-0 ml-3">
                  <i className="fas fa-share-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">سهولة المشاركة</h4>
                  <p className="text-gray-600 text-sm">مشاركة الملفات مع الأطراف المعنية بسهولة</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-auto">
            <a href="#" className="download-button inline-flex">
              <span className="button-icon"><i className="fas fa-download"></i></span>
              <span>تصفح النماذج</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col space-y-6">
          <div className="feature-card flex-grow relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 green-light-color">معاينة نموذجية للعقود</h3>
            
            <div className="file-preview mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <i className="fas fa-file-word text-2xl mr-2" style={{ color: "#2b579a" }}></i>
                  <span className="font-bold">عقد_إيجار_سكني.docx</span>
                </div>
                <div>
                  <button className="text-gray-600 hover:text-gray-800 px-2">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>
              
              <div className="file-preview-content">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold">عقد إيجار سكني</h3>
                  <div className="h-px bg-gray-300 my-2"></div>
                </div>
                
                <div className="space-y-3 px-2">
                  <p className="text-sm text-gray-800 font-bold">الطرفان:</p>
                  <div className="file-line word-blue"></div>
                  <div className="file-line short"></div>
                  
                  <p className="text-sm text-gray-800 font-bold">موضوع العقد:</p>
                  <div className="file-line"></div>
                  <div className="file-line medium"></div>
                  <div className="file-line short"></div>
                  
                  <p className="text-sm text-gray-800 font-bold">مدة العقد:</p>
                  <div className="file-line medium"></div>
                  
                  <p className="text-sm text-gray-800 font-bold">البنود:</p>
                  <div className="file-line"></div>
                  <div className="file-line medium"></div>
                  <div className="file-line"></div>
                  <div className="file-line short"></div>
                  <div className="file-line medium"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:space-x-reverse">
              <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg flex-1 text-center">
                <i className="fas fa-desktop text-xl mb-2 green-light-color"></i>
                <span className="text-sm font-bold text-gray-800">جميع أجهزة الكمبيوتر</span>
                <span className="text-xs text-gray-600">متوافق مع جميع إصدارات Word</span>
              </div>
              
              <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg flex-1 text-center">
                <i className="fas fa-language text-xl mb-2 green-light-color"></i>
                <span className="text-sm font-bold text-gray-800">دعم اللغة العربية</span>
                <span className="text-xs text-gray-600">توافق كامل مع اللغة العربية</span>
              </div>
              
              <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg flex-1 text-center">
                <i className="fas fa-lock text-xl mb-2 green-light-color"></i>
                <span className="text-sm font-bold text-gray-800">آمن وموثوق</span>
                <span className="text-xs text-gray-600">خالي من الفيروسات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialSlide>
  );
};

export default WordDownloadsSlide;
