import React from 'react';
import { ArrowRight, Rocket, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-white/90 to-orange-100/80 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/30 dark:bg-orange-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/30 dark:bg-orange-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-orange-300/10 dark:from-orange-800/10 dark:to-orange-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                UiPath SDC Portal
              </span>
            </h1>
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-orange-500 mr-3 animate-bounce" />
              <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-semibold">
                The Future of Automation Starts Here
              </p>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover, learn, and innovate with Robotic Process Automation. Join a student community that empowers you with cutting-edge automation skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://chat.whatsapp.com/EGusg4GTwGdBnMTwOy7N7p"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://academy.uipath.com/learning-plans/rpa-developer-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-md bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-orange-200/50 dark:border-orange-800/50 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Start Learning RPA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-orange-300/50 dark:hover:border-orange-600/50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">300+</div>
              <div className="text-gray-700 dark:text-gray-300">Active Students</div>
            </div>
            <div className="group backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-orange-300/50 dark:hover:border-orange-600/50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="group backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-orange-300/50 dark:hover:border-orange-600/50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300">Free Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;