import React from 'react';
import { Camera, Scan, ChefHat, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Camera,
    title: 'Capture',
    subtitle: 'Snap Your Food',
    description: 'Simply take a photo of your meal, ingredients, or even your entire fridge with our advanced camera interface.',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['One-tap capture', 'Auto-focus optimization', 'Multiple angle support']
  },
  {
    step: '02',
    icon: Scan,
    title: 'Analyze',
    subtitle: 'AI Recognition',
    description: 'Our cutting-edge AI instantly identifies foods, portions, and ingredients with laboratory-grade precision.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['98.5% accuracy rate', 'Real-time processing', 'Complex dish recognition']
  },
  {
    step: '03',
    icon: ChefHat,
    title: 'Optimize',
    subtitle: 'Get Insights',
    description: 'Receive detailed nutritional breakdowns, personalized recommendations, and smart meal suggestions.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Macro & micro tracking', 'Personalized suggestions', 'Goal-based recommendations']
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-60 right-60 w-28 h-28 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-3xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-60 left-60 w-24 h-24 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-2xl backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/20 text-emerald-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu">
            <Scan className="w-4 h-4" />
            <span className="text-sm font-medium">Simple 3-Step Process</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
            How
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}NutriAI{' '}
            </span>
            Works
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Transform your nutrition tracking experience with our revolutionary AI-powered process that makes healthy eating effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32 animate-stagger-in">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-fade-in-up transform-gpu`} style={{ animationDelay: `${index * 200 + 600}ms` }}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-6 animate-slide-in-left">
                  <span className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-count-up">
                    {step.step}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4 animate-slide-in-left animation-delay-200">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-emerald-600 font-semibold">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 animate-slide-in-left animation-delay-400">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200 transform-gpu">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium text-base lg:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow for flow (except last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 animate-bounce-horizontal">
                    <ArrowRight className="w-8 h-8 text-emerald-400 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in-right`}>
                <div className="relative transform-gpu">
                  {/* Glass container */}
                  <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-3xl hover:scale-105 hover:rotate-1 transition-all duration-500 transform-gpu">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="rounded-2xl w-full h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-xl animate-float-3d hover:scale-110 transition-transform duration-300 transform-gpu">
                    <span className="text-sm font-bold text-emerald-600">Step {step.step}</span>
                  </div>
                </div>
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-3xl blur-2xl scale-110 animate-pulse-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}