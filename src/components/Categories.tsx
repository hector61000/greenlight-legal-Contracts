
import React, { useState } from 'react';

interface CategoryTabProps {
  name: string;
  value: string;
  isActive: boolean;
  onClick: (category: string) => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ name, value, isActive, onClick }) => {
  return (
    <button 
      className={`category-tab px-4 py-2 rounded-full border-2 text-sm font-medium ${isActive ? 'active' : ''}`} 
      onClick={() => onClick(value)}
    >
      {name}
    </button>
  );
};

const Categories: React.FC<{onCategoryChange: (category: string) => void}> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { name: 'جميع العقود', value: 'all' },
    { name: 'العقود المدنية', value: 'civil' },
    { name: 'العقود التجارية', value: 'commercial' },
    { name: 'عقود العمل', value: 'employment' },
    { name: 'عقود الإيجار', value: 'rent' },
    { name: 'عقود الشركات', value: 'companies' },
    { name: 'اتفاقيات السرية', value: 'confidentiality' },
    { name: 'عقود البيع', value: 'sales' },
    { name: 'عقود أخرى', value: 'other' },
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <section className="container mx-auto px-4 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">تصفح العقود حسب الفئة</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <CategoryTab 
            key={category.value}
            name={category.name}
            value={category.value}
            isActive={activeCategory === category.value}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
