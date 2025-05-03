
import React, { useState, useEffect } from 'react';
import ContractCard, { ContractType } from './ContractCard';
import { contractsData } from '../data/contracts';

interface ContractsListProps {
  category: string;
  searchQuery?: string;
}

const ContractsList: React.FC<ContractsListProps> = ({ category, searchQuery = '' }) => {
  const [filteredContracts, setFilteredContracts] = useState<ContractType[]>([]);

  useEffect(() => {
    let contracts = contractsData;

    // Filter by category if not 'all'
    if (category !== 'all') {
      contracts = contracts.filter(contract => contract.category === category);
    }

    // Filter by search query if provided
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      contracts = contracts.filter(
        contract => 
          contract.title.toLowerCase().includes(query) ||
          contract.description.toLowerCase().includes(query) ||
          contract.categoryLabel.toLowerCase().includes(query)
      );
    }

    setFilteredContracts(contracts);
  }, [category, searchQuery]);

  if (filteredContracts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">لم يتم العثور على عقود مطابقة للبحث.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredContracts.map(contract => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </section>
  );
};

export default ContractsList;
