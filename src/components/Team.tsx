import React from 'react';
import { Users, Mail, User, GraduationCap, Award } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      designation: 'President',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05A1',
      email: 'rajesh.kumar@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Sharma',
      designation: 'Vice President',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05B2',
      email: 'priya.sharma@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arjun Reddy',
      designation: 'Technical Lead',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05C3',
      email: 'arjun.reddy@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sneha Patel',
      designation: 'Event Coordinator',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05D4',
      email: 'sneha.patel@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Vikram Singh',
      designation: 'Project Manager',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05E5',
      email: 'vikram.singh@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ananya Gupta',
      designation: 'Content Creator',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05F6',
      email: 'ananya.gupta@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Karthik Rao',
      designation: 'Community Manager',
      department: 'Computer Science & Engineering (Data Science)',
      regNo: '21CS1A05G7',
      email: 'karthik.rao@rgmcet.edu.in',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getDesignationColor = (designation: string) => {
    switch (designation) {
      case 'President':
        return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'Vice President':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Technical Lead':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'Event Coordinator':
        return 'bg-gradient-to-r from-pink-500 to-pink-600';
      case 'Project Manager':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600';
      case 'Content Creator':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      case 'Community Manager':
        return 'bg-gradient-to-r from-red-500 to-red-600';
      default:
        return 'bg-gradient-to-r from-orange-500 to-orange-600';
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300/20 dark:bg-orange-700/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-orange-200/20 dark:bg-orange-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and automation excellence at RGMCET
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/15 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-600/50 group-hover:border-orange-300/70 dark:group-hover:border-orange-600/70 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Designation Badge */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getDesignationColor(member.designation)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {member.designation}
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                    <GraduationCap className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="truncate">{member.department}</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                    <User className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="font-mono">{member.regNo}</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                    <Mail className="w-4 h-4 mr-2 text-orange-500" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
      </div>
    </section>
  );
};

export default Team;
