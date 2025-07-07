import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import X from './icons/X';
import Envelope1 from './icons/Envelope1';
import ArrowUpward from './icons/ArrowUpward';
import { Heart, Coffee, MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" fill="currentColor" />, 
      name: "GitHub",
      url: "https://github.com/MessoJ",
      hoverColor: "hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    { 
      icon: <Linkedin className="w-5 h-5" fill="currentColor" />, 
      name: "LinkedIn",
      url: "https://linkedin.com/in/mesofrancis",
      hoverColor: "hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300"
    },
    { 
      icon: <X className="w-5 h-5" fill="currentColor" />, 
      name: "X",
      url: "https://twitter.com/mesofrancis",
      hoverColor: "hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-white"
    },
    { 
      icon: <Envelope1 className="w-5 h-5" fill="currentColor" />, 
      name: "Email",
      url: "mailto:mesofrancis@outlook.com",
      hoverColor: "hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-900 dark:hover:text-emerald-300"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meso Francis
            </div>
            <p className="text-gray-300 text-sm">ML Engineer & Data Scientist</p>
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs px-2 py-1">
                Available
              </Badge>
            </div>

            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3 h-3" />
                <span>Dallas, TX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3 h-3" />
                <a href="mailto:mesofrancis@outlook.com" className="hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-xs py-1"
                >
                  <ChevronRight className="w-2.5 h-2.5" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons - Enhanced Dark Mode Visibility */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor} hover:border-white/50`}
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Let's connect and build something amazing.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>© 2024 Meso Francis</span>
            <Heart className="w-3 h-3 text-red-400 animate-pulse" />
            <Coffee className="w-3 h-3 text-amber-400 animate-bounce" />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white h-8 px-3 text-xs"
          >
            <ArrowUpward className="w-3 h-3 mr-1" />
            Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;