import React from 'react';
import { Camera, Smartphone, Star, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Background with gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute top-32 right-32 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl backdrop-blur-sm animate-float-3d transform-gpu"></div>
      <div className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full backdrop-blur-sm animate-float-3d-delayed transform-gpu"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl backdrop-blur-sm animate-spin-slow transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/20 text-emerald-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">#1 AI Nutrition App of 2025</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in-up animation-delay-200">
                Your AI
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Nutrition
                </span>
                <br />
                Assistant
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                Transform how you track nutrition with AI that understands your food instantly. Just snap, analyze, and optimize your health journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform-gpu">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group bg-white/70 backdrop-blur-md border border-white/20 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl transform-gpu">
                <div className="flex items-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </div>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-8 pt-4 animate-fade-in-up animation-delay-800">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-200 transform-gpu"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-200 transform-gpu"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-200 transform-gpu"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform duration-200 transform-gpu">
                    +1M
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">1M+ Happy Users</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 transform-gpu">
              {/* Main phone mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 transform-gpu animate-phone-float">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="NutriAI App Interface" 
                    className="w-full h-full object-cover"
                  />
                  {/* App UI overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-pulse-subtle">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">347</p>
                          <p className="text-xs text-gray-600">calories detected</p>
                        </div>
                        <Camera className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float-3d hover:scale-110 transition-transform duration-300 transform-gpu">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">AI Processing</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 animate-float-3d-delayed hover:scale-110 transition-transform duration-300 transform-gpu">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">98.5%</p>
                  <p className="text-xs text-gray-600">Accuracy Rate</p>
                </div>
              </div>
            </div>
            
            {/* Background blur effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl scale-110 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}