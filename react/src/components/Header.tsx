import React from 'react';
import { Camera, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-white/20 shadow-lg animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-left">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              NutriAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 animate-fade-in">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105 transform-gpu">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105 transform-gpu">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105 transform-gpu">
              Reviews
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105 transform-gpu">
              Pricing
            </a>
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 transform-gpu">
              <div className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200 transform-gpu animate-fade-in-right"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-all duration-200 hover:translate-x-2 transform-gpu">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-all duration-200 hover:translate-x-2 transform-gpu">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-all duration-200 hover:translate-x-2 transform-gpu">
                Reviews
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-all duration-200 hover:translate-x-2 transform-gpu">
                Pricing
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold w-fit mt-4 hover:scale-105 transition-transform duration-200 transform-gpu">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}