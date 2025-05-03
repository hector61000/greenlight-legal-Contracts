
import React from 'react';

interface ContractFormatProps {
  contract: {
    title: string;
    category?: string;
    categoryLabel?: string;
  };
  contractData: {
    firstPartyName: string;
    firstPartyNationality: string;
    firstPartyAddress: string;
    firstPartyID: string;
    secondPartyName: string;
    secondPartyNationality: string;
    secondPartyAddress: string;
    secondPartyID: string;
    contractDate: string;
    additionalTerms?: string;
  };
}

const ContractFormat: React.FC<ContractFormatProps> = ({ contract, contractData }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 mb-6 contract-text">
      <style jsx>{`
        .contract-section {
          margin-bottom: 2rem;
        }
        
        .contract-text {
          line-height: 1.8;
          text-align: right;
          direction: rtl;
        }
        
        .contract-title {
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .contract-clause {
          margin-bottom: 1rem;
          padding: 0.5rem;
          background-color: #f9fafb;
          border-radius: 4px;
        }

        @media print {
          .contract-section {
            box-shadow: none;
            border: 1px solid #e5e7eb;
            break-inside: avoid;
          }
        }
      `}</style>

      <h4 className="font-bold text-gray-800 mb-4 text-center text-xl">{contract.title} الكامل</h4>
      
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h5 className="font-semibold text-lg mb-2 text-gray-800">مقدمة العقد</h5>
        <p className="text-gray-700 mb-2">إنه في يوم {contractData.contractDate} الموافق ................... تم الاتفاق بين كل من:</p>
        <p className="text-gray-700">السيد/ <span className="font-semibold">{contractData.firstPartyName}</span> {contractData.firstPartyNationality} الجنسية، حامل بطاقة رقم <span className="font-semibold">{contractData.firstPartyID}</span>، مقيم في <span className="font-semibold">{contractData.firstPartyAddress}</span> (ويشار إليه فيما بعد بـ "الطرف الأول")</p>
        <p className="text-gray-700 mt-2">والسيد/ <span className="font-semibold">{contractData.secondPartyName}</span> {contractData.secondPartyNationality} الجنسية، حامل بطاقة رقم <span className="font-semibold">{contractData.secondPartyID}</span>، مقيم في <span className="font-semibold">{contractData.secondPartyAddress}</span> (ويشار إليه فيما بعد بـ "الطرف الثاني")</p>
      </div>
      
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h5 className="font-semibold text-lg mb-2 text-gray-800">تمهيد</h5>
        <p className="text-gray-700">حيث أن الطرف الأول يرغب في {contract.title === 'عقد هبة' ? 'هبة الطرف الثاني' : 'التعاقد مع الطرف الثاني'} وحيث أن الطرف الثاني قد قبل ذلك، فقد اتفق الطرفان وهما بكامل الأهلية القانونية المعتبرة شرعاً وقانوناً على ما يلي:</p>
      </div>
      
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h5 className="font-semibold text-lg mb-2 text-gray-800">بنود العقد</h5>
        <div className="space-y-3">
          <div className="contract-clause">
            <p className="text-gray-700"><span className="font-semibold">البند الأول:</span> يعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد.</p>
          </div>
          
          <div className="contract-clause">
            <p className="text-gray-700"><span className="font-semibold">البند الثاني:</span> {contract.id === 'civil-2' ? 'يقر الطرف الأول أنه قد وهب للطرف الثاني هبة نهائية لا رجوع فيها، والطرف الثاني يقبل هذه الهبة، وذلك وفقاً للقوانين المصرية المنظمة للهبات.' : 'اتفق الطرفان على تنفيذ موضوع هذا العقد حسب الشروط والأحكام المتفق عليها.'}</p>
          </div>
          
          <div className="contract-clause">
            <p className="text-gray-700"><span className="font-semibold">البند الثالث:</span> يقر الطرفان بأنهما على علم تام بكافة الشروط والالتزامات الواردة في هذا العقد.</p>
          </div>
          
          <div className="contract-clause">
            <p className="text-gray-700"><span className="font-semibold">البند الرابع:</span> يلتزم الطرفان بتنفيذ هذا العقد بحسن نية وبما يتفق مع القانون المصري.</p>
          </div>
          
          <div className="contract-clause">
            <p className="text-gray-700"><span className="font-semibold">البند الخامس:</span> في حالة نشوء أي نزاع بين الطرفين بخصوص تنفيذ أو تفسير هذا العقد، يتم حله ودياً، وإذا تعذر ذلك يتم اللجوء إلى المحاكم المصرية المختصة.</p>
          </div>
          
          {contractData.additionalTerms && (
            <div className="contract-clause">
              <p className="text-gray-700"><span className="font-semibold">الشروط الإضافية:</span> {contractData.additionalTerms}</p>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <h5 className="font-semibold text-lg mb-4 text-gray-800">توقيعات الأطراف</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-4 rounded-md">
            <p className="font-semibold mb-2">الطرف الأول:</p>
            <p>{contractData.firstPartyName}</p>
            <div className="mt-6 h-12 border-b border-dashed border-gray-300"></div>
            <p className="text-center text-xs text-gray-500 mt-1">التوقيع</p>
          </div>
          <div className="border border-gray-200 p-4 rounded-md">
            <p className="font-semibold mb-2">الطرف الثاني:</p>
            <p>{contractData.secondPartyName}</p>
            <div className="mt-6 h-12 border-b border-dashed border-gray-300"></div>
            <p className="text-center text-xs text-gray-500 mt-1">التوقيع</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractFormat;
