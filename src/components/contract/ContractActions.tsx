
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../../components/ui/use-toast';

const ContractActions: React.FC = () => {
  return (
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
  );
};

export default ContractActions;
