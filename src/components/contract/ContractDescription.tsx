
import React from 'react';
import { ContractType } from '../../components/ContractCard';

interface ContractDescriptionProps {
  contract: ContractType;
}

const ContractDescription: React.FC<ContractDescriptionProps> = ({ contract }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">وصف العقد</h2>
      <p className="text-gray-600">{contract.description}</p>
    </div>
  );
};

export default ContractDescription;
