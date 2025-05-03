
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contractsData } from '../data/contracts';
import { toast } from '../components/ui/use-toast';

const ContractDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = useState(contractsData.find(c => c.id === id));
  
  useEffect(() => {
    if (!contract) {
      toast({
        title: "خطأ",
        description: "لم يتم العثور على العقد المطلوب",
        variant: "destructive"
      });
    }
  }, [contract]);

  if (!contract) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">عقد غير موجود</h1>
            <p className="text-gray-700 mb-8">
              لم نتمكن من العثور على العقد المطلوب. يرجى التحقق من الرابط أو العودة لقائمة العقود.
            </p>
            <Link 
              to="/" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              <i className="fas fa-arrow-right ml-2"></i>
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className={`bg-${contract.color}-600 h-2`}></div>
            <div className="p-6">
              <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <span className={`bg-${contract.color}-100 text-${contract.color}-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 inline-block`}>
                    {contract.categoryLabel}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-800">{contract.title}</h1>
                </div>
                <div className="flex mt-4 md:mt-0 space-x-3 rtl:space-x-reverse">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                    onClick={() => {
                      toast({
                        title: "طباعة",
                        description: "جاري تحضير العقد للطباعة...",
                      });
                      setTimeout(() => window.print(), 1000);
                    }}
                  >
                    <i className="fas fa-print ml-2"></i>
                    طباعة
                  </button>
                  <Link 
                    to={`/download/${contract.id}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <i className="fas fa-file-word ml-2"></i>
                    تنزيل Word
                  </Link>
                  <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast({
                        title: "تم النسخ",
                        description: "تم نسخ رابط العقد بنجاح",
                      });
                    }}
                  >
                    <i className="fas fa-share-alt ml-2"></i>
                    مشاركة
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">وصف العقد</h2>
                <p className="text-gray-600">{contract.description}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">نموذج العقد</h2>
                
                {/* Sample Contract Content - In a real application, this would be fetched from an API */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 text-right leading-relaxed">
                  <h3 className="text-lg font-bold text-center mb-6">{contract.title}</h3>
                  
                  <p className="mb-4">إنه في يوم .... الموافق ..../..../...... تم الاتفاق بين كل من:</p>
                  
                  <p className="mb-4">
                    أولاً: السيد/ .................. الجنسية ...... مقيم برقم ........ شارع ........ قسم ........ محافظة ........
                    ويحمل بطاقة رقم قومي/ جواز سفر رقم ........ (طرف أول)
                  </p>
                  
                  <p className="mb-8">
                    ثانياً: السيد/ .................. الجنسية ...... مقيم برقم ........ شارع ........ قسم ........ محافظة ........
                    ويحمل بطاقة رقم قومي/ جواز سفر رقم ........ (طرف ثاني)
                  </p>
                  
                  <p className="text-center font-bold mb-4">تمهيد</p>
                  
                  <p className="mb-8">
                    حيث أن ........ (وصف موجز للعلاقة بين الأطراف والغرض من العقد) ........ وقد اتفق الأطراف وهم بكامل أهليتهم المعتبرة قانوناً على ما يلي:
                  </p>
                  
                  <p className="font-bold mb-2">البند الأول: يعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد.</p>
                  
                  <p className="mb-4">
                    البند الثاني: ........ (التزامات الطرف الأول) ........
                  </p>
                  
                  <p className="mb-4">
                    البند الثالث: ........ (التزامات الطرف الثاني) ........
                  </p>
                  
                  <p className="mb-4">
                    البند الرابع: ........ (مدة العقد) ........
                  </p>
                  
                  <p className="mb-4">
                    البند الخامس: ........ (المقابل المادي) ........
                  </p>
                  
                  <p className="mb-4">
                    البند السادس: ........ (حالات فسخ العقد) ........
                  </p>
                  
                  <p className="mb-4">
                    البند السابع: ........ (القانون الواجب التطبيق والاختصاص القضائي) ........
                  </p>
                  
                  <p className="mb-4">
                    البند الثامن: حرر هذا العقد من نسختين بيد كل طرف نسخة للعمل بموجبها.
                  </p>
                  
                  <div className="flex justify-between mt-16">
                    <div className="text-center">
                      <p className="font-bold mb-2">الطرف الأول</p>
                      <p>التوقيع: .................</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="font-bold mb-2">الطرف الثاني</p>
                      <p>التوقيع: .................</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-sm mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-exclamation-triangle text-yellow-400"></i>
                    </div>
                    <div className="mr-3">
                      <p className="text-sm text-yellow-700">
                        هذا نموذج استرشادي فقط. ننصح بمراجعة المحامي الخاص بك قبل استخدام أي عقد في معاملاتك القانونية.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <Link 
                    to="/"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-md flex items-center justify-center"
                  >
                    <i className="fas fa-arrow-right ml-2"></i>
                    العودة لقائمة العقود
                  </Link>
                  
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md flex items-center justify-center"
                    onClick={() => {
                      toast({
                        title: "تخصيص العقد",
                        description: "سيتم إتاحة خاصية تخصيص العقد قريباً",
                      });
                    }}
                  >
                    <i className="fas fa-pencil-alt ml-2"></i>
                    تخصيص هذا العقد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContractDetail;
