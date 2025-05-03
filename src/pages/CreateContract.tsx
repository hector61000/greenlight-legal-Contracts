import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contractsData } from '../data/contracts';
import { toast } from '../components/ui/use-toast';
import ContractFormat from '../components/ContractFormat';
import { ensureRequiredContractData } from '../utils/contractHelpers';

const CreateContract = () => {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = useState(contractsData.find(c => c.id === id));
  const [contractData, setContractData] = useState({
    firstPartyName: '',
    firstPartyNationality: '',
    firstPartyAddress: '',
    firstPartyID: '',
    secondPartyName: '',
    secondPartyNationality: '',
    secondPartyAddress: '',
    secondPartyID: '',
    contractDate: '',
    additionalTerms: ''
  });

  useEffect(() => {
    if (!contract) {
      toast({
        title: "خطأ",
        description: "لم يتم العثور على العقد المطلوب",
        variant: "destructive"
      });
    }
  }, [contract]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContractData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

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
              <div className="mb-6">
                <span className={`bg-${contract.color}-100 text-${contract.color}-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 inline-block`}>
                  {contract.categoryLabel}
                </span>
                <h1 className="text-3xl font-bold text-gray-800">{contract.title}</h1>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">تخصيص العقد</h2>
                <p className="text-gray-600">املأ البيانات التالية لتخصيص العقد.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="firstPartyName" className="block text-gray-700 text-sm font-bold mb-2">اسم الطرف الأول</label>
                  <input 
                    type="text" 
                    id="firstPartyName" 
                    name="firstPartyName"
                    value={contractData.firstPartyName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="secondPartyName" className="block text-gray-700 text-sm font-bold mb-2">اسم الطرف الثاني</label>
                  <input 
                    type="text" 
                    id="secondPartyName" 
                    name="secondPartyName"
                    value={contractData.secondPartyName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="firstPartyNationality" className="block text-gray-700 text-sm font-bold mb-2">جنسية الطرف الأول</label>
                  <input 
                    type="text" 
                    id="firstPartyNationality" 
                    name="firstPartyNationality"
                    value={contractData.firstPartyNationality}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="secondPartyNationality" className="block text-gray-700 text-sm font-bold mb-2">جنسية الطرف الثاني</label>
                  <input 
                    type="text" 
                    id="secondPartyNationality" 
                    name="secondPartyNationality"
                    value={contractData.secondPartyNationality}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="firstPartyAddress" className="block text-gray-700 text-sm font-bold mb-2">عنوان الطرف الأول</label>
                  <input 
                    type="text" 
                    id="firstPartyAddress" 
                    name="firstPartyAddress"
                    value={contractData.firstPartyAddress}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="secondPartyAddress" className="block text-gray-700 text-sm font-bold mb-2">عنوان الطرف الثاني</label>
                  <input 
                    type="text" 
                    id="secondPartyAddress" 
                    name="secondPartyAddress"
                    value={contractData.secondPartyAddress}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="firstPartyID" className="block text-gray-700 text-sm font-bold mb-2">رقم هوية الطرف الأول</label>
                  <input 
                    type="text" 
                    id="firstPartyID" 
                    name="firstPartyID"
                    value={contractData.firstPartyID}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="secondPartyID" className="block text-gray-700 text-sm font-bold mb-2">رقم هوية الطرف الثاني</label>
                  <input 
                    type="text" 
                    id="secondPartyID" 
                    name="secondPartyID"
                    value={contractData.secondPartyID}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="contractDate" className="block text-gray-700 text-sm font-bold mb-2">تاريخ العقد</label>
                  <input 
                    type="date" 
                    id="contractDate" 
                    name="contractDate"
                    value={contractData.contractDate}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />
                </div>
                <div>
                  <label htmlFor="additionalTerms" className="block text-gray-700 text-sm font-bold mb-2">شروط إضافية</label>
                  <textarea
                    id="additionalTerms"
                    name="additionalTerms"
                    value={contractData.additionalTerms}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">معاينة العقد</h2>
                  {contract && (
                    <ContractFormat 
                      contract={contract} 
                      contractData={ensureRequiredContractData(contractData)}
                    />
                  )}
                
                <div className="flex flex-col md:flex-row gap-4">
                  <Link 
                    to={`/contract/${contract.id}`}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-md flex items-center justify-center"
                  >
                    <i className="fas fa-arrow-right ml-2"></i>
                    العودة لمعاينة العقد
                  </Link>
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

export default CreateContract;
