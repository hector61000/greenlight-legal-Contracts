
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import ContractsList from '../components/ContractsList';

const Contracts = () => {
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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">جميع العقود المتاحة</h1>
          <p className="text-center text-gray-600 mb-8">اختر من مجموعة متنوعة من العقود الاحترافية المصممة لتلبية احتياجاتك</p>
        </div>
        <Categories onCategoryChange={handleCategoryChange} />
        <ContractsList category={activeCategory} searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
};

export default Contracts;
