import React from 'react';
import { Code, Database, Bot, FileText, ArrowRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProject = {
    title: 'Resume Parser Bot',
    description: 'An intelligent automation bot that parses student resumes, extracts key information including skills, experience, and education, then automatically stores the structured data in a database for easy access and analysis.',
    tools: ['UiPath Studio', 'Python', 'SQL', 'OCR'],
    features: [
      'Automated resume parsing from multiple formats',
      'Intelligent data extraction using AI',
      'Database integration for structured storage',
      'Bulk processing capabilities'
    ],
    status: 'Coming Soon',
    icon: FileText
  };

  const projectIdeas = [
    {
      title: 'Invoice Processing Bot',
      description: 'Automate invoice data extraction and validation',
      icon: FileText,
      complexity: 'Intermediate'
    },
    {
      title: 'Email Automation System',
      description: 'Smart email categorization and response system',
      icon: Bot,
      complexity: 'Beginner'
    },
    {
      title: 'Data Migration Tool',
      description: 'Automated data transfer between systems',
      icon: Database,
      complexity: 'Advanced'
    },
    {
      title: 'Web Scraping Bot',
      description: 'Extract and process web data automatically',
      icon: Code,
      complexity: 'Intermediate'
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-orange-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore real-world automation projects that solve practical problems and demonstrate the power of RPA
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="backdrop-blur-sm bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-orange-100 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Project Icon and Status */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <featuredProject.icon className="w-10 h-10 text-white" />
                </div>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-sm font-semibold rounded-full">
                  {featuredProject.status}
                </span>
              </div>

              {/* Project Details */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Upcoming Project Ideas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectIdeas.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-3 ${getComplexityColor(project.complexity)}`}>
                    {project.complexity}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Contribute to Projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our development team and help build amazing automation solutions that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/EGusg4GTwGdBnMTwOy7N7p"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Join Development Team
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Suggest a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;