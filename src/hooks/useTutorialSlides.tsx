
import { useState, useEffect } from 'react';

export function useTutorialSlides(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | 'none'>('none');

  // مدة الانتقال بين الشرائح بالمللي ثانية
  const transitionDuration = 300;

  const nextSlide = () => {
    if (isAnimating) return;
    
    setDirection('next');
    setIsAnimating(true);
    
    console.log("Moving to next slide");
    
    // تأخير قصير لتطبيق الانتقال قبل تغيير الشريحة
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, 50);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setDirection('prev');
    setIsAnimating(true);
    
    console.log("Moving to previous slide");
    
    // تأخير قصير لتطبيق الانتقال قبل تغيير الشريحة
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === 0 ? totalSlides - 1 : prev - 1
      );
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    
    console.log(`Going to slide ${index}`);
    
    setTimeout(() => {
      setCurrentSlide(index);
    }, 50);
  };

  // إعادة تعيين حالة التحريك بعد انتهاء مدة الانتقال
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        console.log("Animation completed");
      }, transitionDuration);
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating, transitionDuration]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isAnimating,
    direction,
    transitionDuration
  };
}
