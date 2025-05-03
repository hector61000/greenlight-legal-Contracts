
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import ContractsList from '../components/ContractsList';
import Footer from '../components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <ContractsList category="all" searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
