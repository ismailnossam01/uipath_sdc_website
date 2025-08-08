import React from 'react';
import { Bot, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About SDC', href: '#about' },
    { label: 'Learn RPA', href: '#learn' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Community', href: '#community' },
  ];

  const socialLinks = [
    { label: 'WhatsApp', href: 'https://chat.whatsapp.com/EGusg4GTwGdBnMTwOy7N7p' },
    { label: 'Instagram', href: 'https://www.instagram.com/rgmcetxuipathsdc/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rgmcet-x-uipath-sdc/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@rgmcetxuipathsdc' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <img
    src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1754317604/RGMCET_UiPath_SDC_20250804_195509_0000_qzl1f6.png"
    alt="UiPath SDC Logo"
    className="w-10 h-10 rounded-xl object-cover"
  />
              </div>
              <div>
                <h3 className="text-2xl font-bold">UiPath SDC</h3>
                <p className="text-orange-400 text-sm">RGMCET</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering the next generation of automation experts through hands-on learning, collaboration, and innovation.
            </p>
            <div className="flex items-center text-gray-300 mb-3">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:uipathsdc@rgmcet.edu.in" className="hover:text-orange-400 transition-colors duration-200">
                uipathsdc@rgmcet.edu.in
              </a>
            </div>
            <div className="flex items-start text-gray-300">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm">
                RGMCET, Nerawada X Roads,<br />
                Nandyal, AP 518501
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Community</h4>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://academy.uipath.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                >
                  UiPath Academy
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.uipath.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://forum.uipath.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                >
                  Community Forum
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.uipath.com/learning/certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                >
                  Certifications
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 UiPath SDC RGMCET. All rights reserved.
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by RGMCET, UiPath SDC Core Team, Ismail N & Divya D.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
