
import React, { ReactNode, useEffect, useState } from 'react';

interface TutorialSlideProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  isActive?: boolean;
  direction?: 'next' | 'prev' | 'none';
  transitionDuration?: number;
}

const TutorialSlide = ({ 
  title, 
  subtitle, 
  children, 
  isActive = false,
  direction = 'none',
  transitionDuration = 300
}: TutorialSlideProps) => {
  const [visible, setVisible] = useState(isActive);
  
  useEffect(() => {
    if (isActive) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, transitionDuration);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, transitionDuration]);

  if (!visible && !isActive) {
    return null;
  }

  // تحديد فئات التأثير المتحرك بناءً على الاتجاه والحالة النشطة
  const getAnimationClasses = () => {
    if (!isActive && visible) {
      return direction === 'next' 
        ? 'animate-slide-out-right' 
        : 'animate-slide-out-left';
    }
    
    if (isActive) {
      return direction === 'next' 
        ? 'animate-slide-in-left' 
        : 'animate-slide-in-right';
    }
    
    return '';
  };

  return (
    <div 
      className={`flex flex-col items-center justify-start h-full z-10 relative py-12 transition-opacity ${getAnimationClasses()}`}
      style={{ 
        transitionDuration: `${transitionDuration}ms`,
        opacity: isActive ? 1 : 0,
        position: isActive ? 'relative' : 'absolute',
        width: '100%',
        top: 0,
        left: 0
      }}
    >
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
