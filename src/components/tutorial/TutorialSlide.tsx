
import React, { ReactNode } from 'react';

interface TutorialSlideProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const TutorialSlide = ({ title, subtitle, children }: TutorialSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-start h-full z-10 relative py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">{title}</h2>
      
      <div className="h-1 w-20 green-light-bg my-4"></div>
      
      <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto text-gray-600 mb-8">
        {subtitle}
      </p>
      
      {children}
    </div>
  );
};

export default TutorialSlide;
