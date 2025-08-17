import React from 'react';
import { Camera, ChefHat, Zap, Brain, Target, Users, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Instant Photo Analysis',
    description: 'Advanced computer vision recognizes any food in seconds with 98.5% accuracy.',
    gradient: 'from-emerald-500 to-teal-600',
    delay: '0'
  },
  {
    icon: ChefHat,
    title: 'Smart Recipe Generation',
    description: 'AI creates personalized recipes from your available ingredients instantly.',
    gradient: 'from-orange-500 to-amber-600',
    delay: '100'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Machine learning adapts to your preferences and dietary restrictions over time.',
    gradient: 'from-purple-500 to-indigo-600',
    delay: '200'
  },
  {
    icon: Target,
    title: 'Precision Tracking',
    description: 'Track macros, micros, and calories with laboratory-grade precision.',
    gradient: 'from-rose-500 to-pink-600',
    delay: '300'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get complete nutritional breakdown in under 2 seconds, every time.',
    gradient: 'from-yellow-500 to-orange-600',
    delay: '400'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays secure with end-to-end encryption and local processing.',
    gradient: 'from-blue-500 to-cyan-600',
    delay: '500'
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Geometric Elements */}
      <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-3xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/20 text-emerald-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
            Features that
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Transform
            </span>
            <br />
            Your Health Journey
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Experience the next generation of nutrition tracking with AI-powered features designed for the modern health-conscious individual.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up transform-gpu"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Glass card */}
              <div className="relative bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:bg-white/80 transform-gpu">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg transform-gpu`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"></div>
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform-gpu">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}