import React from 'react';
import { BookOpen, ExternalLink, Star, Clock, TrendingUp } from 'lucide-react';

const LearnRPA: React.FC = () => {
  const courses = [
    {
      title: 'RPA Developer Foundation',
      description: 'Beginner-friendly, self-paced course covering the basics of RPA and UiPath Studio.',
      level: 'Beginner',
      duration: '40 hours',
      rating: 4.8,
      link: 'https://academy.uipath.com/learning-plans/rpa-developer-foundation',
      features: ['UiPath Studio Basics', 'Workflow Design', 'Data Manipulation', 'Exception Handling']
    },
    {
      title: 'Automation Developer Associate Training',
      description: 'Learn REFramework, orchestrator integration, and advanced automation scenarios.',
      level: 'Advanced',
      duration: '60 hours',
      rating: 4.9,
      link: 'https://academy.uipath.com/learning-plans/automation-developer-associate-training-(v2023.10)',
      features: ['REFramework', 'Orchestrator', 'Advanced Scenarios', 'Best Practices']
    }
  ];

  const getLevelColor = (level: string) => {
    return level === 'Beginner' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
  };

  const getLevelIcon = (level: string) => {
    return level === 'Beginner' ? BookOpen : TrendingUp;
  };

  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-orange-50/95 to-white/95 dark:from-gray-800/95 dark:to-gray-900/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300/20 dark:bg-orange-700/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-orange-200/20 dark:bg-orange-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn <span className="text-orange-600">RPA</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master Robotic Process Automation with industry-leading courses from UiPath Academy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const LevelIcon = getLevelIcon(course.level);
            return (
              <div
                key={index}
                className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/15 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <LevelIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{course.rating}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Duration */}
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{course.duration}</span>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">What you'll learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center">
                  Start Learning
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our community and get guidance from experienced mentors and fellow students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="#community"
                className="backdrop-blur-md bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300/90 dark:hover:bg-gray-600/90 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Contact Mentors
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnRPA;
