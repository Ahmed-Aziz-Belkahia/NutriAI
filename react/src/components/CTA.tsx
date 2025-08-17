import React from 'react';
import { Smartphone, ArrowRight, Star, Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-32 right-32 w-32 h-32 bg-white/5 rounded-3xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-32 left-32 w-28 h-28 bg-white/8 rounded-2xl backdrop-blur-sm animate-float-3d transform-gpu"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/3 rounded-full backdrop-blur-sm animate-spin-slow transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* Main content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu animate-fade-in-up animation-delay-200">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Join 2M+ Users Today</span>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-bold text-white tracking-tight leading-tight animate-fade-in-up animation-delay-400">
              Ready to Transform
              <br />
              Your Health?
            </h2>
            
            <p className="text-xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
              Start your AI-powered nutrition journey today. Download NutriAI and discover how easy healthy eating can be.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-800">
            <button className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform-gpu">
              <div className="flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Download for iOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="group bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl transform-gpu">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6" />
                <span>Download for Android</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Features highlight */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 animate-stagger-in">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">Free to Start</h3>
              <p className="text-white/80 text-base lg:text-lg">No credit card required</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">Instant Setup</h3>
              <p className="text-white/80 text-base lg:text-lg">Ready in under 2 minutes</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">Immediate Results</h3>
              <p className="text-white/80 text-base lg:text-lg">Start tracking right away</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-16 border-t border-white/20 animate-fade-in-up animation-delay-1400">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm lg:text-base">4.9/5 from 100K+ reviews</span>
              </div>
              <div className="text-sm lg:text-base">✓ Featured by Apple</div>
              <div className="text-sm lg:text-base">✓ Editor's Choice on Google Play</div>
              <div className="text-sm lg:text-base">✓ 30-day money-back guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}