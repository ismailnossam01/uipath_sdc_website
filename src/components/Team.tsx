import React from 'react';
import { Users, Mail, User, GraduationCap, Award } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'S.Md. Shahid Afrid',
      designation: 'UiPath Student Developer Champion',
      department: 'CSE(DS)',
      regNo: '23091A32D4',
      email: '23091a32d4@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754360218/WhatsApp_Image_2025-08-04_at_22.54.03_fgl4pf.jpg',
      linkedIn: 'https://linkedin.com/in/shahid-afrid' // 🔁 UPDATE THIS
    },
    {
      name: 'S. Afreen',
      designation: 'Core Lead',
      department: 'CSE(DS)',
      regNo: '23091A3202',
      email: '23091a3202@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754327825/WhatsApp_Image_2025-08-04_at_22.45.57_rphbi7.jpg',
      linkedIn: 'https://linkedin.com/in/afreen' // 🔁 UPDATE THIS
    },
    {
      name: 'N. Sharukesh',
      designation: 'Core Lead (Designing)',
      department: 'CSE(DS)',
      regNo: '23091A32D8',
      email: '23091a32d8@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754327825/WhatsApp_Image_2025-08-04_at_22.45.57_1_ihxy1x.jpg',
      linkedIn: 'https://linkedin.com/in/sharukesh' // 🔁 UPDATE THIS
    },
    {
      name: 'S. Vasavi',
      designation: 'Core Lead (Social Media & Photography)',
      department: 'CSE(DS)',
      regNo: '23091A32H7',
      email: '23091a32h7@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754327825/WhatsApp_Image_2025-08-04_at_22.45.56_xycj7i.jpg',
      linkedIn: 'https://linkedin.com/in/vasavi' // 🔁 UPDATE THIS
    },
    {
      name: 'K. Tharakesh',
      designation: 'Core Lead',
      department: 'CSE(DS)',
      regNo: '23091A32G8',
      email: '23092a32g8@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754327826/WhatsApp_Image_2025-08-04_at_22.45.56_1_lv8gtv.jpg',
      linkedIn: 'https://linkedin.com/in/tharakesh' // 🔁 UPDATE THIS
    },
    {
      name: 'S. Sheema Firdose',
      designation: 'Core Lead',
      department: 'CSE(AI&ML)',
      regNo: '22091A3352',
      email: '22091a3352@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754360217/WhatsApp_Image_2025-08-04_at_22.59.03_vrer79.jpg',
      linkedIn: 'https://linkedin.com/in/sheema-firdose' // 🔁 UPDATE THIS
    },
    {
      name: 'Ismail N',
      designation: 'Core Lead (Technical)',
      department: 'CSE(AI&ML)',
      regNo: '22091A3320',
      email: '22091a3320@rgmcet.edu.in',
      image: 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754327889/WhatsApp_Image_2025-08-04_at_22.47.42_klcefg.jpg',
      linkedIn: 'https://linkedin.com/in/ismail-nossam' // 🔁 UPDATE THIS
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating Blobs */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-orange-500/15 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-orange-300/50 dark:hover:border-orange-600/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-600/50 group-hover:border-orange-300/70 dark:group-hover:border-orange-600/70 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Designation below the name */}
                <p className="text-sm font-semibold text-white bg-orange-500 dark:bg-orange-600 px-3 py-1 rounded-full inline-block">
                  {member.designation}
                </p>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-orange-500" />
                    {member.department}
                  </div>
                  <div className="flex items-center justify-center">
                    <User className="w-4 h-4 mr-2 text-orange-500" />
                    {member.regNo}
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-orange-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-orange-600 dark:hover:text-orange-400">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
