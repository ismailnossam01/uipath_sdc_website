import React from 'react';
import { Target, Eye, CheckCircle, Users, BookOpen, Award, Network, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    { icon: BookOpen, text: 'Hands-on RPA training' },
    { icon: Award, text: 'Free access to UiPath courses' },
    { icon: Users, text: 'Project mentorship and team collaborations' },
    { icon: CheckCircle, text: 'Certificates, swags, and badges' },
    { icon: Network, text: 'Network with industry experts' },
    { icon: Briefcase, text: 'Job and internship readiness' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white/95 to-orange-50/95 dark:from-gray-900/95 dark:to-gray-800/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 dark:bg-orange-800/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 dark:bg-orange-700/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-orange-600">UiPath SDC</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of automation experts through collaboration, innovation, and hands-on learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What is SDC */}
          <div className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is an SDC?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The Student Developer Community (SDC) is a UiPath-backed initiative designed to create automation champions on campus. It acts as a bridge between students and the growing field of Robotic Process Automation (RPA), fostering collaboration, mentorship, and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                Conducts workshops, seminars, and hackathons
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                Enables real-world problem solving
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                Offers guided learning paths and certifications
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-orange-600 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To democratize RPA knowledge and empower students to become automation experts of tomorrow.
              </p>
            </div>

            <div className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-orange-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A world where every student is equipped with the skills to automate and optimize daily tasks, contributing to smarter workforces.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Benefits for Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center p-4 rounded-xl bg-orange-50/80 dark:bg-gray-700/50 hover:bg-orange-100/90 dark:hover:bg-gray-700/80 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:transform hover:scale-105 border border-transparent hover:border-orange-200/50 dark:hover:border-orange-800/50"
              >
                <benefit.icon className="w-6 h-6 text-orange-600 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;