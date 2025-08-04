import React from 'react';
import { MessageCircle, Instagram, Linkedin, Youtube, ExternalLink, Users, Heart } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    {
      name: 'WhatsApp Group',
      description: 'Join our active community discussions, get instant help, and stay updated with announcements.',
      icon: MessageCircle,
      link: 'https://chat.whatsapp.com/EGusg4GTwGdBnMTwOy7N7p',
      color: 'from-green-500 to-green-600',
      members: '300+',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'Instagram',
      description: 'Follow us for event highlights, student achievements, and behind-the-scenes content.',
      icon: Instagram,
      link: 'https://www.instagram.com/rgmcetxuipathsdc/',
      color: 'from-pink-500 to-purple-600',
      members: '500+',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
      name: 'LinkedIn',
      description: 'Connect professionally, share achievements, and explore career opportunities.',
      icon: Linkedin,
      link: 'https://www.linkedin.com/company/rgmcet-x-uipath-sdc/',
      color: 'from-blue-500 to-blue-600',
      members: '200+',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'YouTube',
      description: 'Watch tutorials, workshop recordings, and student project showcases.',
      icon: Youtube,
      link: 'https://www.youtube.com/@rgmcetxuipathsdc',
      color: 'from-red-500 to-red-600',
      members: '150+',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our <span className="text-orange-600">Community</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with fellow automation enthusiasts, share knowledge, and grow together in our vibrant community
          </p>
        </div>

        {/* Community Stats */}
        

        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className={`group backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 ${social.bgColor}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {social.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {social.description}
              </p>

              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn inline-flex items-center justify-center w-full bg-gradient-to-r ${social.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}
              >
                Join {social.name}
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        
      </div>
    </section>
  );
};

export default Community;
