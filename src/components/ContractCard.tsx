
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, FileWord } from 'lucide-react';

export interface ContractType {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  color: string;
}

const ContractCard: React.FC<{ contract: ContractType }> = ({ contract }) => {
  return (
    <div className={`contract-card bg-white rounded-lg shadow-md overflow-hidden category-${contract.category}`}>
      <div className={`h-3 bg-${contract.color}-600`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{contract.title}</h3>
          <span className={`bg-${contract.color}-100 text-${contract.color}-800 text-xs font-semibold px-2.5 py-0.5 rounded`}>
            {contract.categoryLabel}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{contract.description}</p>
        <Link
          to={`/create-contract/${contract.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full mb-2 flex items-center justify-center"
        >
          <FileText className="ml-2 h-4 w-4" />
          إنشاء العقد
        </Link>
        <Link
          to={`/download/${contract.id}`}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full flex items-center justify-center"
        >
          <FileWord className="ml-2 h-4 w-4" />
          تنزيل النموذج
        </Link>
      </div>
    </div>
  );
};

export default ContractCard;
