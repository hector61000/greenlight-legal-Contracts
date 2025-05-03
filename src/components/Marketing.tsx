
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';

const Marketing: React.FC = () => {
  return <section className="container mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">اكتشف منصة جرين لايت</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[24px] rounded-lg">
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
            <img alt="صورة قانونية" className="w-full h-full object-cover" src="/lovable-uploads/f913ef7b-2d22-44f9-ac9d-088092237c2c.jpg" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center px-[26px] py-[25px] rounded-3xl bg-neutral-50">
            <h3 className="mb-4 text-2xl font-bold text-green-700">العقد الإلكتروني</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              هو الذي يحدث بين برمجين عبر وسائل الإعلام، مثل الإنترنت أو البريد الإلكتروني أو المنصات، ويهدف إلى تبادل مختلف، ويكون قابلاً لإنشاء سرقة رقمية بشكل قانوني إذا توفرت فيها الشروط القانونية المطلوبة. يتميز هذا النوع من العقود بأنه يُبرم دون حاجة إلى التواجد المادي للأطراف، أي أن مجلس العقد يكون افتراضيًا وليس ماديًا.
            </p>
            <div className="mt-2">
              <Button asChild variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/contracts" className="flex items-center gap-2">
                  <FileText size={18} />
                  إنشاء عقد
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Marketing;
