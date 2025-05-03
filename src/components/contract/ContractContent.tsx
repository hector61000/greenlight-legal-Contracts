
import React from 'react';
import { ContractType } from '../../components/ContractCard';
import ContractHeader from './ContractHeader';
import ContractDescription from './ContractDescription';
import ContractTemplate from './ContractTemplate';
import ContractDisclaimer from './ContractDisclaimer';
import ContractActions from './ContractActions';

interface ContractContentProps {
  contract: ContractType;
}

const ContractContent: React.FC<ContractContentProps> = ({ contract }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className={`bg-${contract.color}-600 h-2`}></div>
      <div className="p-6">
        <ContractHeader contract={contract} />
        <ContractDescription contract={contract} />
        
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">نموذج العقد</h2>
          <ContractTemplate contract={contract} />
          <ContractDisclaimer />
          <ContractActions />
        </div>
      </div>
    </div>
  );
};

export default ContractContent;
