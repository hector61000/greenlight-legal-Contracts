
import React from 'react';
import { ContractType } from '../../components/ContractCard';

interface ContractTemplateProps {
  contract: ContractType;
}

const ContractTemplate: React.FC<ContractTemplateProps> = ({ contract }) => {
  return (
    <div className="contract-text bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 text-right leading-relaxed">
      <style>
        {`
        .contract-text {
          line-height: 1.8;
          text-align: right;
          direction: rtl;
        }
        
        .contract-clause {
          margin-bottom: 1rem;
          padding: 0.5rem;
          background-color: #f9fafb;
          border-radius: 4px;
        }
        `}
      </style>
      
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
      
      <div className="contract-clause">
        <p className="font-bold mb-2">البند الأول: يعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد.</p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند الثاني: ........ (التزامات الطرف الأول) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند الثالث: ........ (التزامات الطرف الثاني) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند الرابع: ........ (مدة العقد) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند الخامس: ........ (المقابل المادي) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند السادس: ........ (حالات فسخ العقد) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند السابع: ........ (القانون الواجب التطبيق والاختصاص القضائي) ........
        </p>
      </div>
      
      <div className="contract-clause">
        <p className="mb-4">
          البند الثامن: حرر هذا العقد من نسختين بيد كل طرف نسخة للعمل بموجبها.
        </p>
      </div>
      
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
  );
};

export default ContractTemplate;
