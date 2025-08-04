import React from 'react';
import { ArrowRight, Rocket, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-white/90 to-orange-100/80 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 pt-24 sm:pt-32"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/30 dark:bg-orange-500/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/30 dark:bg-orange-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-orange-300/10 dark:from-orange-800/10 dark:to-orange-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text & Image (Reordered for mobile-first) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full">
            {/* Text */}
            <div className="text-center lg:text-left max-w-2xl pl-4 sm:pl-8 lg:pl-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  UiPath SDC Portal
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Rocket className="w-8 h-8 text-orange-500 mr-3 animate-bounce" />
                <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-semibold">
                  The Future of Automation Starts Here
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Discover, learn, and innovate with Robotic Process Automation. Join a student
                community that empowers you with cutting-edge automation skills.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://academy.uipath.com/learning-plans/rpa-developer-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Award className="w-5 h-5 mr-2" />
                  Start Learning RPA
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-sm lg:max-w-md animate-float">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/UiPath_Logo.svg"
                alt="UiPath"
                className="w-full h-auto rounded-3xl shadow-xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16">
          <div className="flex flex-col items-center text-center group backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-orange-300/50 dark:hover:border-orange-600/50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">300+</div>
            <div className="text-gray-700 dark:text-gray-300">Active Students</div>
          </div>

          <div className="flex flex-col items-center text-center group backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-orange-300/50 dark:hover:border-orange-600/50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-gray-700 dark:text-gray-300">Free Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
