import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Glasses, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Web Development':
      return <Code2 className="text-blue-600" size={24} />;
    case 'Mobile Development':
      return <Smartphone className="text-purple-600" size={24} />;
    case 'AR Development':
      return <Glasses className="text-indigo-600" size={24} />;
    default:
      return <Sparkles className="text-gray-500" size={24} />;
  }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of full-stack web apps, mobile tools, and AR innovations crafted with dedication and modern tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain bg-white p-2 rounded-t-xl transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(project.category)}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      key={i}
                      className="text-sm font-medium px-3 py-1 rounded-full shadow-sm bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

