
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useTutorialSlides } from '@/hooks/useTutorialSlides';
import SlideNavigation from '@/components/tutorial/SlideNavigation';
import TutorialStyles from '@/components/tutorial/TutorialStyles';
import IntroSlide from '@/components/tutorial/slides/IntroSlide';
import StatsSlide from '@/components/tutorial/slides/StatsSlide';
import ContractTemplatesSlide from '@/components/tutorial/slides/ContractTemplatesSlide';
import CustomizationSlide from '@/components/tutorial/slides/CustomizationSlide';
import WordDownloadsSlide from '@/components/tutorial/slides/WordDownloadsSlide';

const Tutorial = () => {
  const navigate = useNavigate();
  const slides = [
    // Slide 1 - Main intro
    { component: <IntroSlide /> },
    // Slide 2 - Statistics
    { component: <StatsSlide /> },
    // Slide 3 - Contract Templates
    { component: <ContractTemplatesSlide /> },
    // Slide 4 - Customization Process
    { component: <CustomizationSlide /> },
    // Slide 5 - Word Downloads
    { component: <WordDownloadsSlide /> },
  ];
  
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useTutorialSlides(slides.length);

  const goToContracts = () => {
    navigate('/contracts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">دليل استخدام منصة جرين لايت</h1>
          
          <div className="slide-container bg-white pattern-bg relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-6xl">
            <div className="legal-decoration">
              <i className="fas fa-balance-scale text-9xl transform rotate-12"></i>
            </div>
            
            {slides[currentSlide].component}
            
            <SlideNavigation 
              currentSlide={currentSlide}
              totalSlides={slides.length}
              onPrev={prevSlide}
              onNext={nextSlide}
              onGoToSlide={goToSlide}
            />
          </div>
          
          <div className="text-center mt-10">
            <Button 
              onClick={goToContracts}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full text-lg shadow-lg"
            >
              <i className="fas fa-file-contract ml-2"></i>
              تصفح العقود الآن
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <TutorialStyles />
    </div>
  );
};

export default Tutorial;
