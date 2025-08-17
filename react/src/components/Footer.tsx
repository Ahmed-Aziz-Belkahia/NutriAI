import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Twitter, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden perspective-1000">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-40 right-40 w-24 h-24 bg-emerald-500/3 rounded-2xl backdrop-blur-sm animate-rotate-3d transform-gpu"></div>
      <div className="absolute bottom-40 left-40 w-20 h-20 bg-teal-500/3 rounded-full backdrop-blur-sm animate-float-3d transform-gpu"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-12 animate-stagger-in">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 transform-gpu">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                NutriAI
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md text-lg lg:text-xl animate-fade-in-up animation-delay-200">
              Transform your nutrition tracking with AI-powered photo recognition and personalized meal recommendations. Join millions who've revolutionized their health journey.
            </p>
            
            <div className="flex space-x-4 animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer group transform-gpu">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer group transform-gpu">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer group transform-gpu">
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer group transform-gpu">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h3 className="font-bold text-xl lg:text-2xl text-white">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">API Access</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Integrations</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <h3 className="font-bold text-xl lg:text-2xl text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Contact Us</a></li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">
                  Terms of Service
                </Link>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 hover:translate-x-2 transition-all duration-200 transform-gpu">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-16 pt-12 border-t border-gray-800 animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-base lg:text-lg">Get the latest nutrition tips, app updates, and exclusive offers.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white/20 focus:scale-105 transition-all duration-200 transform-gpu"
              />
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 transform-gpu">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-800 animate-fade-in-up animation-delay-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 NutriAI Inc. All rights reserved. Made with ❤️ for better health.
            </p>
            
            <div className="flex items-center space-x-6 text-sm lg:text-base text-gray-400">
              <span>🇺🇸 English</span>
              <span>•</span>
              <span>USD $</span>
              <span>•</span>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}