import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Perfect for getting started with AI nutrition tracking',
    icon: Star,
    gradient: 'from-gray-500 to-gray-600',
    popular: false,
    features: [
      '10 photo analyses per month',
      'Basic nutritional information',
      'Simple calorie tracking',
      'Community access',
      'Basic meal suggestions'
    ]
  },
  {
    name: 'Pro',
    price: '9.99',
    period: 'month',
    description: 'Ideal for serious health enthusiasts and fitness lovers',
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-600',
    popular: true,
    features: [
      'Unlimited photo analyses',
      'Advanced nutritional breakdown',
      'Macro & micro tracking',
      'Personalized meal plans',
      'Recipe generation from ingredients',
      'Goal-based recommendations',
      'Progress analytics',
      'Priority support'
    ]
  },
  {
    name: 'Premium',
    price: '19.99',
    period: 'month',
    description: 'For professionals and those who want the ultimate experience',
    icon: Crown,
    gradient: 'from-purple-500 to-indigo-600',
    popular: false,
    features: [
      'Everything in Pro',
      'AI nutritionist consultations',
      'Custom dietary restrictions',
      'Advanced health insights',
      'Integration with fitness apps',
      'Meal prep planning',
      'Family account sharing',
      'White-label reports',
      '24/7 expert support'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-3xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-40 left-40 w-28 h-28 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-2xl backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/20 text-emerald-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
            Choose Your
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Start free and upgrade when you're ready. All plans include our core AI-powered nutrition tracking with no hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-stagger-in">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''} animate-fade-in-up transform-gpu`} style={{ animationDelay: `${index * 100 + 600}ms` }}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 animate-float-3d">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform duration-300 transform-gpu">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 transform-gpu ${plan.popular ? 'border-emerald-200 shadow-emerald-100/50 hover:shadow-emerald-200/50' : ''}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-5xl lg:text-6xl font-bold text-gray-900 animate-count-up">${plan.price}</span>
                    <span className="text-gray-600 text-lg">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-200 transform-gpu">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 animate-pulse`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1' 
                    : 'bg-white/70 backdrop-blur-md border border-white/20 text-gray-700 hover:bg-white/90 shadow-lg hover:scale-105 hover:-translate-y-1'
                }`}>
                  {plan.name === 'Free' ? 'Get Started Free' : `Start ${plan.name} Trial`}
                </button>
                
                {/* 3D depth effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 transform-gpu"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <p className="text-gray-600 mb-4 text-base lg:text-lg">
            All plans include a 14-day free trial. No credit card required for Free plan.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm lg:text-base text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}