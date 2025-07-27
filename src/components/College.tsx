import React from 'react';
import { GraduationCap, MapPin, Award, Quote } from 'lucide-react';

const College: React.FC = () => {
  return (
    <section id="college" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-orange-600">College</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Excellence in Engineering Education and Innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* College Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-orange-100 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-10 h-10 text-orange-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">RGMCET</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">Autonomous Institution</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                RGMCET is a leading engineering institution committed to academic excellence and innovation. With a vibrant campus and a legacy of producing tech leaders, the college now embraces automation through the UiPath SDC initiative.
              </p>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                <span>Nerawada X Roads, Nandyal, Andhra Pradesh, 518501</span>
              </div>
            </div>

            {/* Department Info */}
            <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-orange-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Host Department</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">Computer Science & Engineering (Data Science)</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Known for its strong technical foundation, student clubs, and coding culture, the Department of Computer Science & Engineering (Data Science) is proud to host the UiPath SDC.
              </p>
            </div>
          </div>

          {/* Support Message */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-white/80 mb-6" />
              <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
                "At RGMCET, we believe in learning by doing. Our partnership with UiPath Academy brings the power of automation directly into the hands of our students."
              </blockquote>
              <div className="text-white/90 font-medium">
                - RGMCET Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2000+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Students</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">8</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Departments</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Years</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">95%</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Placement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;