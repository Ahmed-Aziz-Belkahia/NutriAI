import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Coach & Nutritionist',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'NutriAI has revolutionized how I help my clients track their nutrition. The AI accuracy is phenomenal, and the insights help create better meal plans. It\'s like having a nutrition lab in your pocket.',
    rating: 5,
    highlight: 'Revolutionized my practice'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Executive & Health Enthusiast',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'As someone with a demanding schedule, NutriAI fits perfectly into my lifestyle. The speed and accuracy are unmatched. I\'ve discovered so many healthy recipes I never would have tried otherwise.',
    rating: 5,
    highlight: 'Perfect for busy professionals'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Registered Dietitian',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The precision of NutriAI\'s nutritional analysis rivals professional tools I use in my practice. It\'s incredible how it recognizes complex dishes and provides detailed macro breakdowns instantly.',
    rating: 5,
    highlight: 'Professional-grade accuracy'
  },
  {
    name: 'David Park',
    role: 'Marathon Runner',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Training for marathons requires precise nutrition tracking. NutriAI helps me optimize my fuel intake with incredible accuracy. The meal suggestions based on my training schedule are spot-on.',
    rating: 5,
    highlight: 'Perfect for athletes'
  },
  {
    name: 'Lisa Thompson',
    role: 'Busy Mom of Three',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Managing nutrition for a family of five was overwhelming until I found NutriAI. Now I can quickly analyze family meals and get suggestions for healthier alternatives that my kids actually enjoy.',
    rating: 5,
    highlight: 'Family nutrition made easy'
  },
  {
    name: 'James Wilson',
    role: 'Personal Trainer',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'I recommend NutriAI to all my clients. The app\'s ability to learn individual preferences and provide personalized recommendations has helped my clients achieve their fitness goals faster.',
    rating: 5,
    highlight: 'Recommended by professionals'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-32 left-32 w-20 h-20 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-2xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/20 text-emerald-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">2M+ Happy Users</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
            Loved by
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Health Experts
            </span>
            <br />
            & Everyday Users
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            See what nutrition professionals, fitness experts, and health-conscious individuals are saying about their NutriAI experience.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-16 animate-fade-in-up animation-delay-600">
          <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto hover:shadow-3xl hover:scale-105 transition-all duration-500 transform-gpu">
            <div className="flex items-center justify-between mb-8">
              <Quote className="w-12 h-12 text-emerald-500 animate-float-3d" />
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/70 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-200 shadow-lg transform-gpu"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/70 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-200 shadow-lg transform-gpu"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium animate-fade-in">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300 transform-gpu"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg lg:text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600 text-base lg:text-lg">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-emerald-600 font-semibold">{testimonials[currentIndex].highlight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-stagger-in">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 transform-gpu animate-fade-in-up" style={{ animationDelay: `${index * 100 + 800}ms` }}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4 text-base lg:text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300 transform-gpu"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              {/* 3D depth effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 transform-gpu"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-1200">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 animate-count-up">
              2M+
            </div>
            <p className="text-gray-600 font-medium text-base lg:text-lg">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 animate-count-up">
              50M+
            </div>
            <p className="text-gray-600 font-medium text-base lg:text-lg">Photos Analyzed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 animate-count-up">
              4.9/5
            </div>
            <p className="text-gray-600 font-medium text-base lg:text-lg">App Store Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}