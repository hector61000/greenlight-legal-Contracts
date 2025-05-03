
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../../components/ui/use-toast';
import { ContractType } from '../../components/ContractCard';

interface ContractHeaderProps {
  contract: ContractType;
}

const ContractHeader: React.FC<ContractHeaderProps> = ({ contract }) => {
  return (
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
  );
};

export default ContractHeader;
