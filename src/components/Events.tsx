import React from 'react';
import { Calendar, Clock, Users, CheckCircle, MapPin, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: 'UiPath Automation Developer Associate Series',
      date: 'June 19th - June 24, 2025',
      time: '7:00 PM - 8:00 PM',
      attendees: '300+',
      status: 'completed',
      description: 'This bootcamp is specifically curated to build strong fundamentals in Robotic Process Automation (RPA), equip students with hands-on experience using UiPath tools, guide them toward clearing the UiPath Automation Developer Associate Certification, and prepare them for real-world automation challenges in the industry.',
      highlights: [
        'Build strong fundamentals in RPA',
        'Hands-on experience with UiPath tools',
        'Certification guidance',
        'Real-world automation challenges'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Advanced RPA Workshop',
      date: 'Coming Soon',
      description: 'Deep dive into advanced RPA concepts and enterprise-level automation.'
    },
    {
      title: 'RPA Hackathon 2025',
      date: 'Coming Soon',
      description: 'Build innovative automation solutions and compete with peers.'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Events & <span className="text-orange-600">Workshops</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our exciting events and workshops to enhance your RPA skills and network with fellow automation enthusiasts
          </p>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Recent Events</h3>
          {events.map((event, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-orange-100 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto"
            >
              {/* Event Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mr-4">
                      {event.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="font-medium">{event.attendees} Attendees</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {event.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h4>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-4">
                    {event.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 max-w-4xl mx-auto text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Events</h3>
            <p className="text-orange-100 mb-6">
              Join our community to get notified about upcoming workshops, hackathons, and networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/EGusg4GTwGdBnMTwOy7N7p"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Join WhatsApp Group
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://www.instagram.com/rgmcetxuipathsdc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Follow on Instagram
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;