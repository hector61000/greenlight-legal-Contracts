
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Tutorial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    // Slide 1 - Main intro
    {
      title: "منصة جرين لايت",
      subtitle: "المنصة القانونية الأولى",
      content: (
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
      )
    },
    // Slide 2 - Statistics
    {
      title: "إحصائيات المنصة",
      subtitle: "أرقام تعكس قوة وموثوقية المنصة",
      content: (
        <div className="flex flex-col items-center justify-center h-full z-10 relative py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">إحصائيات المنصة</h2>
          
          <div className="h-1 w-20 green-light-bg my-4"></div>
          
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto text-gray-600 mb-10">
            أرقام تعكس قوة وموثوقية المنصة القانونية الأولى في مصر والعالم العربي
          </p>
          
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
        </div>
      )
    },
    // Slide 3 - Contract Templates
    {
      title: "نماذج عقود احترافية",
      subtitle: "60 نموذج عقد قانوني مصري متنوع",
      content: (
        <div className="flex flex-col items-center justify-start h-full z-10 relative py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">نماذج عقود احترافية</h2>
          
          <div className="h-1 w-20 green-light-bg my-4"></div>
          
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto text-gray-600 mb-8">
            60 نموذج عقد قانوني مصري متنوع يغطي جميع المجالات القانونية بصياغة احترافية
          </p>
          
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
        </div>
      )
    },
    // Slide 4 - Customization Process
    {
      title: "تخصيص سهل وسريع",
      subtitle: "نظام متكامل لإدخال البيانات وتخصيص العقود",
      content: (
        <div className="flex flex-col items-center justify-start h-full z-10 relative py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">تخصيص سهل وسريع</h2>
          
          <div className="h-1 w-20 green-light-bg my-4"></div>
          
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto text-gray-600 mb-8">
            نظام متكامل لإدخال البيانات وتخصيص العقود حسب احتياجاتك بسهولة وسرعة
          </p>
          
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
        </div>
      )
    },
    // Slide 5 - Word Downloads
    {
      title: "تحميل بصيغة Word",
      subtitle: "إمكانية تحميل جميع العقود بصيغة Word",
      content: (
        <div className="flex flex-col items-center justify-start h-full z-10 relative py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">تحميل بصيغة Word</h2>
          
          <div className="h-1 w-20 green-light-bg my-4"></div>
          
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto text-gray-600 mb-8">
            إمكانية تحميل جميع العقود بصيغة Word قابلة للتعديل والحفظ والطباعة
          </p>
          
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
                <a href="#" onClick={() => navigate('/contracts')} className="download-button inline-flex">
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
        </div>
      )
    },
    // Add additional slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToContracts = () => {
    navigate('/contracts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">دليل استخدام منصة جرين لايت</h1>
          
          <div className="slide-container bg-white pattern-bg relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-6xl">
            <div className="legal-decoration">
              <i className="fas fa-balance-scale text-9xl transform rotate-12"></i>
            </div>
            
            {slides[currentSlide].content}
            
            <div className="absolute bottom-6 left-0 right-0 text-center text-gray-600">
              <p className="text-sm">الحلول القانونية الرقمية بين يديك | شريحة {currentSlide + 1} من {slides.length}</p>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-10 md:bottom-6 left-0 right-0 flex justify-center gap-4">
              <Button 
                variant="outline"
                size="icon"
                onClick={prevSlide} 
                className="bg-white/80 hover:bg-white border border-gray-200 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-green-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline"
                size="icon"
                onClick={nextSlide} 
                className="bg-white/80 hover:bg-white border border-gray-200 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button 
              onClick={goToContracts}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full text-lg shadow-lg"
            >
              <i className="fas fa-file-contract ml-2"></i>
              تصفح العقود الآن
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      
      <style jsx="true">{`
        .green-light-color {
          color: #118c4f;
        }
        .green-light-bg {
          background-color: #118c4f;
        }
        .pattern-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23118c4f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .logo-placeholder {
          width: 150px;
          height: 150px;
          background-color: #118c4f;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 900;
          border: 8px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .slide-container {
          min-height: 600px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .legal-decoration {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 320px;
          height: 320px;
          opacity: 0.1;
          z-index: 0;
        }
        .stat-card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .stat-icon {
          position: absolute;
          bottom: -15px;
          right: -15px;
          font-size: 120px;
          opacity: 0.08;
          transform: rotate(-10deg);
        }
        .feature-card {
          background-color: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .document-icon {
          position: absolute;
          bottom: -20px;
          left: -20px;
          font-size: 180px;
          opacity: 0.05;
          transform: rotate(-15deg);
          z-index: 0;
        }
        .category-tag {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin: 5px;
          background-color: rgba(17, 140, 79, 0.1);
          color: #118c4f;
        }
        .customization-step {
          background-color: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .customization-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #118c4f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }
        .form-field {
          border: 2px dashed rgba(17, 140, 79, 0.3);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 16px;
          color: #666;
          background-color: rgba(17, 140, 79, 0.03);
          margin-bottom: 10px;
          position: relative;
        }
        .form-field:before {
          content: "حقل إدخال";
          position: absolute;
          top: -10px;
          right: 12px;
          background-color: white;
          padding: 0 6px;
          font-size: 12px;
          color: #118c4f;
        }
        .workflow-arrow {
          position: relative;
          height: 3px;
          background-color: #118c4f;
          margin: 0 15px;
        }
        .workflow-arrow:after {
          content: "";
          position: absolute;
          right: -10px;
          top: -8px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #118c4f;
        }
        .download-illustration {
          position: absolute;
          bottom: -30px;
          left: -30px;
          font-size: 200px;
          opacity: 0.05;
          transform: rotate(-15deg);
          z-index: 0;
        }
        .benefit-item {
          padding: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          background-color: rgba(17, 140, 79, 0.05);
          transform: translateX(-5px);
        }
        .download-button {
          background-color: #118c4f;
          color: white;
          padding: 14px 30px;
          border-radius: 50px;
          font-weight: bold;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .download-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(17, 140, 79, 0.3);
        }
        .button-icon {
          margin-left: 10px;
          transition: all 0.3s ease;
        }
        .word-icon-badge {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 60px;
          height: 60px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        .file-preview {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          background-color: white;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .file-preview-content {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .file-preview-content::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
        }
        .file-line {
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .file-line.short {
          width: 70%;
        }
        .file-line.medium {
          width: 85%;
        }
        .file-line.full {
          width: 100%;
        }
        .file-line.word-blue {
          background-color: #2b579a;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .slide-container {
            min-height: 500px;
          }
          .logo-placeholder {
            width: 100px;
            height: 100px;
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default Tutorial;
