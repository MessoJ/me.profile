import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import X from './icons/X';
//import Envelope1 from './icons/Envelope1';
//import ArrowUpward from './icons/ArrowUpward';
import ChevronDownCircle from './icons/ChevronDownCircle';
import Download1 from './icons/Download1';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock download functionality
    alert('CV download functionality will be implemented with backend integration');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/30767251/pexels-photo-30767251.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-10" />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-20">
        <img
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="Meso Francis"
          className="w-40 h-40 rounded-full shadow-lg mb-8 object-cover border-4 border-white"
        />
        <div className="w-full flex flex-col items-center text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              Available for Opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Meso Francis
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming data into intelligent solutions. Specializing in machine learning, 
              automation, and scalable data systems that drive impact.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-gray-800 via-blue-900 via-blue-500 to-cyan-400 hover:from-gray-900 hover:via-blue-800 hover:to-cyan-500 text-white px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="px-8 py-3"
            >
              <Download1 className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/MessoJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/meso-francis-0345641b9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/mesofrancis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200"
          >
            <ChevronDownCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;