import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-100 dark:bg-blue-900">
        <div className="sticky top-32 h-24 w-1 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
      </div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline point */}
            <div className="md:w-1/2 relative">
              <div className="hidden md:block absolute w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 top-6 -right-2 transform translate-x-1/2"></div>
              <div className={`md:pr-16 ${index % 2 === 0 ? 'md:pl-0' : 'md:pl-0'} pl-10 relative`}>
                {/* Mobile timeline point */}
                <div className="md:hidden absolute w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 top-1.5 left-0"></div>
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.date}</span>
                  <h3 className="text-xl font-bold mt-2 dark:text-white">{item.title}</h3>
                  {item.company && (
                    <h4 className="text-gray-600 dark:text-gray-400 font-medium">{item.company}</h4>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mt-3">{item.description}</p>
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;