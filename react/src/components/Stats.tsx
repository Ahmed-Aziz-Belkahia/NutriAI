import React from 'react';
import { TrendingUp, Users, Camera, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '2M+',
    label: 'Active Users',
    description: 'Trust NutriAI daily',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Camera,
    number: '50M+',
    label: 'Photos Analyzed',
    description: 'With 98.5% accuracy',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: TrendingUp,
    number: '85%',
    label: 'Health Improvement',
    description: 'Reported by users',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Award,
    number: '4.9/5',
    label: 'App Store Rating',
    description: 'From 100K+ reviews',
    gradient: 'from-orange-500 to-amber-600'
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden perspective-1000">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-teal-50/50 animate-gradient-shift"></div>
      
      {/* 3D Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-2xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
            Trusted by Millions
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {' '}Worldwide
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Join the global community that's revolutionizing their health with AI-powered nutrition tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up transform-gpu" style={{ animationDelay: `${index * 100 + 600}ms` }}>
              <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 transform-gpu">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg transform-gpu`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-lg lg:text-xl font-semibold text-gray-900">
                    {stat.label}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600">
                    {stat.description}
                  </div>
                </div>
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}