
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext, 
  onGoToSlide 
}: SlideNavigationProps) => {
  return (
    <>
      <div className="absolute bottom-6 left-0 right-0 text-center text-gray-600">
        <p className="text-sm">الحلول القانونية الرقمية بين يديك | شريحة {currentSlide + 1} من {totalSlides}</p>
      </div>
      
      <div className="absolute bottom-10 md:bottom-6 left-0 right-0 flex justify-center gap-4">
        <Button 
          variant="outline"
          size="icon"
          onClick={onPrev} 
          className="bg-white/80 hover:bg-white border border-gray-200 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <Button 
          variant="outline"
          size="icon"
          onClick={onNext} 
          className="bg-white/80 hover:bg-white border border-gray-200 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default SlideNavigation;
