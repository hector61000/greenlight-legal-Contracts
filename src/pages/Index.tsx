
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Categories from '../components/Categories';
import ContractsList from '../components/ContractsList';
import Footer from '../components/Footer';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

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
        <Categories onCategoryChange={handleCategoryChange} />
        <ContractsList category={activeCategory} searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
