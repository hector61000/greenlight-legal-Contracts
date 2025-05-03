
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contractsData } from '../data/contracts';
import { toast } from '../components/ui/use-toast';
import ContractContent from '../components/contract/ContractContent';
import ContractNotFound from '../components/contract/ContractNotFound';

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
    return <ContractNotFound />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <ContractContent contract={contract} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContractDetail;
